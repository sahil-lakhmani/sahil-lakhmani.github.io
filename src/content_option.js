import myImage from "./assets/images/my_image.jpeg";
const logotext = "SAHIL";
const meta = {
    title: "Sahil Lakhmani",
    description: "4th-year Undergraduate at IIT (BHU) and Aerial Robotics Head. I leverage ROS2, ArduPilot, and State Estimation to build robust autonomous systems for unstructured environments.",
};

const introdata = {
    title: "I'm Sahil Lakhmani",
    animated: {
        first: "I learn",
        second: "I apply",
        third: "I build",
        fourth: "......ROBOTS......",
    },
    description: "Pre-final year student at IIT (BHU), Varanasi, leading robotics projects and developing autonomous drones for real-world applications. Focused on applied research at the intersection of robotics and artificial intelligence.",
    your_img_url: myImage,
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I’m a 4th-year engineering student at IIT (BHU), Varanasi, curious about how robots can understand and interact with the real world. As Aerial Robotics Head, I work on building autonomous drones and practical robotic systems. I enjoy exploring embedded AI, computer vision, and sensor fusion, and turning research ideas into working prototypes that solve real problems. Outside of academics, I love hiking, photography, and history.",
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
    { name: "C", value: 85 },
    { name: "C++", value: 85 },
    { name: "ROS 2", value: 88 },
    { name: "Redis", value: 80 },
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
        title: "Mine Mapper – Low-Cost UAV for 3D Aerial Mapping of Surface Mines",
        img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
        summary: "Designed an end-to-end ROS-integrated UAV workflow that automates high-resolution surface mine mapping while cutting costs and risk compared to traditional surveys.",
        codeLink: "https://github.com/lakhmanisahil",
        detailLink: "/project/mine-mapper",
    },
    {
        title: "Wildhawk – Autonomous Wildlife Surveillance Drone",
        img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
        summary: "Built an autonomous aerial platform to detect and track wildlife in real time, enabling low-cost, non-invasive monitoring for conservation teams.",
        codeLink: "https://github.com/lakhmanisahil",
        detailLink: "/project/wildhawk",
    },
    {
        title: "MeddyBuddy – Autonomous Medical UAV for Remote Health Monitoring",
        img: "https://images.unsplash.com/photo-1576091160550-112173fba4b7?w=800&h=600&fit=crop",
        summary: "Led the development of a medical UAV platform that streams real-time physiological telemetry from remote areas while maintaining reliable autonomous flight.",
        codeLink: "https://github.com/lakhmanisahil",
        detailLink: "/project/meddybuddy",
    },
    {
        title: "Open Source Contributions – ArduPilot & ros-controls",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
        summary: "Contributed to widely-used robotics stacks by improving build reliability, documentation accuracy, and simulation tooling for the community.",
        codeLink: "https://github.com/lakhmanisahil",
        detailLink: "/project/opensource",
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
