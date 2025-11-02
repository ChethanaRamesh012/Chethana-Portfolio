import { link } from "framer-motion/client";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpeg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.jpeg";
import project7 from "../assets/projects/project-7.png"
import project8 from "../assets/projects/project-8.png"
import project9 from "../assets/projects/project-9.jpeg"

export const HERO_CONTENT = `I'm an XR Developer and Full Stack Developer dedicated to building immersive digital experiences that seamlessly merge reality with virtual environments. My expertise includes computer vision, and I'm proficient in Python, JavaScript, and React. With hands-on experience in the MERN stack and Tailwind CSS, I develop both interactive front-end interfaces and scalable back-end systems, creating innovative applications at the intersection of extended reality and modern web technologies.`;

export const ABOUT_TEXT = `I am an engineer specializing in Analog, Digital, and FPGA Design, with expertise in circuit design, RTL development, verification, and high-speed communication protocols. My work spans low-power analog circuits, ASIC/FPGA implementations, and digital design methodologies, utilizing advanced simulation tools and verification techniques. I have experience designing low-power Flash ADCs, CMOS processors, and radiation-hardened SRAM cells. My digital design expertise includes PCIe high-speed communication, FPGA-based cryptographic systems, and hybrid memory architectures, leveraging Verilog, SystemVerilog, and UVM for implementation and verification. Additionally, I have worked on ASIC verification, Tinytapeout ASIC simulation, and SPI verification using UVM, demonstrating proficiency in EDA tools, testbench architectures, and functional coverage methodologies. My experience extends to PCB design, FPGA prototyping, and embedded system development, making me adept with Altium Designer, KiCad, oscilloscopes, and logic analyzers.`;

export const EDUCATION = [
  {
    degree: "MS in Electrical Engineering",
    school: "The George Washington University",
    location: "Washington DC, USA",
    duration: "Aug 2023 – May 2025",
    gpa: "3.5 / 4",
    coursework: [
      "VLSI Design and Simulation",
      "Design of VLSI Circuits",
      "Computer Architecture",
      "ASIC Design and Testing",
      "High Performance Computing"
    ]
  },
  {
    degree: "BE in Electronics and Communication Engineering",
    school: "BMS College of Engineering",
    location: "Bengaluru, India",
    duration: "Sep 2020 – Jun 2023",
    gpa: "8.4 / 10",
    coursework: [
      "Hardware Description Language",
      "System Verilog and Verification",
      "Digital Signal Processing",
      "Physical Design",
      "Mixed Signal Design"
    ]
  }
];

export const EXPERIENCES = [
  {
    year: "Aug 2025 - present",
    role: "Electrical Engineer",
    company: "Beacon Industries",
    description: "Architect next-generation Ga₂O₃-based DC–DC converters featuring custom gate-driver circuits, performing detailed switching transient and EMI simulations, and initiating hardware prototyping to enhance efficiency, reliability, and power density beyond GaN implementations. Develop a cryogenic pump inverter utilizing Ga₂O₃ power devices and FPGA-based Field-Oriented Control (FOC) implemented in Verilog RTL, driving a REBCO-coil motor with real-time sensor feedback for adaptive switching and precise cryogenic operation control. Implement and verify custom 64 Mb SRAM and SERDES modules on the Zybo Z7 FPGA board using Verilog/SystemVerilog RTL coding and Siemens ModelSim for simulation, timing closure, and debugging, focusing on radiation-hardened design, signal integrity, and high-speed data throughput in mission-critical environments. Analyze and validate GaN-based 650 V → 25 V DC–DC converters through LTspice simulations and hardware testing, evaluating switching losses, thermal conduction, and efficiency trade-offs under high-voltage, high-frequency conditions to refine converter reliability and overall performance.",
    technologies: "Ga₂O₃ Devices, GaN Power Electronics, Wide-Bandgap Semiconductors, DC–DC Converter Design, Gate Driver Circuits, FPGA Design, Verilog/SystemVerilog RTL, Field-Oriented Control (FOC), Zybo Z7 FPGA Board, Siemens ModelSim, SRAM Architecture, SERDES, Radiation-Hardened Design, Timing Closure, Signal Integrity, LTspice Simulation, Thermal Analysis, Switching Loss Modeling, Hardware Prototyping, Power Density Optimization"
  },
  {
    year: "Feb 2023 - Jun 2023",
    role: "Intern",
    company: "Tequed Labs Pvt Ltd",
    description: `Designed and implemented a complete IoT-enabled Warehouse Management System by integrating RFID readers with NodeMCU microcontrollers over SPI for automated asset tracking and location updates. Developed embedded C firmware and PHP-based backend to facilitate data acquisition, server communication, and real-time monitoring simulating early-stage bring-up and debug workflows for sensor-based systems. Characterized system-level behavior through iterative test setup revisions, debugging communication failures using serial logging and protocol analysis, reflecting practical lab experience with embedded communication standards (I2C, SPI) and microcontroller interfacing.`,
    technologies: ["Embedded Firmware", "Hardware Bring-up","System-level Integration", "Protocol Debugging","Sensor & Peripheral Interfacing","Lab-based Debug", "Validation Workflows"],
  },
  {
    year: "Jan 2023",
    role: "Front End Developer Intern",
    company: "IBM Bengaluru, India",
    description: `I worked on building user-friendly websites using HTML within the Emmet Cheat Sheet environment, focusing on improving navigation flow and overall user experience. I enhanced both the visual appeal and functionality of these websites by integrating CSS with HTML, ensuring consistent branding and a responsive design across different screen sizes and devices.`,
    technologies: ["HTML","CSS (Cascading Style Sheet)","Java Script"],
  },
  {
    year: "Dec 2019 - Jan 2020",
    role: "Intern",
    company: "Karnataka German Technical Training Institute",
    description: `I worked on designing real-time industrial control systems using RSLogix in PLC software, where I built and tested circuits for efficient and reliable automation. I also configured and monitored industrial processes using Wonderware SCADA, gaining hands-on experience in setting up control interfaces and ensuring optimal system performance.`,
    technologies: ["RSLogix","PLC Software","Wonderware","SCADA Systems"],
  },
];

