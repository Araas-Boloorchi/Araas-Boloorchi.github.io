/* ==========================================================================
   Portfolio behaviour: tab routing, the explainer modal, and keyword search.

   Contents
     1. Tabs        — one panel at a time, driven by the URL hash
     2. Modal       — click a card (or its video) for the full write-up
     3. Search      — filters cards inside the active tab
     4. Card videos — play while on screen, pause when not
   ========================================================================== */
(function () {
    'use strict';

    /* 1. Tabs
       ---------------------------------------------------------------------- */
    var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
    var panels = Array.prototype.slice.call(document.querySelectorAll('[role="tabpanel"]'));

    function showTab(name, push) {
        var match = tabs.some(function (t) { return t.dataset.tab === name; });
        if (!match) { name = tabs[0].dataset.tab; }

        tabs.forEach(function (t) {
            var on = t.dataset.tab === name;
            t.setAttribute('aria-selected', on ? 'true' : 'false');
            t.tabIndex = on ? 0 : -1;
        });
        panels.forEach(function (p) {
            p.hidden = p.dataset.panel !== name;
        });

        if (push && location.hash.slice(1) !== name) {
            history.pushState(null, '', '#' + name);
        }
        window.scrollTo(0, 0);
    }

    tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            showTab(tab.dataset.tab, true);
        });
        // left/right arrows move between tabs, per the ARIA tabs pattern
        tab.addEventListener('keydown', function (e) {
            var step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
            if (!step) { return; }
            e.preventDefault();
            var next = tabs[(i + step + tabs.length) % tabs.length];
            next.focus();
            showTab(next.dataset.tab, true);
        });
    });

    // hero buttons jump to a panel
    document.querySelectorAll('[data-goto]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            showTab(btn.dataset.goto, true);
        });
    });

    window.addEventListener('popstate', function () {
        showTab(location.hash.slice(1), false);
    });
    showTab(location.hash.slice(1) || tabs[0].dataset.tab, false);

    /* 2. Explainer modal
       ---------------------------------------------------------------------- */
    var modal = document.getElementById('modal');
    var mMedia = document.getElementById('modal-media');
    var mTitle = document.getElementById('modal-title');
    var mSub = document.getElementById('modal-subtitle');
    var mBody = document.getElementById('modal-body');
    var mLink = document.getElementById('modal-link');
    var lastFocus = null;

    function mediaMarkup(media, title) {
        if (!media) { return ''; }
        if (media.kind === 'youtube') {
            return '<div class="video-embed"><iframe src="' + media.src + '?autoplay=1&mute=1" ' +
                'title="' + title.replace(/"/g, '&quot;') + '" ' +
                'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" ' +
                'allowfullscreen></iframe></div>';
        }
        if (media.kind === 'video') {
            return '<video controls autoplay muted loop playsinline>' +
                '<source src="' + media.src + '" type="video/mp4"></video>';
        }
        // a placeholder image that has not been added yet should collapse, not
        // show a broken-image icon
        return '<img src="' + media.src + '" alt="' + title.replace(/"/g, '&quot;') +
            '" onerror="if (this.parentNode) this.parentNode.hidden = true">';
    }

    function openModal(key) {
        var item = window.CONTENT && window.CONTENT[key];
        if (!item) { return; }

        lastFocus = document.activeElement;
        mTitle.textContent = item.title;
        mSub.textContent = item.subtitle || '';
        mSub.hidden = !item.subtitle;
        mMedia.innerHTML = mediaMarkup(item.media, item.title);
        mMedia.hidden = !item.media;
        mBody.innerHTML = item.body || '';

        if (item.link) {
            mLink.href = item.link;
            var host = new URL(item.link).hostname.replace(/^www\./, '');
            mLink.textContent = (/(^|\.)youtube\.com$|^youtu\.be$/.test(host) ? 'Watch on YouTube' : 'Visit ' + host) + ' ↗';
            mLink.hidden = false;
        } else {
            mLink.hidden = true;
        }

        modal.hidden = false;
        requestAnimationFrame(function () { modal.classList.add('active'); });
        document.body.style.overflow = 'hidden';
        modal.querySelector('.modal-close').focus();
    }

    function closeModal() {
        modal.classList.remove('active');
        modal.hidden = true;
        mMedia.innerHTML = '';           // stops video playback
        document.body.style.overflow = '';
        if (lastFocus) { lastFocus.focus(); }
    }

    // An external link inside a card (which is itself a link) opens in a new tab
    // instead of the card's modal.
    function openCardLink(el) {
        window.open(el.dataset.href, '_blank', 'noopener');
    }
    document.addEventListener('keydown', function (e) {
        var el = e.target.closest && e.target.closest('.card-ext-link');
        if (el && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            e.stopPropagation();
            openCardLink(el);
        }
    }, true);

    // Any element carrying data-key opens the modal instead of navigating.
    document.addEventListener('click', function (e) {
        var ext = e.target.closest('.card-ext-link');
        if (ext) {
            e.preventDefault();
            openCardLink(ext);
            return;
        }
        var trigger = e.target.closest('[data-key]');
        if (!trigger) { return; }
        var key = trigger.dataset.key;
        if (!(window.CONTENT && window.CONTENT[key])) { return; }  // let the link through
        e.preventDefault();
        openModal(key);
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal || e.target.closest('.modal-close')) { closeModal(); return; }
        // a link in the write-up to another tab (index.html#name) switches tab in place
        var a = e.target.closest('a[href*="#"]');
        if (a && /(^|index\.html)#/.test(a.getAttribute('href'))) {
            var name = a.getAttribute('href').split('#')[1];
            if (tabs.some(function (t) { return t.dataset.tab === name; })) {
                e.preventDefault();
                closeModal();
                showTab(name, true);
            }
        }
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.hidden) { closeModal(); }
    });

    /* 3. Search
       Filters the cards in the visible panel; empty query restores everything.
       ---------------------------------------------------------------------- */
    var search = document.getElementById('global-search');
    var status = document.getElementById('search-status');

    function runSearch() {
        var q = search.value.trim().toLowerCase();
        var items = document.querySelectorAll('.searchable-item');
        var shown = 0;

        items.forEach(function (el) {
            var hay = ((el.dataset.search || '') + ' ' + el.textContent).toLowerCase();
            var hit = !q || hay.indexOf(q) !== -1;
            el.hidden = !hit;
            if (hit) { shown++; }
        });

        // when searching, reveal every panel so results are not hidden behind a tab
        panels.forEach(function (p) {
            if (!q) { return; }
            p.hidden = !p.querySelector('.searchable-item:not([hidden])');
        });
        if (!q) {
            showTab(tabs.filter(function (t) {
                return t.getAttribute('aria-selected') === 'true';
            })[0].dataset.tab, false);
        }

        status.textContent = q ? (shown + ' match' + (shown === 1 ? '' : 'es') + ' for "' + search.value.trim() + '"') : '';
    }

    if (search) {
        search.addEventListener('input', runSearch);
        search.addEventListener('search', runSearch);
    }
    window.performSearch = runSearch;   // kept for any inline caller

    /* 4. Card videos
       Every clip plays, muted and looping, as soon as its card is on screen,
       and pauses when it scrolls away or its tab is closed. Letting all of them
       autoplay regardless cost hundreds of requests for clips nobody could see.
       ---------------------------------------------------------------------- */
    function playClip(v) {
        var p = v.play();
        if (p && p.catch) { p.catch(function () { /* autoplay blocked */ }); }
    }

    // YouTube cards show a thumbnail until first seen, then swap in a muted,
    // looping, control-free player; clicks still reach the card underneath.
    function startEmbed(media) {
        if (media.querySelector('iframe')) { return; }
        var id = media.dataset.youtube;
        var f = document.createElement('iframe');
        f.src = 'https://www.youtube-nocookie.com/embed/' + id +
            '?autoplay=1&mute=1&loop=1&playlist=' + id + '&controls=0&playsinline=1&modestbranding=1&rel=0';
        f.title = '';
        f.tabIndex = -1;
        f.setAttribute('aria-hidden', 'true');
        f.allow = 'autoplay; encrypted-media';
        f.className = 'card-embed';
        media.appendChild(f);
    }

    // A card with data-clip plays one excerpt of a YouTube video (data-start to
    // data-end seconds) over its picture, then fades away to reveal the picture.
    function startClip(media) {
        if (media.dataset.clipped) { return; }
        media.dataset.clipped = '1';
        var id = media.dataset.clip;
        var start = +media.dataset.start || 0;
        var end = +media.dataset.end || start + 10;
        var f = document.createElement('iframe');
        f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?start=' + start + '&end=' + end +
            '&autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1&rel=0&enablejsapi=1' +
            '&origin=' + encodeURIComponent(location.origin);
        f.title = '';
        f.tabIndex = -1;
        f.setAttribute('aria-hidden', 'true');
        f.allow = 'autoplay; encrypted-media';
        f.className = 'card-clip';
        media.appendChild(f);

        var finished = false;
        function finish() {
            if (finished) { return; }
            finished = true;
            window.removeEventListener('message', onMsg);
            f.classList.add('done');
            setTimeout(function () {
                f.remove();
                delete media.dataset.clipped;   // plays again next time the card scrolls into view
            }, 700);
        }
        // The player reports state changes once asked to; 0 means "ended".
        function onMsg(e) {
            if (e.source !== f.contentWindow) { return; }
            var d;
            try { d = typeof e.data === 'string' ? JSON.parse(e.data) : e.data; } catch (err) { return; }
            if (!d) { return; }
            if (d.event === 'onStateChange' && d.info === 0) { finish(); }
            if (d.event === 'infoDelivery' && d.info && d.info.playerState === 0) { finish(); }
        }
        window.addEventListener('message', onMsg);
        f.addEventListener('load', function () {
            f.contentWindow.postMessage(JSON.stringify({ event: 'listening', id: id }), '*');
            // backup in case the player never reports back: clip length plus load slack
            setTimeout(finish, (end - start + 8) * 1000);
        });
    }

    var seen = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
            var el = en.target;
            if (el.tagName === 'VIDEO') {
                if (en.isIntersecting) { playClip(el); } else { el.pause(); }
            } else if (en.isIntersecting) {
                if (el.dataset.clip) { startClip(el); } else { startEmbed(el); }
            }
        });
    }, { threshold: 0.25 });

    document.querySelectorAll('.project-media video').forEach(function (v) {
        v.muted = true;            // browsers only autoplay muted media
        seen.observe(v);
    });
    document.querySelectorAll('.project-media[data-youtube], .project-media[data-clip]').forEach(function (m) {
        seen.observe(m);
    });
})();
