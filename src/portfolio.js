const greeting = {
  username: "Sri Samadarsini Vemulapalli",
  title: "Hi, I'm Sri Samadarsini",
  subTitle: "Graduate Student | RTL & FPGA Designer | Hardware-Software Co-Designer",
  resumeLink: "",
};

const socialMediaLinks = {
  github: "https://github.com/samadarsini",
  linkedin: "https://www.linkedin.com/in/sri-samadarsini-vemulapalli/",
  gmail: "srisamadarsini77@gmail.com",
  phone: "+1 (443) 514-9006",
};

const skills = {
  data: [
    {
      title: "Digital Design & FPGA Prototyping",
      skills: [
        "⚡ Designing RTL modules using Verilog, SystemVerilog and VHDL",
        "⚡ Developing matrix accelerators, convolution modules, and IPs for FPGAs",
        "⚡ Using FSMs and Avalon-MM interfaces for hardware-software communication"
      ],
      softwareSkills: [
        { skillName: "Verilog", fontAwesomeClassname: "logos:verilog" },
        { skillName: "SystemVerilog", fontAwesomeClassname: "logos:verilog" },
        { skillName: "Quartus", fontAwesomeClassname: "logos:intel" },
        { skillName: "Vivado", fontAwesomeClassname: "logos:xilinx" },
        { skillName: "Synopsys", fontAwesomeClassname: "logos:synopsys" },
      ],
    },
    {
      title: "Functional Verification & DFT",
      skills: [
        "⚡ Verifying RISC-V cores using SystemVerilog and UVM",
        "⚡ Performing scan insertion and ATPG using Synopsys TetraMAX",
        "⚡ Working knowledge of test generation, partial scan, and BIST techniques"
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Maryland, Baltimore County",
      subtitle: "M.S. in Computer Engineering",
      logo_path: "umbc_logo.png",
      alt_name: "UMBC",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Courses: VLSI Design, Reconfigurable Systems, VLSI Verification, Computer Arithmetic",
        "⚡ Projects: Convolutional Autoencoder, Verilog Coder, Matrix Accelerator"
      ],
    },
    {
      title: "Gayatri Vidya Parishad College of Engineering",
      subtitle: "B.Tech in ECE",
      logo_path: "gvpce_logo.png",
      alt_name: "GVPCE",
      duration: "2019 - 2023",
      descriptions: ["⚡ GPA: 9.31/10.00"],
    },
  ],
};

const workExperiences = {
  experience: [
    {
      role: "Graduate Research Assistant - VLSI SoC Lab",
      company: "University of Maryland, Baltimore County",
      companylogo: "umbc_logo.png",
      date: "Jan 2025 – Present",
      desc: "Developed a 22-layer convolutional autoencoder using HW-SW co-design on DE1-SoC FPGA. Implemented custom Verilog PEs and embedded C pipeline.",
    },
    {
      role: "RTL Design Engineer Intern",
      company: "Maven Silicon",
      companylogo: "maven_logo.png",
      date: "Apr 2023 – Aug 2023",
      desc: "Designed a RISC-V processor in Verilog and verified using UVM with Synopsys VCS. Simulated end-to-end functionality and debugged pipeline behavior.",
    }
  ],
};

const projects = {
  data: [
    {
      title: "Convolutional Autoencoder on FPGA",
      description: "22-layer INT8 autoencoder with 87.58% accuracy on DE1-SoC using memory-mapped Verilog PEs.",
      url: "https://github.com/samadarsini/Matrix-Convolution-Hardware-Accelerator"
    },
    {
      title: "Verilog Coder using LLM",
      description: "Auto-generates Verilog from natural language; verified 75% of generated designs, 27% area reduction.",
      url: "https://github.com/samadarsini/Verilog_Coder-Verilog-Code-Generation-using-LLM-and-Evaluation-using-DC-and-ICC2-tools"
    },
    {
      title: "RISC-V RTL Design & Verification",
      description: "5-stage pipelined RISC-V processor with SystemVerilog testbenches and UVM verification.",
    },
    {
      title: "Direct Mapped Cache Design",
      description: "Designed and laid out a byte-addressable cache block in 45nm Cadence Virtuoso.",
      url: "https://github.com/samadarsini/Direct-Mapped-Cache-Design"
    },
    {
      title: "ATPG Scheme Comparison",
      description: "Analyzed random vs deterministic ATPG using TetraMAX with scan/partial scan chains.",
      url: "https://github.com/samadarsini/Comparison-of-Test-Generation-Schemes-for-Sequential-Circuits"
    }
  ],
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Let's connect!",
  email_address: "srisamadarsini77@gmail.com",
  phone: "+1 (443) 514-9006",
  github: "https://github.com/samadarsini",
  linkedin: "https://www.linkedin.com/in/sri-samadarsini-vemulapalli/"
};


const isHireable = true;

const openSource = {
  githubToken: "",
  githubUsername: "samadarsini",
  showGithubProfile: "true", // Set true or false to show GitHub section
};

export {
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  workExperiences,
  projects,
  contactInfo,
  isHireable
};
