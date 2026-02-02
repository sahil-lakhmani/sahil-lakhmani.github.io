const logotext = "SAHIL";
const meta = {
    title: "Sahil Lakhmani",
    description: "4th-year Undergraduate at IIT (BHU) and Aerial Robotics Head. I leverage ROS2, ArduPilot, and State Estimation to build robust autonomous systems for unstructured environments.",
};

const introdata = {
    title: "I'm Sahil Lakhmani------------Note: This Website is still under construction, please comeback tomorrow",
    animated: {
        first: "I build autonomous systems",
        second: "I work with ROS2 & UAVs",
        third: "I do robotics research",
    },
    description: "4th-year Integrated Dual Degree (B.Tech & M.Tech) at IIT (BHU), Varanasi. Aerial Robotics Head bridging simulation and real-world deployment. Focused on applied research in robotics and automation.",
    your_img_url: "https://images.unsplash.com/photo-1569025696814-9c4d1b4f4c3a?w=600&h=600&fit=crop",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a 4th-year Engineering student at IIT (BHU), Varanasi, and currently serve as Aerial Robotics Head. I have interned at Sapien Robotics (vision & embedded systems), Infinity Learn (IoT & rapid prototyping), and Sharang Shakti (control systems & sensor fusion). I contribute to open source (ArduPilot, ros-controls) and led the Events Category at Technex'25. My interests lie in robotics, UAVs, computer vision, machine learning, and embedded AI. I am fluent in Hindi and Sindhi, and use English at a professional level.",
};

const worktimeline = [
    {
        jobtitle: "Robotics Intern (Vision & Embedded Systems)",
        where: "Sapien Robotics, Noida",
        date: "May–Jul 2025",
    },
    {
        jobtitle: "Robotics Intern (Student Mentor)",
        where: "Infinity Learn, Bengaluru",
        date: "Oct 2024–Feb 2025",
    },
    {
        jobtitle: "Robotics Intern (Control Systems)",
        where: "Sharang Shakti, Gurugram",
        date: "May–Jul 2024",
    },
    {
        jobtitle: "Open Source Contributor",
        where: "ArduPilot & ros-controls",
        date: "Dec 2025–Present",
    },
    {
        jobtitle: "Events Category Head (Ascension)",
        where: "Technex'25 | IIT (BHU)",
        date: "Dec 2024–Mar 2025",
    },
];

const skills = [
    { name: "Python", value: 90 },
    { name: "C++", value: 85 },
    { name: "ROS 2", value: 88 },
    { name: "OpenCV", value: 85 },
    { name: "MATLAB / Simulink", value: 80 },
    { name: "Embedded Systems", value: 85 },
    { name: "Computer Vision", value: 82 },
    { name: "Git / GitHub", value: 88 },
    { name: "Docker / Linux", value: 80 },
];

const services = [
    {
        title: "Robotics & UAVs",
        description: "Autonomous systems design, ArduPilot/PX4 integration, MAVLink, and real-world deployment for drones and mobile robots.",
    },
    {
        title: "Computer Vision & ML",
        description: "YOLO/TensorRT pipelines, sensor fusion, and edge AI for perception and real-time decision-making in robotics.",
    },
    {
        title: "Embedded Systems & Control",
        description: "STM32, EtherCAT/CAN, EKF/state estimation, PID tuning, and low-latency control for deterministic robotics applications.",
    },
];

const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop",
        description: "Mine Mapper — ROS-integrated UAV workflow for autonomous surface mine surveying; SfM orthomosaics with 1–2 cm precision. 90% cost reduction, 75% faster acquisition. IIT (BHU) with Dr. Tarun Verma.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400&h=300&fit=crop",
        description: "Wildhawk — Autonomous wildlife surveillance drone at InterIIT Tech Meet 13.0. ROS 2, MobileNet V2, Edge AI on Raspberry Pi 4, PX4 Autopilot. IIT Bombay.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop",
        description: "MeddyBuddy — Project Lead for autonomous medical UAV. Biomedical sensing, low-latency telemetry (<10 ms), 20+ mission simulations. IIT (BHU) with Dr. Shyam Kamal.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
        description: "Open Source — ArduPilot CustomBuild (Timed-Out build state), Wiki (ViewPro gimbal), gz_ros2_control SDF fixes. Exposure: ArduPilot, ROS 2, Gazebo, ros2_control, CI/CD.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "your.email@domain.com",
    description: "Open to research collaborations, internships, and projects in robotics, UAVs, and embedded AI. Drop a message and I'll get back to you.",
    // Create an emailjs.com account and add your IDs below
    // Tutorial: https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/lakhmanisahil",
    linkedin: "https://linkedin.com/in/lakhmani-sahil",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
