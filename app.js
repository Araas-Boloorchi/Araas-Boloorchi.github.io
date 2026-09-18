/* ==========================================================================
   Portfolio behaviour: tab routing, the explainer modal, and keyword search.

   Contents
     1. Tabs        — one panel at a time, driven by the URL hash
     2. Modal       — click a card (or its video) for the full write-up
     3. Search      — filters cards inside the active tab
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
        if (media.kind === 'video') {
            return '<video controls autoplay muted loop playsinline>' +
                '<source src="' + media.src + '" type="video/mp4"></video>';
        }
        // a placeholder image that has not been added yet should collapse, not
        // show a broken-image icon
        return '<img src="' + media.src + '" alt="' + title.replace(/"/g, '&quot;') +
            '" onerror="this.parentNode.hidden = true">';
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

    // Any element carrying data-key opens the modal instead of navigating.
    document.addEventListener('click', function (e) {
        var trigger = e.target.closest('[data-key]');
        if (!trigger) { return; }
        var key = trigger.dataset.key;
        if (!(window.CONTENT && window.CONTENT[key])) { return; }  // let the link through
        e.preventDefault();
        openModal(key);
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal || e.target.closest('.modal-close')) { closeModal(); }
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

    /* 4. Thumbnail video previews
       The cards hold nine looping clips. Autoplaying them all cost hundreds of
       requests, so they load metadata only and play while hovered or focused.
       ---------------------------------------------------------------------- */
    document.querySelectorAll('.project-media video').forEach(function (v) {
        var card = v.closest('.project-card');
        if (!card) { return; }

        function play() {
            var p = v.play();
            if (p && p.catch) { p.catch(function () { /* autoplay blocked */ }); }
        }
        function stop() {
            v.pause();
            v.currentTime = 0;
        }
        card.addEventListener('mouseenter', play);
        card.addEventListener('focus', play);
        card.addEventListener('mouseleave', stop);
        card.addEventListener('blur', stop);
    });
})();