export const PROJECTS = [
  {
    title: "RISC-V CPU Core Implementation",
    image: project4,
    description:"Designed and implemented a RISC-V ISA-compliant processor with a five-stage pipeline using Makerchip IDE, integrating hazard detection, branch prediction, and control logic. Developed and verified ALU, load/store unit, and memory interfaces, ensuring functional correctness and compliance with the RISC-V specification. Conducted testbench development, waveform analysis, and assertion-based verification to validate core functionality and optimize execution flow. ",
    technologies: ["RISC-V ISA", "Makerchip IDE", "Five-stage Pipeline", "Hazard Detection","Branch Prediction","ALU","Testbench Development","Assertion-Based Verification","Waveform Analysis"],
    link : ["https://github.com/ChethanaRamesh012/RISC-V-processor"],
  },
  {
    title: "AES Encryption Core Implementation",
    image: project5,
    description:"Designed and implemented an RTL-based AES encryption core with key inputs, plaintext processing, and encryption control signals. Integrated pipelining at strategic points to optimize latency and throughput while balancing area constraints. Conducted functional simulation and back-annotated verification to ensure correctness. Synthesized the design to analyze area utilization and maximum clock frequency. Performed layout design, including clock tree debugging, floorplanning, and optimization for efficient hardware implementation.",
    technologies: ["RTL Design", "AES Encryption", "Pipelining", "Functional Simulation","Back-Annotated Verification","Synthesis","Clock Tree Debugging","Floorplanning","Layout Optimization","Maximum Clock Frequency Analysis"],
    link : ["https://github.com/ChethanaRamesh012/Chethana-Ramesh/blob/main/AES%20PDF.pdf"],
  },
  {
    title: "Design and Simulation of a Phase-Locked Loop (PLL) for Clock Generation",
    image: project3,
    description:
      "Developed a low-jitter PLL circuit for clock synchronization and frequency synthesis, implementing key components such as a phase detector, charge pump, loop filter, voltage-controlled oscillator (VCO), and frequency divider to achieve stable frequency locking. Simulated the PLL architecture using SPICE tools (Cadence Virtuoso, LTSpice) to analyze phase noise, lock time, frequency stability, and transient response, ensuring optimal performance for high-speed clock generation in digital and mixed-signal applications.",
    technologies: ["Phase-Locked Loop (PLL)","Clock Generation","Frequency Synthesis","Phase Detector","Charge Pump","Loop Filter","Voltage-Controlled Oscillator (VCO)","Frequency Divider","SPICE Simulation","Cadence Virtuoso","LTSpice","Phase Noise Analysis","Lock Time Evaluation","Transient Response Analysis"],
    link : ["https://github.com/ChethanaRamesh012/PLL"],
   
  },
  {
    title: "64-QAM Digital Modulator RTL Design",
    image: project6,
    description:
      "Developed a synthesizable RTL design for a 64-QAM modulator to process a 60 Mbps baseband stream into 10-bit I/Q data at 130 MHz, implementing a full DSP chain including symbol mapping, upsampling, and FIR filtering. Designed a fully custom SPI slave interface with a 34-bit control protocol, enabling dynamic runtime configuration of upsampling factors (×4–×13) and programmable filter coefficients. Implemented robust clock domain crossing (CDC) logic using FIFO-based synchronizers and multicycle paths to interface three asynchronous domains: SPI (100 kHz), baseband data (60 MHz), and DSP core (130 MHz). Verified proper reset sequencing across multiple clock domains and integrated RTL assertions to ensure safe enable/disable transitions. Designed register-mapped control architecture and validated functional coverage for SPI write/read back, modulation pipeline timing, and packet boundary detection using simulation waveforms.",
    technologies: ["64-QAM Modulation","RTL Design","DSP Chain (Symbol Mapping, Upsampling, FIR Filtering)","SPI Interface (34-bit Control Protocol)","Clock Domain Crossing (CDC)","FIFO Synchronizers","Multicycle Path Handling","Register-Mapped Control Architecture","RTL Assertions","Functional Simulation","Waveform Analysis","Functional Coverage Validation"],
    link: ["https://github.com/ChethanaRamesh012/64-QAM"],
  },
  {
    title: "256kb SRAM Cell using 65nm technology",
    image: project1,
    description:
      "Developed a radiation-hardened SRAM achieving a 1.5GHz frequency with 110μW power usage and 896μm² area. Developed complex circuit schematics including a 4x16 decoder, precharge circuitry, and 8T SRAM cells utilizing over 2300 CMOS transistors.Conducted comprehensive noise margin simulations to minimize susceptibility to single event upsets (SEUs) using Cadence virtuoso and LTSpice, improving reliability by 30%. Executed layout optimization strategies to minimize power consumption and maximize space utilization, resulting in fabrication-ready GDS files.",
      technologies: ["SRAM Design (256kb, 8T Cells)","65nm CMOS Technology","Radiation-Hardening","4x16 Decoder","Precharge Circuitry","Cadence Virtuoso","LTSpice","Noise Margin Simulation","SEU Mitigation","Layout Optimization","Power and Area Analysis","GDSII File Generation"],
    link: ["https://github.com/ChethanaRamesh012/SRAM"],
  },
  {
    title: "CRC based Cryptography using FPGA for Secured Data Communication",
    image: project2,
    description:
      "Designed and implemented a cryptographic system with CRC error detection on the Artix-7 FPGA using Verilog, utilizing 60% of FPGA resources and achieving 100 MHz clock speed with 800 Mbps throughput. Developed reusable Verilog modules for encryption, decryption, and error-checking; validated performance through simulations and timing analyses to meet high-speed data communication requirements. CERTIFICATES Building of RISC-V CPU Core, edX Circuit and Elec",
    technologies: ["CRC-Based Cryptography","FPGA (Artix-7)","Verilog HDL","Encryption/Decryption Modules","Error Detection (CRC)","Simulation & Timing Analysis","High-Speed Data Communication","Resource Utilization Analysis","100 MHz Clock Speed","800 Mbps Throughput"],
    link: ["https://github.com/ChethanaRamesh012/Design-and-Implementation-of-CRC-based-Cryptography-using-FPGA-for-Secured-Data-Communication"],
  },
  {
    title: "Hybrid Memory Architecture for Power-Efficient Data Management ",
    image: project7,
    description:
      "Designed and simulated a hybrid memory system using DRAMSim2, integrating DRAM as a cache for NVM to achieve 60% lower latency and 50% power savings compared to DRAM-only systems. Implemented advanced caching policies and optimized memory access patterns, demonstrating significant improvements in bandwidth and energy efficiency through DRAMSim2 simulations.",
    technologies: ["Hybrid Memory Architecture","DRAMSim2","DRAM + NVM Integration","Advanced Caching Policies","Memory Access Optimization","Latency Reduction","Power Efficiency","Bandwidth Optimization","Simulation Analysis"],
    link: ["https://github.com/ChethanaRamesh012/DRAM-"],
  },
  {
    title: "Implementation of Multi-Lane PCIe High-Speed Serial Communication Protocol ",
    image: project8,
    description:
      "Designed and implemented a Verilog and System Verilog based multi-lane PCIe (Peripheral Component Interconnect Express) high-speed serial communication protocol, incorporating both MAC and PHY layers for efficient data transmission and reception. Key features include data scrambling, 8B/10B encoding, serialization, and corresponding descrambling, decoding, and deserialization. Developed MAC layer components such as link serializers, SKIP generation, and the LTSSM for dynamic control. Implemented the PHY layer with PIPE emulation logic, 8B/10B encoding/decoding, and elastic buffers, synchronized with SERDES and PLL.",
    technologies: ["PCIe","High-Speed Serial Communication","Verilog","SystemVerilog","MAC Layer Design","PHY Layer Design","8B/10B Encoding/Decoding","Data Scrambling/Descrambling","Serialization/Deserialization","LTSSM (Link Training and Status State Machine)","SKIP Generation","PIPE Emulation","Elastic Buffers","SERDES","PLL (Phase-Locked Loop)"],
  },
  {
    title: "Microfabrication of memristors and Nanofabrication of resistors ",
    image: project9,
    description:
      "Fabricated silicon-based resistors with a thickness of 57.5 nm using electron beam evaporation, profilometry, and wafer deposition, and designed layouts in Klayout. Conducted electrical characterization using a probe station, leveraging skills in dry etching, SEM, and EBL for quality control and structural analysis.",
    technologies: ["Electron Beam Evaporation", "Profilometry"," Wafer Deposition"," KLayout"," Probe Station","SEM","EBL","Dry Etching","RIE","ICP"],
  },
];

export const CONTACT = {
  address: "1900 S EADS ST Arlington VA",
  phoneNo: "+1 (571) 478 2891",
  email: "chethana.r@gwmail.gwu.edu",
};
