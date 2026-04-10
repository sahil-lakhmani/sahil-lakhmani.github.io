import myImage from "./assets/images/1.jpeg";
import mm from "./assets/images/mine_mapper.png";
import md from "./assets/images/meddy_buddy.png";
import wh from "./assets/images/wildhawk.png";
import os from "./assets/images/open_source_ros.png";
import lf from "./assets/images/line_follower.png";

const logotext = "SAHIL";
const meta = {
    title: "Sahil Lakhmani",
    description: "4th-year Undergraduate at IIT (BHU) and Aerial Robotics Head. I leverage ROS2, ArduPilot, and State Estimation to build robust autonomous systems for unstructured environments.",
};

const introdata = {
    title: "I'm Sahil Lakhmani",
    animated: {
        first: "This Website is under construction",
        second: "This Website is under construction",
        third: "This Website is under construction",
        fourth: "This Website is under construction",
    },
    description: "Fourth-year Integrated Dual Degree student at IIT (BHU) and Head of Aerial Robotics, with experience in UAV-based perception, state estimation, and autonomous flight systems across simulation and hardware. My interests include uncertainty-aware aerial perception, vision-based navigation, and multi-agent UAV systems.",
    your_img_url: myImage,
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I’m a 4th-year Integrated Dual Degree student at IIT (BHU), Varanasi, and Head of Aerial Robotics. I have a strong foundation in UAV-based perception, state estimation, and building robust autonomous systems across hardware and simulation. With experience in leading tech teams and contributing to open-source platforms like ArduPilot and ros-controls, my focus is on uncertainty-aware aerial perception, vision-based navigation, and multi-agent UAV systems for real-world missions.",
};

const worktimeline = [
    {
        jobtitle: "Research Intern",
        where: "Electrical Engineering Dept. – IIT (BHU)",
        date: "May 2025–Jul 2025",
    },
    {
        jobtitle: "Robotics Intern (Parcel Singulation)",
        where: "Sapien Robotics, Noida",
        date: "Oct 2024–Jan 2025",
    },
    {
        jobtitle: "Events Category Head (Ascension)",
        where: "Technex'25 | IIT (BHU)",
        date: "Dec 2024–Mar 2025",
    },
    {
        jobtitle: "Robotics Intern (Control Systems)",
        where: "Sharang Shakti, Gurugram",
        date: "May 2024–Jul 2024",
    },
    {
        jobtitle: "Open Source Contributor",
        where: "ArduPilot & ros-controls",
        date: "Dec 2025–Present",
    },
];

const skills = [
    { name: "Python", value: 90 },
    { name: "C++", value: 90 },
    { name: "C", value: 85 },
    { name: "ROS 2", value: 88 },
    { name: "Gazebo", value: 85 },
    { name: "OpenCV", value: 85 },
    { name: "MATLAB / Simulink", value: 85 },
    { name: "Redis", value: 80 },
    { name: "PyTorch / TensorFlow", value: 80 },
    { name: "Docker / Linux", value: 80 },
];

const services = [
    {
        title: "Robotics & UAVs",
        description: "Autonomous systems design, ArduPilot/PX4 integration, MAVLink, and real-world deployment for drones and mobile robots.",
    },
    {
        title: "Computer Vision & ML",
        description: "YOLO/TensorRT pipelines, sensor fusion, object tracking, and edge AI for perception and real-time decision-making in robotics.",
    },
    {
        title: "Embedded Systems & Control",
        description: "Custom STM32 flight controllers, EtherCAT motor control, EKF/state estimation, PID tuning, and IMU-barometer integration.",
    },
];

const dataportfolio = [
    {
        title: "Mine Mapper | Low-Cost UAV for 3D Aerial Mapping of Surface Mines",
        img: mm,
        summary: "Architected a ROS-based autonomous UAV mapping system integrating RTK/PPK GNSS and synchronized camera triggering for automated, centimeter-level aerial surveys.",
        codeLink: "https://github.com/lakhmanisahil",
        detailLink: "/project/mine-mapper",
    },
    {
        title: "Wildhawk | Autonomous Wildlife Surveillance Drone",
        img: wh,
        summary: "Built a 'Perception-to-Action' UAV pipeline integrating ROS2 Humble with PX4 Offboard control natively with a deployed quantized MobileNetV2 for wildlife tracking.",
        codeLink: "https://github.com/lakhmanisahil",
        detailLink: "/project/wildhawk",
    },
    {
        title: "MeddyBuddy | Autonomous Medical UAV for Remote Health Monitoring",
        img: md,
        summary: "Developed a mission-critical autonomous medical UAV in ArduPilot–Gazebo SITL, engineering low-latency MAVLink telemetry and RTL fail-safe logic for remote data transmission.",
        codeLink: "https://github.com/lakhmanisahil",
        detailLink: "/project/meddybuddy",
    },
    {
        title: "Autonomous Navigation | Line Follower Drone",
        img: lf,
        summary: "Developed an autonomous line-following controller for a Parrot Mambo Minidrone using MATLAB/Simulink with model-based design and simulation validation.",
        codeLink: "https://github.com/lakhmanisahil",
        detailLink: "/project/line-follower",
    },
    {
        title: "Open Source Contributions | ArduPilot & ros-controls",
        img: os,
        summary: "Improved CI reliability, added donation features to CustomBuild, enhanced documentation for gimbals, and restored ROS2–Gazebo compatibility in gz_ros2_control.",
        codeLink: "https://github.com/lakhmanisahil",
        detailLink: "/project/opensource",
    },
];

const contactConfig = {
    YOUR_EMAIL: "sahil.lakhmani.min22@iitbhu.ac.in",
    description: "Open to research collaborations, internships, and projects in robotics, UAVs, and embedded AI. Drop a message and I'll get back to you.",
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
