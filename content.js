/* Detail content for the explainer modal.
   Generated from the per-project pages; each key matches a card's data-key
   and the page that serves the same content. Regenerate after editing any <key>.html. */
window.CONTENT = {
  "3drecon": {
    "title": "3D Reconstruction Pipeline",
    "subtitle": "Real-time Point Cloud & Mesh Generation • FlyX Technologies",
    "media": {
      "kind": "video",
      "src": "images/3D_reconstruction.mp4"
    },
    "body": "<p>A GPU-accelerated 3D reconstruction system that generates dense point clouds and mesh surfaces in real-time from depth sensor data. Developed for autonomous drone infrastructure inspection applications.</p>\n<h4>Technical Implementation</h4>\n<ul>\n<li>Real-time point cloud generation from Intel RealSense D435I depth streams</li>\n<li>CUDA-accelerated point cloud processing and filtering</li>\n<li>Voxel grid downsampling for efficient memory management</li>\n<li>Statistical outlier removal for noise reduction</li>\n<li>Poisson surface reconstruction for watertight mesh generation</li>\n<li>Integration with Isaac ROS on NVIDIA Jetson Orin</li>\n</ul>\n<h4>Performance Metrics</h4>\n<ul>\n<li>Processing 640x480 depth frames at 30 FPS</li>\n<li>Point cloud density: 300K+ points per frame</li>\n<li>Mesh reconstruction in under 500ms</li>\n</ul>\n<h4>Applications</h4>\n<ul>\n<li>Power line infrastructure inspection</li>\n<li>Autonomous navigation mapping</li>\n<li>Digital twin creation for industrial assets</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Point Cloud</span>\n<span class=\"modal-tag\">Open3D</span>\n<span class=\"modal-tag\">RealSense</span>\n<span class=\"modal-tag\">CUDA</span>\n<span class=\"modal-tag\">Isaac ROS</span>\n<span class=\"modal-tag\">Jetson</span>",
    "page": "3drecon.html"
  },
  "acm": {
    "title": "2nd Place - ACM Hackathon",
    "subtitle": "Generative AI/VLM Category • Oklahoma State University • April 2025",
    "media": {
      "kind": "img",
      "src": "profile.png"
    },
    "body": "<p>Achieved 2nd place out of 50+ teams for developing an innovative AI application using cutting-edge Vision-Language Models.</p>\n<h4>Project Overview</h4>\n<p>Built a VLM-based generative AI application that demonstrates advanced multi-modal reasoning capabilities, combining visual understanding with natural language generation.</p>\n<h4>Technical Highlights</h4>\n<ul>\n<li>Implemented CLIP-based image understanding pipeline</li>\n<li>Integrated GPT-4V for visual question answering</li>\n<li>Built real-time inference system with sub-second latency</li>\n<li>Developed intuitive user interface for demo</li>\n</ul>\n<h4>Competition Details</h4>\n<ul>\n<li>24-hour hackathon format</li>\n<li>Judged on innovation, technical execution, and presentation</li>\n<li>Competed against graduate and undergraduate teams</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">VLM</span>\n<span class=\"modal-tag\">Generative AI</span>\n<span class=\"modal-tag\">Hackathon</span>\n<span class=\"modal-tag\">ACM</span>",
    "page": "acm.html"
  },
  "arm": {
    "title": "Robotic Arm Control System",
    "subtitle": "Industrial Robotics • Precision Motion Control",
    "media": {
      "kind": "video",
      "src": "images/Arm_Robot.mp4"
    },
    "body": "<p>A precision control system for industrial robotic arms featuring advanced motion planning, real-time trajectory optimization, and high-accuracy positioning for manufacturing applications.</p>\n<h4>Control System Design</h4>\n<ul>\n<li>6-DOF inverse kinematics solver using Jacobian pseudoinverse</li>\n<li>PID-based joint position control with feedforward compensation</li>\n<li>Trapezoidal velocity profiling for smooth motion</li>\n<li>Collision detection using swept volume analysis</li>\n<li>Real-time trajectory interpolation at 1kHz control loop</li>\n</ul>\n<h4>Motion Planning</h4>\n<ul>\n<li>RRT* path planning for obstacle avoidance</li>\n<li>Cartesian space linear and circular interpolation</li>\n<li>Joint space optimization for singularity avoidance</li>\n<li>Dynamic obstacle replanning capability</li>\n</ul>\n<h4>Hardware Integration</h4>\n<ul>\n<li>High-precision servo motors with encoder feedback</li>\n<li>Force/torque sensing for compliant manipulation</li>\n<li>End-effector tool changer support</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Robotics</span>\n<span class=\"modal-tag\">Kinematics</span>\n<span class=\"modal-tag\">Motion Planning</span>\n<span class=\"modal-tag\">PID Control</span>\n<span class=\"modal-tag\">ROS</span>",
    "page": "arm.html"
  },
  "ati": {
    "title": "Principal Perception Engineer",
    "subtitle": "Automated Tire, Inc. · Woburn, MA · May 2026 - Present",
    "media": {
      "kind": "img",
      "src": "images/ati-smartbay.jpg"
    },
    "body": "<p class=\"nda-note\">\n<strong>A quick understanding, not a deep dive.</strong> Automated Tire's platform is proprietary,\nso the specifics stay inside the company. What follows is a high-level summary of the kind of\nperception work I lead there, at the level already published on my resume. Happy to talk through\nmy general approach in conversation.\n</p>\n<p>I lead perception engineering for a robotic service platform that works on a vehicle without\nremoving the wheel. That means owning the chain end to end: which sensors we use, the algorithms\nthat read them, and getting both running reliably on the robot.</p>\n<h4>What the work involves</h4>\n<ul>\n<li>Sensor selection backed by measurement rather than spec sheets - I built a benchmarking\nplatform that characterised seven depth cameras against the application's real requirements</li>\n<li>That benchmarking drove a fleet-wide camera replacement, with roughly 50% better accuracy,\na 20x higher frame rate, and far fewer connection failures</li>\n<li>3D reconstruction of a compressed tire's geometry to under 2 mm error - deceptively hard,\nbecause rubber under load does not hold a shape that deterministic measurement can pin down</li>\n<li>An on-robot quality assessment that I took from a 30-minute runtime to real time</li>\n<li>Object detection adapted to new camera perspectives, plus a region-of-interest step that\nimproved both localisation and segmentation</li>\n<li>A ROS 2 feedback pipeline with on-robot visualisation, and control logic that adjusts the\nrobot's routine based on what perception reports back</li>\n</ul>\n<h4>Stack</h4>\n<ul>\n<li>Depth cameras, stereo vision, camera calibration</li>\n<li>YOLOv8, PyTorch, OpenCV</li>\n<li>ROS 2, Go, Python, C++</li>\n</ul>",
    "page": "ati.html"
  },
  "atrc": {
    "title": "Research Engineer",
    "subtitle": "ATRC • May 2018 - Aug 2019",
    "media": {
      "kind": "video",
      "src": "images/VIO.mp4"
    },
    "body": "<p>Developing novel navigation systems under ATRC funding.</p>\n<h4>Key Contributions</h4>\n<ul>\n<li>Developed novel sensor fusion methodology for Visual-Inertial Odometry</li>\n<li>Reduced computational complexity by 5% while maintaining precision</li>\n<li>Built real-time SLAM prototype for GPS-denied drone navigation</li>\n</ul>\n<br>\n<div style=\"text-align: center;\">\n<img src=\"images/datafusion.jpg\" alt=\"Data Fusion\"\nstyle=\"max-width: 100%; border: 1px solid var(--primary); box-shadow: var(--glow); margin-bottom: 2rem;\">\n<img src=\"images/ATRC1.jpg\" alt=\"ATRC 1\"\nstyle=\"max-width: 100%; border: 1px solid var(--primary); box-shadow: var(--glow);\">\n</div>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">VIO</span>\n<span class=\"modal-tag\">SLAM</span>\n<span class=\"modal-tag\">Sensor Fusion</span>",
    "page": "atrc.html"
  },
  "business": {
    "title": "3rd Place - Business Plan Competition",
    "subtitle": "Oklahoma State University • Riata Center • February 2022",
    "media": {
      "kind": "img",
      "src": "profile.png"
    },
    "body": "<p>Won 3rd place in the prestigious OSU Business Plan Competition, competing against graduate and undergraduate teams from across the university.</p>\n<h4>Business Concept</h4>\n<p>Presented a comprehensive business plan for an AI-powered robotics solution targeting industrial automation markets.</p>\n<h4>Competition Elements</h4>\n<ul>\n<li>Executive summary and business model canvas</li>\n<li>Market analysis and competitive landscape</li>\n<li>Financial projections and funding requirements</li>\n<li>Live pitch to panel of investors and entrepreneurs</li>\n</ul>\n<h4>Judging Criteria</h4>\n<ul>\n<li>Innovation and market potential</li>\n<li>Technical feasibility</li>\n<li>Team capability and execution plan</li>\n<li>Presentation quality</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Business Plan</span>\n<span class=\"modal-tag\">Entrepreneurship</span>\n<span class=\"modal-tag\">Pitch Competition</span>\n<span class=\"modal-tag\">OSU</span>",
    "page": "business.html"
  },
  "catchup": {
    "title": "Co-Founder & Senior Machine Learning Engineer",
    "subtitle": "Catch Up AI • Jan 2024 - Present (Advisor since May 2026)",
    "media": {
      "kind": "img",
      "src": "profile.png"
    },
    "body": "<p>Leading ML development for enterprise communication analytics.</p>\n<h4>Key Contributions</h4>\n<ul>\n<li>Led 4-engineer ML team from concept to production MVP in 12 weeks</li>\n<li>Architected sentiment analysis pipeline processing Jira, Slack, and Zoom data</li>\n<li>Improved precision from 0.71 → 0.86 (+21%) through advanced prompt engineering</li>\n<li>Implemented PyTorch GNN to model organizational social graphs</li>\n<li>Boosted recommendation accuracy by 22%</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">PyTorch</span>\n<span class=\"modal-tag\">GNN</span>\n<span class=\"modal-tag\">NLP</span>\n<span class=\"modal-tag\">Sentiment Analysis</span>\n<span class=\"modal-tag\">Team Lead</span>\n</div>",
    "page": "catchup.html",
    "link": "https://www.linkedin.com/in/araas-boloorchi"
  },
  "cognitive": {
    "title": "AI Cognitive Systems",
    "subtitle": "Brain-Inspired AI Architecture",
    "media": {
      "kind": "img",
      "src": "profile.png"
    },
    "body": "<p>Designing AI systems that mirror human cognitive processes, bridging the gap between perception and\nreasoning.</p>\n<h4>Core Capabilities</h4>\n<ul>\n<li>Explainable AI (XAI) frameworks for transparent decision-making</li>\n<li>Social-cognitive models for responsible AI deployment</li>\n<li>Brain-inspired neural architectures</li>\n<li>Interpretable deep learning systems</li>\n</ul>\n<h4>Key Publication</h4>\n<p>\"Towards Responsible AI\" - Springer Nature Journal, 2025</p>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Explainable AI</span>\n<span class=\"modal-tag\">Cognitive Science</span>\n<span class=\"modal-tag\">Neural Networks</span>\n<span class=\"modal-tag\">Interpretability</span>\n</div>",
    "page": "cognitive.html",
    "link": "https://en.wikipedia.org/wiki/Cognitive_computing"
  },
  "drone": {
    "title": "Autonomous Drone Navigation System",
    "subtitle": "ATRC Research • 2018-2019",
    "media": {
      "kind": "img",
      "src": "images/drone.jpg"
    },
    "body": "<p>A complete autonomous drone navigation system featuring real-time SLAM, obstacle avoidance, and mission planning capabilities for GPS-denied environments. Developed under ATRC funding.</p>\n<h4>Navigation Stack</h4>\n<ul>\n<li>Visual-Inertial SLAM using stereo cameras and IMU</li>\n<li>Real-time occupancy grid mapping</li>\n<li>A* path planning with dynamic replanning</li>\n<li>Model Predictive Control (MPC) for trajectory tracking</li>\n<li>Failsafe return-to-home functionality</li>\n</ul>\n<h4>Perception System</h4>\n<ul>\n<li>Stereo depth estimation for obstacle detection</li>\n<li>Optical flow for velocity estimation</li>\n<li>Feature tracking for visual odometry</li>\n<li>Loop closure detection for map consistency</li>\n</ul>\n<h4>Hardware Platform</h4>\n<ul>\n<li>Custom quadrotor frame with 20-minute flight time</li>\n<li>Pixhawk flight controller with PX4 firmware</li>\n<li>NVIDIA Jetson TX2 companion computer</li>\n<li>Intel RealSense stereo cameras</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">SLAM</span>\n<span class=\"modal-tag\">Path Planning</span>\n<span class=\"modal-tag\">MPC</span>\n<span class=\"modal-tag\">PX4</span>\n<span class=\"modal-tag\">Jetson</span>",
    "page": "drone.html"
  },
  "edge": {
    "title": "Edge AI Architecture",
    "subtitle": "Embedded ML Systems",
    "media": {
      "kind": "img",
      "src": "images/profile.jpg"
    },
    "body": "<p>Optimizing AI models for deployment on resource-constrained edge devices.</p>\n<h4>Optimization Techniques</h4>\n<ul>\n<li>Model quantization and pruning</li>\n<li>TensorRT acceleration</li>\n<li>ONNX model conversion</li>\n<li>Real-time inference optimization</li>\n<li>Memory-efficient architectures</li>\n</ul>\n<h4>Platforms</h4>\n<ul>\n<li>NVIDIA Jetson family (Orin, Nano)</li>\n<li>Edge TPU devices</li>\n<li>ARM-based embedded systems</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Jetson</span>\n<span class=\"modal-tag\">TensorRT</span>\n<span class=\"modal-tag\">ONNX</span>\n<span class=\"modal-tag\">Quantization</span>\n<span class=\"modal-tag\">Edge Computing</span>",
    "page": "edge.html"
  },
  "finalist": {
    "title": "4× Business Plan Competition Finalist",
    "subtitle": "Oklahoma State University • 2022-2025",
    "media": {
      "kind": "img",
      "src": "images/profile1.jpg"
    },
    "body": "<p>Consistently recognized as a finalist in the OSU Business Plan Competition across four consecutive years, demonstrating sustained excellence in entrepreneurship and innovation.</p>\n<h4>Years & Projects</h4>\n<ul>\n<li><strong>2025:</strong> AI-powered drone inspection platform (ongoing)</li>\n<li><strong>2024:</strong> Explainable AI for healthcare diagnostics</li>\n<li><strong>2023:</strong> Autonomous navigation system for GPS-denied environments</li>\n<li><strong>2022:</strong> Industrial computer vision solution (3rd place winner)</li>\n</ul>\n<h4>Cumulative Experience</h4>\n<ul>\n<li>Pitched to 20+ investors and industry experts</li>\n<li>Received mentorship from successful entrepreneurs</li>\n<li>Refined business development and presentation skills</li>\n<li>Built network in Oklahoma startup ecosystem</li>\n</ul>\n<h4>Skills Developed</h4>\n<ul>\n<li>Business model development</li>\n<li>Market research and validation</li>\n<li>Financial modeling and projections</li>\n<li>Investor pitch delivery</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Entrepreneurship</span>\n<span class=\"modal-tag\">Business Development</span>\n<span class=\"modal-tag\">Pitch Competition</span>\n<span class=\"modal-tag\">4x Finalist</span>",
    "page": "finalist.html"
  },
  "flyx": {
    "title": "Machine Learning Engineer",
    "subtitle": "FlyX Technologies • May 2025 - Present",
    "media": {
      "kind": "img",
      "src": "images/drone.jpg"
    },
    "body": "<p>Building autonomous drone systems for infrastructure inspection.</p>\n<h4>Key Contributions</h4>\n<ul>\n<li>Engineered Isaac ROS Visual SLAM pipeline on NVIDIA Jetson Orin with Intel RealSense D435I for real-time 3D mapping</li>\n<li>Developed MAVLink-based flight control system integrating Jetson with CubePilot Orange autopilot</li>\n<li>Built WebRTC video streaming system for real-time sensor data transmission</li>\n<li>Implemented ROS 2 servo control with PCA9685 PWM drivers</li>\n<li>Fine-tuned YOLO for power line anomaly detection on edge devices</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Isaac ROS</span>\n<span class=\"modal-tag\">SLAM</span>\n<span class=\"modal-tag\">MAVLink</span>\n<span class=\"modal-tag\">Jetson Orin</span>\n<span class=\"modal-tag\">WebRTC</span>\n</div>",
    "page": "flyx.html",
    "link": "https://www.linkedin.com/in/araas-boloorchi"
  },
  "ge": {
    "title": "Computer Vision Engineer",
    "subtitle": "General Electric • May - Sep 2020",
    "media": {
      "kind": "video",
      "src": "images/Arm_Robot.mp4"
    },
    "body": "<p>Building industrial inspection systems.</p>\n<h4>Key Contributions</h4>\n<ul>\n<li>Designed end-to-end CV system for oil drill bit reliability analysis</li>\n<li>Shipped production mobile application achieving 88% F1 score</li>\n<li>Enabled predictive maintenance from visual inspection</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Industrial CV</span>\n<span class=\"modal-tag\">Mobile App</span>\n<span class=\"modal-tag\">Predictive Maintenance</span>",
    "page": "ge.html"
  },
  "health": {
    "title": "1st Place Teamwork - AI+ Global Health Hackathon",
    "subtitle": "San Francisco, CA • December 2024",
    "media": {
      "kind": "img",
      "src": "images/WhatsApp Image 2025-01-21 at 22.56.56_9bb54812.jpg"
    },
    "body": "<p>Won 1st place for outstanding teamwork at the prestigious AI+ Global Health Hackathon in San Francisco, competing against teams from top tech companies and universities.</p>\n<h4>Project: SightVoice</h4>\n<p>Developed an AI-powered visual assistant platform to help visually impaired individuals navigate their environment safely through real-time audio feedback.</p>\n<h4>Key Features Developed</h4>\n<ul>\n<li>Real-time obstacle detection using YOLOv8</li>\n<li>Spatial audio feedback system for directional guidance</li>\n<li>Apple Vision Pro integration for depth sensing</li>\n<li>Natural language scene descriptions using VLMs</li>\n<li>Voice command interface for hands-free operation</li>\n</ul>\n<h4>Team Contribution</h4>\n<ul>\n<li>Led computer vision pipeline development</li>\n<li>Integrated multiple AI models into unified system</li>\n<li>Coordinated 4-person team through 24-hour sprint</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Computer Vision</span>\n<span class=\"modal-tag\">Accessibility</span>\n<span class=\"modal-tag\">Healthcare AI</span>\n<span class=\"modal-tag\">Teamwork</span>",
    "page": "health.html"
  },
  "hiti": {
    "title": "Health AI Bias Datathon Scholarship",
    "subtitle": "HITI Lab • University of Washington • August 2024",
    "media": {
      "kind": "img",
      "src": "images/profile.jpg"
    },
    "body": "<p>Selected for competitive scholarship to participate in the Health AI Bias Datathon, focused on identifying and mitigating algorithmic bias in healthcare AI systems.</p>\n<h4>Program Focus</h4>\n<ul>\n<li>Analyzing bias in clinical decision support systems</li>\n<li>Developing fairness metrics for healthcare ML models</li>\n<li>Creating bias mitigation strategies for medical AI</li>\n<li>Collaborative research with healthcare professionals</li>\n</ul>\n<h4>Skills Developed</h4>\n<ul>\n<li>Healthcare data analysis and HIPAA compliance</li>\n<li>Fairness-aware machine learning techniques</li>\n<li>Statistical methods for bias detection</li>\n<li>Interdisciplinary collaboration in health informatics</li>\n</ul>\n<h4>Impact</h4>\n<p>Contributed to research on ensuring equitable AI outcomes across diverse patient populations.</p>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Healthcare AI</span>\n<span class=\"modal-tag\">Bias Detection</span>\n<span class=\"modal-tag\">Fairness</span>\n<span class=\"modal-tag\">Scholarship</span>",
    "page": "hiti.html"
  },
  "icorps": {
    "title": "2× NSF I-Corps Workshop Scholarships",
    "subtitle": "National Science Foundation • 2024",
    "media": {
      "kind": "img",
      "src": "images/drone.jpg"
    },
    "body": "<p>Received two prestigious I-Corps Workshop Scholarships from the National Science Foundation for innovative technology commercialization projects.</p>\n<h4>About NSF I-Corps</h4>\n<p>The NSF Innovation Corps (I-Corps) program prepares scientists and engineers to extend their focus beyond the laboratory to accelerate the economic and societal benefits of research.</p>\n<h4>Project 1: Autonomous Drone Infrastructure Inspection</h4>\n<ul>\n<li>Market validation for AI-powered power line inspection</li>\n<li>Customer discovery with utility companies</li>\n<li>Business model development for B2B SaaS</li>\n</ul>\n<h4>Project 2: Explainable AI for Healthcare</h4>\n<ul>\n<li>Explored commercialization of XAI medical imaging tools</li>\n<li>Interviewed healthcare providers and administrators</li>\n<li>Identified regulatory pathways for FDA approval</li>\n</ul>\n<h4>Outcomes</h4>\n<ul>\n<li>Completed 100+ customer discovery interviews</li>\n<li>Developed viable go-to-market strategies</li>\n<li>Built network of industry mentors</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">NSF</span>\n<span class=\"modal-tag\">Entrepreneurship</span>\n<span class=\"modal-tag\">Commercialization</span>\n<span class=\"modal-tag\">Innovation</span>",
    "page": "icorps.html"
  },
  "ilead": {
    "title": "ML Researcher",
    "subtitle": "ILead Lab, Oklahoma State • May 2023 - Apr 2024",
    "media": {
      "kind": "img",
      "src": "images/profile1.jpg"
    },
    "body": "<p>Research on explainable AI and medical imaging.</p>\n<h4>Key Contributions</h4>\n<ul>\n<li>Developed CV algorithm for statistical chart analysis (94% accuracy, 91% interpretability)</li>\n<li>Built explainable AI model for document recognition with full inference traceability</li>\n<li>Enhanced YOLO-based breast cancer detection, improving recall by 7%</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Explainable AI</span>\n<span class=\"modal-tag\">Medical Imaging</span>\n<span class=\"modal-tag\">YOLO</span>\n<span class=\"modal-tag\">Document Analysis</span>",
    "page": "ilead.html"
  },
  "mechatronics": {
    "title": "Robotics Researcher, Humanoid Robots",
    "subtitle": "Mechatronics Research Lab · Sep 2014 - Mar 2016",
    "media": {
      "kind": "video",
      "src": "images/Nao_Self_Calibration.mp4"
    },
    "body": "<p>Where the perception work started. I programmed Nao humanoid robots to compete in the RoboCup\nSoccer World Cup - a football match played entirely by autonomous robots, with no operator input\nonce the whistle goes.</p>\n<h4>What that required</h4>\n<ul>\n<li>Autonomous bipedal locomotion on a surface that shifts underfoot</li>\n<li>Real-time perception: finding the ball, the goal, teammates and opponents from a camera\nmounted on a head that is itself moving</li>\n<li>Multi-agent coordination, so several robots play as a team rather than crowding the ball</li>\n<li>Obstacle avoidance and object tracking driving the decision loop, with sensor input rather\nthan a scripted routine</li>\n</ul>\n<p>RoboCup is a useful teacher precisely because nothing is controlled. The lighting changes, the\nother team does not cooperate, and a robot that falls over has to get itself up. The habit it\nbuilds - treat perception as something you validate in the messy real case, not the tidy one -\nis the same instinct the later drone and industrial work depended on.</p>",
    "page": "mechatronics.html"
  },
  "nao": {
    "title": "NAO Robot Self-Calibration System",
    "subtitle": "Humanoid Robotics • Computer Vision Research",
    "media": {
      "kind": "video",
      "src": "images/Nao_Self_Calibration.mp4"
    },
    "body": "<p>An automated computer vision system enabling NAO humanoid robots to self-calibrate their joint positions using visual feedback, eliminating the need for manual calibration procedures.</p>\n<h4>System Architecture</h4>\n<ul>\n<li>Monocular camera-based pose estimation using ArUco markers</li>\n<li>Forward kinematics modeling of NAO joint chain</li>\n<li>Iterative Closest Point (ICP) for pose refinement</li>\n<li>Automatic joint offset calculation and compensation</li>\n<li>Real-time feedback loop for continuous adjustment</li>\n</ul>\n<h4>Calibration Capabilities</h4>\n<ul>\n<li>Head pan/tilt joint calibration</li>\n<li>Arm reach and positioning accuracy</li>\n<li>Leg joint alignment for stable walking</li>\n<li>Full-body kinematic chain optimization</li>\n</ul>\n<h4>Results</h4>\n<ul>\n<li>Reduced calibration time from 30 minutes to under 5 minutes</li>\n<li>Achieved sub-degree joint accuracy</li>\n<li>Enabled autonomous recalibration during operation</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">NAO Robot</span>\n<span class=\"modal-tag\">Kinematics</span>\n<span class=\"modal-tag\">Pose Estimation</span>\n<span class=\"modal-tag\">ArUco</span>\n<span class=\"modal-tag\">Python</span>",
    "page": "nao.html"
  },
  "nasa": {
    "title": "NASA Moon Station Project",
    "subtitle": "Space Exploration • CAD & AR Prototype • Dec 2024",
    "media": {
      "kind": "video",
      "src": "images/Nasa_project.mp4"
    },
    "body": "<p>A comprehensive design project for lunar exploration infrastructure, featuring detailed CAD models and an augmented reality prototype for visualizing the proposed moon station and space exploration vehicle.</p>\n<h4>Project Deliverables</h4>\n<ul>\n<li>Complete SolidWorks CAD model of modular lunar habitat</li>\n<li>Space Exploration Vehicle (SEV) design with life support systems</li>\n<li>Docking mechanism and airlock designs</li>\n<li>Solar panel array configurations for lunar conditions</li>\n<li>Thermal management system specifications</li>\n</ul>\n<h4>AR Visualization</h4>\n<ul>\n<li>Unity-based AR application for interactive exploration</li>\n<li>1:1 scale visualization of lunar modules</li>\n<li>Interior walkthrough capability</li>\n<li>Assembly sequence animation</li>\n</ul>\n<h4>Design Considerations</h4>\n<ul>\n<li>Radiation shielding using regolith</li>\n<li>Micrometeorite protection</li>\n<li>Modular expansion capability</li>\n</ul>\n<p><a href=\"https://www.youtube.com/watch?app=desktop&v=NDBrM3J_doM\" target=\"_blank\">🎬 Watch Full Project Video →</a></p>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">SolidWorks</span>\n<span class=\"modal-tag\">CAD</span>\n<span class=\"modal-tag\">AR</span>\n<span class=\"modal-tag\">Unity</span>\n<span class=\"modal-tag\">Space</span>\n<span class=\"modal-tag\">NASA</span>\n</div>",
    "page": "nasa.html",
    "link": "https://www.youtube.com/watch?v=NDBrM3J_doM"
  },
  "nav": {
    "title": "Autonomous Navigation",
    "subtitle": "UAV & Robotics Systems",
    "media": {
      "kind": "img",
      "src": "images/drone.jpg"
    },
    "body": "<p>Developing navigation systems for autonomous robots and drones in challenging environments.</p>\n<h4>Technical Stack</h4>\n<ul>\n<li>Visual-Inertial Odometry (VIO) algorithms</li>\n<li>Sensor fusion with Kalman filtering</li>\n<li>ROS2 and MAVLink integration</li>\n<li>GPS-denied navigation solutions</li>\n<li>Motion planning and trajectory optimization</li>\n</ul>\n<h4>Hardware Experience</h4>\n<ul>\n<li>NVIDIA Jetson Orin / Nano</li>\n<li>Intel RealSense D435I cameras</li>\n<li>CubePilot Orange / Pixhawk autopilots</li>\n<li>PCA9685 servo controllers</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">VIO</span>\n<span class=\"modal-tag\">ROS2</span>\n<span class=\"modal-tag\">MAVLink</span>\n<span class=\"modal-tag\">Sensor Fusion</span>\n<span class=\"modal-tag\">Jetson</span>",
    "page": "nav.html"
  },
  "protein": {
    "title": "Enhancing ProteinBERT",
    "subtitle": "IEEE BIBM • Dec 2023",
    "media": {
      "kind": "img",
      "src": "images/drone.jpg"
    },
    "body": "<p><strong>Full Title:</strong> Enhancing ProteinBERT: Integrating Intrinsically Disordered Proteins for Comprehensive Proteomic Predictions</p>\n<h4>Authors</h4>\n<p>J.D. Stone, <strong>A. Boloorchi Tabrizi</strong>, R. Shamsuddin</p>\n<h4>Abstract</h4>\n<p>Extended transformer-based protein language model to handle intrinsically disordered protein regions for improved proteomic predictions.</p>\n<h4>Key Contributions</h4>\n<ul>\n<li>Extended ProteinBERT architecture</li>\n<li>Handling of intrinsically disordered proteins</li>\n<li>Comprehensive proteomic prediction framework</li>\n</ul>",
    "page": "protein.html"
  },
  "ready-to-ship": {
    "title": "Ready to Ship",
    "subtitle": "Hackathon Project • Rapid Prototyping",
    "media": {
      "kind": "video",
      "src": "images/ready_to ship Hackathon in 3 hours.mp4"
    },
    "body": "<p>A rapid prototype developed during an intensive hackathon. This entire project was conceptualized and\ncompleted within just 3 hours.</p>\n<h4>Project Highlights</h4>\n<ul>\n<li>Delivered a fully functional prototype under extreme time constraints</li>\n<li>Showcases ability to ideate, build, and deploy rapidly</li>\n<li>Effective teamwork and high-speed execution</li>\n</ul>",
    "page": "ready-to-ship.html"
  },
  "research": {
    "title": "Research & Innovation",
    "subtitle": "Academic Contributions",
    "media": {
      "kind": "img",
      "src": "images/profile1.jpg"
    },
    "body": "<p>Published researcher with peer-reviewed contributions to top-tier venues.</p>\n<h4>Publications</h4>\n<ul>\n<li><strong>Springer Nature Journal (2025)</strong> - Explainable AI frameworks</li>\n<li><strong>IEEE CSCI (2023)</strong> - Brain-inspired visual odometry</li>\n<li><strong>IEEE BIBM (2023)</strong> - Protein language modeling</li>\n</ul>\n<h4>Education</h4>\n<p><strong>Ph.D. & M.S. Computer Science</strong><br>Oklahoma State University, 2025</p>\n<p><em>Dissertation: Explainable AI in Visual Odometry and Generative AI for Navigation of Autonomous Drones</em></p>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">IEEE</span>\n<span class=\"modal-tag\">Springer Nature</span>\n<span class=\"modal-tag\">Ph.D.</span>\n<span class=\"modal-tag\">Peer-Reviewed</span>\n</div>",
    "page": "research.html",
    "link": "https://scholar.google.com/citations?user=0oXdUkAAAAAJ&hl=en"
  },
  "robotics": {
    "title": "1st Place - Open International Robotics League",
    "subtitle": "Soccer Robot Competition • April 2016",
    "media": {
      "kind": "video",
      "src": "images/Nao_Self_Calibration.mp4"
    },
    "body": "<p>Won 1st place in the Open International Robotics League for autonomous soccer robots, demonstrating excellence in robotics engineering and AI at an early stage of career.</p>\n<h4>Competition Overview</h4>\n<p>International competition where autonomous robots compete in soccer matches, requiring advanced perception, decision-making, and motor control systems.</p>\n<h4>Technical Challenges</h4>\n<ul>\n<li>Real-time ball detection and tracking</li>\n<li>Multi-robot coordination and team strategy</li>\n<li>Robust localization on the field</li>\n<li>Fast and precise motor control</li>\n<li>Autonomous decision-making under uncertainty</li>\n</ul>\n<h4>Robot Capabilities</h4>\n<ul>\n<li>Computer vision for ball and goal detection</li>\n<li>Omnidirectional movement system</li>\n<li>Wireless communication between team robots</li>\n<li>Real-time strategy adaptation</li>\n</ul>\n<h4>Achievement</h4>\n<p>This early success in robotics competition sparked a lifelong passion for autonomous systems and AI, leading to current research in visual odometry and autonomous navigation.</p>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Robotics</span>\n<span class=\"modal-tag\">Competition</span>\n<span class=\"modal-tag\">Autonomous Systems</span>\n<span class=\"modal-tag\">1st Place</span>\n</div>",
    "page": "robotics.html",
    "link": "https://en.wikipedia.org/wiki/RoboCup"
  },
  "sanborn": {
    "title": "Computer Vision Engineer",
    "subtitle": "Sanborn • May - Aug 2022",
    "media": {
      "kind": "video",
      "src": "images/Sterocamera.mp4"
    },
    "body": "<p>Developing perception systems for autonomous vehicles.</p>\n<h4>Key Contributions</h4>\n<ul>\n<li>Fine-tuned stereo depth estimation models, reducing inference latency by 30%</li>\n<li>Developed OpenCV stereo matching and 3D reconstruction pipeline</li>\n<li>Improved downstream perception accuracy by 15%</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Depth Estimation</span>\n<span class=\"modal-tag\">Stereo Vision</span>\n<span class=\"modal-tag\">OpenCV</span>\n<span class=\"modal-tag\">Autonomous Vehicles</span>",
    "page": "sanborn.html"
  },
  "sightvoice": {
    "title": "SightVoice - AI Visual Assistant",
    "subtitle": "🏆 1st Place Teamwork • AI+ Global Health Hackathon • Dec 2024",
    "media": {
      "kind": "img",
      "src": "images/WhatsApp Image 2025-01-21 at 22.56.56_9bb54812.jpg"
    },
    "body": "<p>An award-winning AI-powered platform that leverages computer vision to assist visually impaired individuals with real-time environmental awareness through audio feedback. Built in a 24-hour hackathon.</p>\n<h4>Core Features</h4>\n<ul>\n<li>Real-time obstacle detection using YOLOv8</li>\n<li>Spatial audio feedback indicating object distance and direction</li>\n<li>Scene description using Vision-Language Models</li>\n<li>Text recognition (OCR) for reading signs and labels</li>\n<li>Voice command interface for hands-free operation</li>\n</ul>\n<h4>Technical Stack</h4>\n<ul>\n<li>Apple Vision Pro integration for depth sensing</li>\n<li>WebRTC for low-latency video streaming</li>\n<li>OpenAI GPT-4V for scene understanding</li>\n<li>Text-to-Speech synthesis for audio output</li>\n<li>React Native mobile application</li>\n</ul>\n<h4>Recognition</h4>\n<p>🏆 <strong>1st Place for Teamwork</strong> at AI+ Global Health Hackathon, San Francisco</p>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Computer Vision</span>\n<span class=\"modal-tag\">YOLOv8</span>\n<span class=\"modal-tag\">VLM</span>\n<span class=\"modal-tag\">Accessibility</span>\n<span class=\"modal-tag\">Hackathon Winner</span>\n</div>",
    "page": "sightvoice.html",
    "link": "https://lumiwalk.ai"
  },
  "slam": {
    "title": "3D Reconstruction & SLAM",
    "subtitle": "Spatial Intelligence Systems",
    "media": {
      "kind": "video",
      "src": "images/3D_reconstruction.mp4"
    },
    "body": "<p>Building real-time 3D understanding systems for autonomous navigation and spatial computing.</p>\n<h4>Technical Expertise</h4>\n<ul>\n<li>Simultaneous Localization and Mapping (SLAM)</li>\n<li>LiDAR and stereo vision point cloud processing</li>\n<li>Real-time depth estimation algorithms</li>\n<li>3D scene reconstruction from multi-view imagery</li>\n<li>Isaac ROS integration on NVIDIA Jetson</li>\n</ul>\n<h4>Applications</h4>\n<ul>\n<li>Autonomous drone navigation</li>\n<li>Infrastructure inspection</li>\n<li>Augmented reality systems</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">SLAM</span>\n<span class=\"modal-tag\">LiDAR</span>\n<span class=\"modal-tag\">Point Cloud</span>\n<span class=\"modal-tag\">Stereo Vision</span>\n<span class=\"modal-tag\">Open3D</span>\n</div>",
    "page": "slam.html",
    "link": "https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping"
  },
  "startup": {
    "title": "Top-5 Finalist & 1st Place Platform Category",
    "subtitle": "Startup Hackathon • Unified.to • December 2024",
    "media": {
      "kind": "img",
      "src": "images/profile1.jpg"
    },
    "body": "<p>Achieved Top-5 Finalist position overall and won 1st place specifically in the Unified.to platform integration category.</p>\n<h4>Project Overview</h4>\n<p>Built an innovative video and sound analysis solution that leverages Unified.to's API integration platform for enterprise data connectivity.</p>\n<h4>Technical Implementation</h4>\n<ul>\n<li>Multi-modal analysis combining video and audio streams</li>\n<li>Real-time sentiment detection from meeting recordings</li>\n<li>Integration with enterprise tools via Unified.to APIs</li>\n<li>Automated insights generation and reporting</li>\n</ul>\n<h4>Recognition</h4>\n<ul>\n<li>Top 5 out of 100+ participating teams</li>\n<li>Best use of Unified.to platform capabilities</li>\n<li>Received mentorship from industry experts</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Startup</span>\n<span class=\"modal-tag\">API Integration</span>\n<span class=\"modal-tag\">Video Analysis</span>\n<span class=\"modal-tag\">Enterprise</span>",
    "page": "startup.html"
  },
  "stereo": {
    "title": "Stereo Depth Estimation System",
    "subtitle": "Real-time Depth Mapping • Sanborn Internship • 2022",
    "media": {
      "kind": "video",
      "src": "images/Sterocamera.mp4"
    },
    "body": "<p>A high-performance stereo depth estimation system developed for autonomous vehicle perception during my internship at Sanborn. The system generates real-time depth maps from calibrated stereo camera pairs.</p>\n<h4>Algorithm Pipeline</h4>\n<ul>\n<li>Stereo camera calibration with sub-pixel accuracy</li>\n<li>Image rectification using homography transforms</li>\n<li>Semi-Global Matching (SGM) for disparity computation</li>\n<li>Census Transform for robust stereo correspondence</li>\n<li>Left-right consistency check for occlusion handling</li>\n<li>Weighted Median Filter for disparity refinement</li>\n</ul>\n<h4>Optimizations Achieved</h4>\n<ul>\n<li>30% reduction in inference latency through CUDA optimization</li>\n<li>15% improvement in downstream perception accuracy</li>\n<li>Real-time processing at 25+ FPS on RTX 3080</li>\n</ul>\n<h4>Visualization Features</h4>\n<ul>\n<li>Jet colormap depth visualization</li>\n<li>3D point cloud projection</li>\n<li>Confidence map generation</li>\n</ul>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">Stereo Vision</span>\n<span class=\"modal-tag\">SGM</span>\n<span class=\"modal-tag\">OpenCV</span>\n<span class=\"modal-tag\">CUDA</span>\n<span class=\"modal-tag\">Disparity</span>\n<span class=\"modal-tag\">AV</span>",
    "page": "stereo.html"
  },
  "vio": {
    "title": "Visual-Inertial Odometry System",
    "subtitle": "Autonomous Navigation • ATRC Research • 2018-2019",
    "media": {
      "kind": "video",
      "src": "images/VIO.mp4"
    },
    "body": "<p>A sophisticated real-time 3D navigation system designed for autonomous drones operating in GPS-denied environments. This project was funded through the Advanced Technology Research Center (ATRC).</p>\n<h4>Technical Architecture</h4>\n<ul>\n<li>Custom Extended Kalman Filter (EKF) for sensor fusion combining IMU and camera data</li>\n<li>Feature-based visual tracking using ORB descriptors with RANSAC outlier rejection</li>\n<li>Tightly-coupled sensor fusion achieving sub-centimeter accuracy</li>\n<li>Real-time loop closure detection for drift correction</li>\n<li>Optimized C++ implementation running at 30+ FPS on embedded hardware</li>\n</ul>\n<h4>Key Achievements</h4>\n<ul>\n<li>5% reduction in computational complexity while maintaining precision</li>\n<li>Successfully deployed on custom drone platform</li>\n<li>Published research at IEEE CSCI 2023</li>\n</ul>\n<h4>Funding</h4>\n<p>Advanced Technology Research Center (ATRC) under the Institute of Technology</p>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">VIO</span>\n<span class=\"modal-tag\">Sensor Fusion</span>\n<span class=\"modal-tag\">EKF</span>\n<span class=\"modal-tag\">C++</span>\n<span class=\"modal-tag\">Real-time</span>\n<span class=\"modal-tag\">Embedded</span>",
    "page": "vio.html"
  },
  "vlm": {
    "title": "Vision-Language Models",
    "subtitle": "Multi-Modal AI Systems",
    "media": {
      "kind": "img",
      "src": "images/WhatsApp Image 2025-01-21 at 22.56.56_9bb54812.jpg"
    },
    "body": "<p>Developing AI systems that bridge visual perception with natural language understanding.</p>\n<h4>Areas of Focus</h4>\n<ul>\n<li>Vision Transformers (ViT) and CLIP architectures</li>\n<li>Visual question answering systems</li>\n<li>Image captioning and scene description</li>\n<li>Diffusion models for generative AI</li>\n<li>Cross-modal learning and reasoning</li>\n</ul>\n<h4>Recent Work</h4>\n<p>2nd Place at ACM Hackathon for VLM-based generative AI application (Apr 2025)</p>\n<div class=\"modal-tags\">\n<span class=\"modal-tag\">VLMs</span>\n<span class=\"modal-tag\">Transformers</span>\n<span class=\"modal-tag\">CLIP</span>\n<span class=\"modal-tag\">Diffusion</span>\n<span class=\"modal-tag\">Generative AI</span>",
    "page": "vlm.html"
  },
  "xai": {
    "title": "Towards Responsible AI",
    "subtitle": "Springer Nature Journal • Jan 2025",
    "media": {
      "kind": "img",
      "src": "images/profile1.jpg"
    },
    "body": "<p><strong>Full Title:</strong> Towards Responsible AI: An Implementable Blueprint for Integrating Explainability and Social-Cognitive Frameworks in AI Systems</p>\n<h4>Authors</h4>\n<p>R. Shamsuddin, <strong>A. Boloorchi</strong>, P.R. Gottimukkula</p>\n<h4>Abstract</h4>\n<p>This paper presents a comprehensive framework for building explainable AI systems that incorporate social-cognitive considerations for responsible deployment in real-world applications.</p>\n<h4>Key Contributions</h4>\n<ul>\n<li>Novel framework integrating XAI with social-cognitive theory</li>\n<li>Implementable blueprint for responsible AI development</li>\n<li>Guidelines for regulatory compliance</li>\n</ul>",
    "page": "xai.html"
  }
};
