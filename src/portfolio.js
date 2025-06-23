import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration
const illustration = {
  animated: true
};

// Greeting
const greeting = {
  username: "Sri Samadarsini Vemulapalli",
  title: "Hi, I'm Sri Samadarsini",
  subTitle: emoji(
    "Graduate student in Computer Engineering | RTL & FPGA Design | Hardware-Software Co-Design | VLSI Verification & Physical Design Enthusiast ⚡"
  ),
  resumeLink: "", 
  displayGreeting: true
};

// Social Media
const socialMediaLinks = {
  github: "https://github.com/samadarsini",
  linkedin: "https://www.linkedin.com/in/sri-samadarsini-vemulapalli/",
  gmail: "srisamadarsini77@gmail.com",
  display: true
};

// Skills
const skillsSection = {
  title: "What I Do",
  subTitle: "DIGITAL DESIGNER WITH STRONG RTL + FPGA + SYSTEM INTEGRATION SKILLS",
  skills: [
    emoji("⚡ RTL Design using Verilog/SystemVerilog for ASIC/FPGA"),
    emoji("⚡ Hardware acceleration of deep learning models (CNN Autoencoders)"),
    emoji("⚡ SoC design, synthesis, physical design & functional verification"),
    emoji("⚡ Hardware-software co-design using C and Avalon-MM interface")
  ],
  softwareSkills: [
    { skillName: "Verilog", fontAwesomeClassname: "logos:verilog" },
    { skillName: "SystemVerilog", fontAwesomeClassname: "logos:verilog" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Quartus", fontAwesomeClassname: "logos:intel" },
    { skillName: "Vivado", fontAwesomeClassname: "logos:xilinx" },
    { skillName: "Synopsys", fontAwesomeClassname: "logos:synopsys" },
    { skillName: "C", fontAwesomeClassname: "logos:c" }
  ],
  display: true
};

// Education
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Maryland, Baltimore County",
      logo: require("./assets/images/umbc_logo.png"),
      subHeader: "M.S. in Computer Engineering",
      duration: "Aug 2023 – May 2025",
      descBullets: [
        "VLSI Design, Reconfigurable Systems, Verification, Computer Architecture"
      ]
    },
    {
      schoolName: "Gayatri Vidya Parishad College of Engineering",
      logo: require("./assets/images/gvpce_logo.jpg"),
      subHeader: "B.Tech in ECE",
      duration: "Sept 2019 – Apr 2023",
      descBullets: ["GPA: 9.31/10"]
    }
  ]
};

// Tech Stack Bars
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "RTL Design", progressPercentage: "90%" },
    { Stack: "FPGA/Hardware Acceleration", progressPercentage: "85%" },
    { Stack: "Verification & DFT", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "UMBC – VLSI SoC Lab",
      companylogo: require("./assets/images/umbc_logo.png"),
      date: "Jan 2025 – Present",
      desc: "Built a 22-layer convolutional autoencoder on FPGA using INT8 PEs and Avalon-MM communication with embedded C."
    },
    {
      role: "RTL Design Engineer Intern",
      company: "Maven Silicon",
      companylogo: require("./assets/images/maven_logo.jpg"),
      date: "Apr 2023 – Aug 2023",
      desc: "Designed and verified RISC-V processor core, built UVM testbenches, debugged pipeline execution."
    }
  ]
};

// Open Source
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects
const bigProjects = {
  title: "Major Projects",
  subtitle: "Hardware Projects and Accelerators",
  projects: [
    {
      image: require("./assets/images/project.png"),
      projectName: "Autoencoder Accelerator",
      projectDesc: "22-layer quantized CNN encoder with RTL modules for FPGA.",
      footerLink: [{ name: "GitHub", url: "https://github.com/samadarsini/Matrix-Convolution-Hardware-Accelerator" }]
    },
    {
      image: require("./assets/images/project.png"),
      projectName: "Verilog Coder",
      projectDesc: "Natural language to Verilog compiler + DC/ICC2 evaluation.",
      footerLink: [{ name: "GitHub", url: "https://github.com/samadarsini/Verilog_Coder-Verilog-Code-Generation-using-LLM-and-Evaluation-using-DC-and-ICC2-tools" }]
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Competitions and Research Milestones",
  achievementsCards: [],
  display: false
};

// Blogs
const blogSection = {
  title: "Blogs",
  subtitle: "Technical writing and VLSI documentation (coming soon)",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks
const talkSection = {
  title: "Talks",
  subtitle: "Guest lectures or academic presentations (coming soon)",
  talks: [],
  display: false
};

// Podcasts
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon: Tech talks and research discussion",
  podcast: [],
  display: false
};

// Resume
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume (PDF link coming soon)",
  display: true
};

// Contact
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Reach out for collaboration or research discussion",
  number: "+1 (443) 514-9006",
  email_address: "srisamadarsini77@gmail.com"
};

// Twitter
const twitterDetails = {
  userName: "srisamadarsini",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
