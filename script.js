// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Active navigation
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navItems.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === "#" + entry.target.id
        );
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => sectionObserver.observe(section));

// Custom cursor
const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

if (window.matchMedia("(pointer:fine)").matches) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
    dot.style.opacity = "1";
    ring.style.opacity = "1";
  });

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll("a, .card, .project-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      ring.style.width = "48px";
      ring.style.height = "48px";
      ring.style.borderColor = "rgba(255,38,56,.9)";
    });
    el.addEventListener("mouseleave", () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.borderColor = "rgba(255,50,65,.55)";
    });
  });
}

// Magnetic buttons
document.querySelectorAll(".magnetic").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const r = button.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});

// Subtle 3D tilt on desktop
if (window.matchMedia("(pointer:fine)").matches) {
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform =
        `perspective(900px) rotateX(${y * -3}deg) rotateY(${x * 3}deg) translateY(-5px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

const educationData = {

    "10th": {

        number: "01",

        tag: "SECONDARY EDUCATION",

        icon: "10",

        title: "10th Standard",

        description:
            "I completed my secondary education and built my academic foundation here.",

        marks:
            "YOUR 10TH MARKS",

        institute:
            "D.S.M Schoool",

        board:
            "State Board",

        year:
            "2022"

    },


    "12th": {

        number: "02",

        tag: "SENIOR SECONDARY",

        icon: "12",

        title: "12th Standard",

        description:
            "I completed my senior secondary education and continued developing my academic and technical interests.",

        marks:
            " 60%",

        institute:
            "G.S.S.S Senior Secondary School",

        board:
            "scienceS",

        year:
            "2024"

    },


    "bca": {

        number: "03",

        tag: "UNDERGRADUATE DEGREE",

        icon: "BCA",

        title:
            "Bachelor of Computer Applications",

        description:
            "I am currently pursuing my BCA and developing my skills in software development, programming and problem solving.",

        marks:
            "CURRENTLY PURSUING",

        institute:
            "YMCA J.C. Bose University",

        board:
            "BCA • COMPUTER APPLICATIONS",

        year:
            "CURRENTLY PURSUING"

    }

};



/* =========================================
   OPEN EDUCATION CARD
========================================= */

function openEducation(type) {

    const data = educationData[type];

    if (!data) return;


    document.getElementById("modalTag").textContent =
        data.tag;


    document.getElementById("modalNumber").textContent =
        data.number;


    document.getElementById("modalIcon").textContent =
        data.icon;


    document.getElementById("modalTitle").textContent =
        data.title;


    document.getElementById("modalDescription").textContent =
        data.description;


    document.getElementById("modalMarks").textContent =
        data.marks;


    document.getElementById("modalInstitute").textContent =
        data.institute;


    document.getElementById("modalBoard").textContent =
        data.board;


    document.getElementById("modalYear").textContent =
        data.year;


    document.getElementById("educationModal")
        .classList.add("active");


    // Background scrolling stop
    document.body.style.overflow = "hidden";
}



/* =========================================
   CLOSE EDUCATION CARD
========================================= */

function closeEducation() {

    document.getElementById("educationModal")
        .classList.remove("active");


    document.body.style.overflow = "";
}



/* =========================================
   ESC KEY CLOSE
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeEducation();

    }

});
/* =========================================================
   SKILLS DATA
========================================================= */

const skillsData = {

    java: {
        number: "01",
        category: "PROGRAMMING LANGUAGE",
        icon: "JAVA",
        title: "Java",
        level: "Intermediate",
        progress: "72%",

        description:
            "I use Java to understand object-oriented programming, build application logic and improve my problem-solving skills. I am continuously learning Java through coding practice and projects.",

        know: [
            "OOP",
            "Classes & Objects",
            "Inheritance",
            "Arrays",
            "Methods",
            "Exception Handling",
            "Collections"
        ],

        projects: [
            "Mr Doctor",
            "Java Practice Projects",
            "Problem Solving Programs"
        ]
    },


    python: {
        number: "02",
        category: "PROGRAMMING LANGUAGE",
        icon: "PY",
        title: "Python",
        level: "Intermediate",
        progress: "68%",

        description:
            "I use Python for programming practice, automation experiments and learning problem-solving concepts.",

        know: [
            "Variables",
            "Functions",
            "Lists",
            "Dictionaries",
            "Loops",
            "File Handling",
            "Basic Automation"
        ],

        projects: [
            "Python Practice",
            "Automation Experiments",
            "AI Experiments"
        ]
    },


    html: {
        number: "03",
        category: "WEB DEVELOPMENT",
        icon: "</>",
        title: "HTML",
        level: "Advanced Beginner",
        progress: "78%",

        description:
            "HTML is one of my core web development skills. I use semantic HTML to structure websites, portfolio pages and interactive web interfaces.",

        know: [
            "Semantic HTML",
            "Forms",
            "Tables",
            "Links",
            "Images",
            "Page Structure",
            "Basic Accessibility"
        ],

        projects: [
            "Personal Portfolio",
            "CV Easy",
            "Mr Doctor"
        ]
    },


    css: {
        number: "04",
        category: "WEB DEVELOPMENT",
        icon: "#",
        title: "CSS",
        level: "Intermediate",
        progress: "80%",

        description:
            "I use CSS to create responsive and visually attractive interfaces. I enjoy working with animations, neon effects, modern layouts and interactive UI designs.",

        know: [
            "Flexbox",
            "Grid",
            "Responsive Design",
            "Animations",
            "Transitions",
            "Hover Effects",
            "Neon UI"
        ],

        projects: [
            "Personal Portfolio",
            "CV Easy",
            "Login UI",
            "Mr Doctor"
        ]
    },


    dsa: {
        number: "05",
        category: "COMPUTER SCIENCE",
        icon: "DSA",
        title: "Data Structures & Algorithms",
        level: "Learning",
        progress: "55%",

        description:
            "I am learning Data Structures and Algorithms to improve my logical thinking, coding efficiency and problem-solving ability.",

        know: [
            "Arrays",
            "Strings",
            "Searching",
            "Sorting",
            "Linked Lists",
            "Time Complexity"
        ],

        projects: [
            "DSA Practice",
            "Coding Problems",
            "Algorithm Experiments"
        ]
    },


    /* =====================================================
       TOOLS
    ===================================================== */

    vscode: {
        number: "01",
        category: "DEVELOPMENT TOOL",
        icon: "VS",
        title: "VS Code",
        level: "Advanced Beginner",
        progress: "82%",

        description:
            "VS Code is my primary code editor. I use it to write, debug and organize my programming and web development projects.",

        know: [
            "Extensions",
            "Terminal",
            "Debugging",
            "Git Integration",
            "Project Management"
        ],

        projects: [
            "Personal Portfolio",
            "CV Easy",
            "Mr Doctor"
        ]
    },


    github: {
        number: "02",
        category: "VERSION CONTROL",
        icon: "GH",
        title: "GitHub",
        level: "Intermediate",
        progress: "70%",

        description:
            "I use GitHub to store projects, manage code versions and share my development work.",

        know: [
            "Repositories",
            "Git",
            "Commits",
            "Branches",
            "Push & Pull",
            "README"
        ],

        projects: [
            "Portfolio Repository",
            "CV Easy Repository",
            "Project Hosting"
        ]
    },


    replit: {
        number: "03",
        category: "DEVELOPMENT PLATFORM",
        icon: "RE",
        title: "Replit",
        level: "Intermediate",
        progress: "65%",

        description:
            "I use Replit for quick coding experiments, testing ideas and practicing programming without setting up a complete local environment.",

        know: [
            "Online IDE",
            "Quick Prototyping",
            "Code Testing",
            "Project Experiments"
        ],

        projects: [
            "Coding Experiments",
            "Python Practice",
            "Quick Prototypes"
        ]
    },


    linux: {
        number: "04",
        category: "OPERATING SYSTEM",
        icon: "LX",
        title: "Linux",
        level: "Beginner",
        progress: "45%",

        description:
            "I am learning Linux to become more comfortable with terminals, development environments and command-line workflows.",

        know: [
            "Terminal",
            "File Commands",
            "Directories",
            "Command Line",
            "Package Basics"
        ],

        projects: [
            "Development Environment",
            "Linux Practice"
        ]
    },


    /* =====================================================
       AI
    ===================================================== */

    openai: {
        number: "01",
        category: "AI ASSISTANT",
        icon: "AI",
        title: "OpenAI",
        level: "Regular User",
        progress: "80%",

        description:
            "I use AI tools to explore ideas, debug code, understand concepts and improve my development workflow while continuing to learn the fundamentals.",

        know: [
            "Prompting",
            "Code Assistance",
            "Debugging",
            "Idea Generation",
            "Learning Assistance"
        ],

        projects: [
            "Portfolio Development",
            "Project Debugging",
            "UI Ideas"
        ]
    },


    claude: {
        number: "02",
        category: "AI ASSISTANT",
        icon: "CL",
        title: "Claude",
        level: "Regular User",
        progress: "70%",

        description:
            "I use Claude for brainstorming, understanding code, reviewing ideas and exploring different approaches to development problems.",

        know: [
            "Code Review",
            "Brainstorming",
            "Writing Assistance",
            "Problem Analysis"
        ],

        projects: [
            "Code Experiments",
            "Project Planning"
        ]
    },


    gemini: {
        number: "03",
        category: "AI ASSISTANT",
        icon: "GE",
        title: "Gemini",
        level: "Regular User",
        progress: "70%",

        description:
            "I use Gemini for research, learning, brainstorming and development experiments.",

        know: [
            "Research",
            "Brainstorming",
            "Code Assistance",
            "Learning"
        ],

        projects: [
            "Learning Experiments",
            "Development Research"
        ]
    },


    copilot: {
        number: "04",
        category: "AI CODING",
        icon: "CP",
        title: "GitHub Copilot",
        level: "Learning",
        progress: "62%",

        description:
            "I use AI coding assistance to explore implementations, generate ideas and understand different approaches to writing code.",

        know: [
            "Code Suggestions",
            "Autocomplete",
            "Refactoring",
            "Coding Assistance"
        ],

        projects: [
            "Web Development",
            "Coding Practice"
        ]
    },


    mscopilot: {
        number: "05",
        category: "AI ASSISTANT",
        icon: "MC",
        title: "Microsoft Copilot",
        level: "Learning",
        progress: "60%",

        description:
            "I explore Microsoft Copilot for productivity, research, brainstorming and AI-assisted workflows.",

        know: [
            "Research",
            "Productivity",
            "Brainstorming",
            "AI Assistance"
        ],

        projects: [
            "Research",
            "Learning Workflows"
        ]
    },


    /* =====================================================
       OTHER SKILLS
    ===================================================== */

    communication: {
        number: "01",
        category: "SOFT SKILL",
        icon: "COM",
        title: "Communication",
        level: "Developing",
        progress: "72%",

        description:
            "I am continuously improving my communication skills so I can explain technical ideas clearly and work effectively with others.",

        know: [
            "Listening",
            "Technical Explanation",
            "Discussion",
            "Presentation"
        ],

        projects: [
            "Team Projects",
            "Project Presentations"
        ]
    },


    problem: {
        number: "02",
        category: "SOFT SKILL",
        icon: "PS",
        title: "Problem Solving",
        level: "Strong",
        progress: "78%",

        description:
            "I enjoy breaking large problems into smaller parts and finding practical solutions through experimentation, debugging and coding.",

        know: [
            "Logical Thinking",
            "Debugging",
            "Research",
            "Experimentation"
        ],

        projects: [
            "CV Easy",
            "Mr Doctor",
            "DSA Practice"
        ]
    },


    teamwork: {
        number: "03",
        category: "SOFT SKILL",
        icon: "TW",
        title: "Teamwork",
        level: "Developing",
        progress: "68%",

        description:
            "I enjoy working with others, sharing ideas and contributing to projects while learning from different approaches.",

        know: [
            "Collaboration",
            "Task Sharing",
            "Discussion",
            "Feedback"
        ],

        projects: [
            "College Projects",
            "Team Development"
        ]
    },


    content: {
        number: "04",
        category: "CREATIVE SKILL",
        icon: "CC",
        title: "Content Creator",
        level: "Developing",
        progress: "58%",

        description:
            "I am interested in creating useful technical and creative content around projects, development and things I learn.",

        know: [
            "Idea Creation",
            "Writing",
            "Project Presentation",
            "Creative Thinking"
        ],

        projects: [
            "Project Documentation",
            "Portfolio Content"
        ]
    }

};



/* =========================================================
   CREATE SKILL DETAIL CARD
   JavaScript automatically creates the popup.
========================================================= */

const skillModalHTML = `

<div id="skillDetailModal" class="skill-detail-modal">

    <div
        class="skill-detail-backdrop"
        onclick="closeSkillCard()">
    </div>


    <div class="skill-detail-card">

        <button
            class="skill-detail-close"
            onclick="closeSkillCard()">
            ×
        </button>


        <div class="skill-detail-top">

            <span id="detailCategory">
                PROGRAMMING LANGUAGE
            </span>

            <strong id="detailNumber">
                01
            </strong>

        </div>


        <div
            id="detailIcon"
            class="skill-detail-icon">
            JAVA
        </div>


        <h2 id="detailTitle">
            Java
        </h2>


        <div class="skill-detail-level">

            <div class="skill-detail-level-top">

                <span>MY LEVEL</span>

                <strong id="detailLevel">
                    Intermediate
                </strong>

            </div>


            <div class="skill-detail-progress">

                <span id="detailProgress"></span>

            </div>

        </div>


        <div class="skill-detail-block">

            <span>ABOUT THIS SKILL</span>

            <p id="detailDescription">
                Description
            </p>

        </div>


        <div class="skill-detail-block">

            <span>WHAT I KNOW</span>

            <div
                id="detailKnow"
                class="skill-detail-tags">
            </div>

        </div>


        <div class="skill-detail-block">

            <span>PROJECTS / USE CASES</span>

            <div
                id="detailProjects"
                class="skill-detail-projects">
            </div>

        </div>

    </div>

</div>

`;


/* Add modal to body */

document.body.insertAdjacentHTML(
    "beforeend",
    skillModalHTML
);



/* =========================================================
   OPEN SKILL
========================================================= */

function openSkill(skillName) {

    const skill = skillsData[skillName];

    if (!skill) {

        console.error(
            "Skill not found:",
            skillName
        );

        return;
    }


    /* BASIC DETAILS */

    document.getElementById(
        "detailCategory"
    ).textContent = skill.category;


    document.getElementById(
        "detailNumber"
    ).textContent = skill.number;


    document.getElementById(
        "detailIcon"
    ).textContent = skill.icon;


    document.getElementById(
        "detailTitle"
    ).textContent = skill.title;


    document.getElementById(
        "detailLevel"
    ).textContent = skill.level;


    document.getElementById(
        "detailDescription"
    ).textContent = skill.description;



    /* =====================================================
       PROGRESS BAR
    ===================================================== */

    const progressBar =
        document.getElementById(
            "detailProgress"
        );

    progressBar.style.width = "0%";


    setTimeout(function () {

        progressBar.style.width =
            skill.progress;

    }, 100);



    /* =====================================================
       WHAT I KNOW
    ===================================================== */

    const knowContainer =
        document.getElementById(
            "detailKnow"
        );

    knowContainer.innerHTML = "";


    skill.know.forEach(
        function (item, index) {

            const tag =
                document.createElement("span");

            tag.className =
                "skill-detail-tag";

            tag.textContent =
                item;

            tag.style.animationDelay =
                `${index * 0.06}s`;

            knowContainer.appendChild(tag);

        }
    );



    /* =====================================================
       PROJECTS
    ===================================================== */

    const projectContainer =
        document.getElementById(
            "detailProjects"
        );

    projectContainer.innerHTML = "";


    skill.projects.forEach(
        function (projectName, index) {

            const projectCard =
                document.createElement("div");

            projectCard.className =
                "skill-detail-project";

            projectCard.textContent =
                projectName;

            projectCard.style.animationDelay =
                `${index * 0.08}s`;

            projectContainer.appendChild(
                projectCard
            );

        }
    );



    /* =====================================================
       OPEN CARD
    ===================================================== */

    const modal =
        document.getElementById(
            "skillDetailModal"
        );

    modal.classList.add("show");

    document.body.classList.add(
        "skill-modal-open"
    );
}



/* =========================================================
   CLOSE SKILL
========================================================= */

function closeSkillCard() {

    const modal =
        document.getElementById(
            "skillDetailModal"
        );

    modal.classList.remove("show");

    document.body.classList.remove(
        "skill-modal-open"
    );
}



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeSkillCard();

        }

    }
);

/* =========================================================
   PROJECT DETAILS
========================================================= */

const projectData = {

    "portfolio": {

        number: "01",

        category: "WEB PROJECT",

        title: "Image Portfolio",

        description:
            "A creative image portfolio project designed to present visual work through a modern dark interface with red neon animations and responsive design.",

        date:
            "ADD CREATED DATE",

        link:
            "#",

        code:
            "https://github.com/benten-afk",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ]

    },


    "cv-easy": {

        number: "02",

        category: "WEB APPLICATION",

        title: "CV Easy",

        description:
            "A project designed to make professional CV creation easier. Users can create and organize their CV information through a simple interface.",

        date:
            "15 july 2026",

        link:
            "https://cveasy.vercel.app/",

        code:
            "https://github.com/benten-afk",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "UI/UX"
        ]

    },


    "parking-app": {

        number: "03",

        category: "APPLICATION",

        title: "Parking Application",

        description:
            "A parking application concept focused on managing parking information and improving the organization of parking-related data.",

        date:
            "Soon launching",

        link:
            "#",

        code:
            "https://github.com/benten-afk",

        tech: [
            "Java",
            "DBMS",
            "SQL",
            "Application Development"
        ]

    },


    "mr-doctor": {

        number: "04",

        category: "APPLICATION",

        title: "Mr Doctor APP",

        description:
            "A healthcare application project concept created to explore useful digital experiences and application functionality for users.",

        date:
            "20 November 2026",

        link:
            "#",

        code:
            "https://github.com/benten-afk",

        tech: [
            "Java",
            "DBMS",
            "UI/UX",
            "Application Development"
        ]

    },


    "one-store": {

        number: "05",

        category: "APP",

        title: "One Store APP",

        description:
            "An application concept focused on bringing products and shopping functionality together in one place.",

        date:
            "Soon launching",

        link:
            "#",

        code:
            "https://github.com/benten-afk",

        tech: [
            "Java",
            "DBMS",
            "SQL",
            "Application Development"
        ]

    },


    "cash-game": {

        number: "06",

        category: "GAME PROJECT",

        title: "Cash Game Site",

        description:
            "An interactive game-site concept created to experiment with interface design, interactions and application logic.",

        date:
            "Soon launching",

        link:
            "#",

        code:
            "https://github.com/benten-afk",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Game UI"
        ]

    }

};


/* =========================================================
   OPEN PROJECT
========================================================= */

function openProject(projectId) {

    const project =
        projectData[projectId];

    const modal =
        document.getElementById("projectModal");


    if (!project || !modal) {

        console.error(
            "Project not found:",
            projectId
        );

        return;
    }


    document.getElementById(
        "projectDetailNumber"
    ).textContent =
        project.number;


    document.getElementById(
        "projectDetailCategory"
    ).textContent =
        project.category;


    document.getElementById(
        "projectDetailTitle"
    ).textContent =
        project.title;


    document.getElementById(
        "projectDetailDescription"
    ).textContent =
        project.description;


    document.getElementById(
        "projectDetailDate"
    ).textContent =
        project.date;


    /* PROJECT LINK */

    const projectLink =
        document.getElementById(
            "projectDetailLink"
        );


    projectLink.href =
        project.link;


    projectLink.textContent =
        project.link === "#"
            ? "Add Project Link ↗"
            : "Open Project ↗";


    /* GITHUB */

    document.getElementById(
        "projectDetailCode"
    ).href =
        project.code;


    /* TECHNOLOGIES */

    const technologyContainer =
        document.getElementById(
            "projectDetailTech"
        );


    technologyContainer.innerHTML = "";


    project.tech.forEach(
        function (technology) {

            const tag =
                document.createElement("span");

            tag.textContent =
                technology;

            technologyContainer.appendChild(tag);

        }
    );


    /* OPEN */

    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   CLOSE PROJECT
========================================================= */

function closeProject() {

    const modal =
        document.getElementById(
            "projectModal"
        );


    if (!modal) return;


    modal.classList.remove(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   ESC TO CLOSE
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeProject();

        }

    }
);
/* =====================================================
   CERTIFICATE DATA
===================================================== */

const certificateData = {

    srcem: {

        category: "HACKATHON",

        title: "SRCEM Hackathon",

        achievement: "2nd Position",

        date: "25 April 2025",

        description:
            "Participated in the SRCEM Hackathon and achieved 2nd position through project creation and problem solving.",


        link: "https://kommodo.ai/i/ynEtxYvRGaxwBpVt7HKv"
    },


    gemini: {

        category: "AI / WORKSHOP",

        title: "Google Gemini",

        achievement: "Free Bootcamp / Learning",

        date: "2025",

        description:
            "Completed learning activities related to Google Gemini and explored AI-assisted development and productivity.",

        link: "https://kommodo.ai/i/QZtTvAOCfSKqBJSzdgNq"
    },


    microsoft: {

        category: "PROGRAMMING",

        title: "Microsoft DSA",

        achievement: "Data Structures & Algorithms",

        date: "05 March 2026",

        description:
            "Certificate related to Data Structures and Algorithms, demonstrating learning and practice in core programming concepts.",

        link: "https://kommodo.ai/i/TTyZ76geyqDGSOkD71jC"
    }

};


/* =====================================================
   OPEN CERTIFICATE
===================================================== */

function openCertificate(certificateName) {

    const certificate =
        certificateData[certificateName];

    if (!certificate) {
        return;
    }


    document.getElementById("modalCategory")
        .textContent = certificate.category;


    document.getElementById("modalTitle")
        .textContent = certificate.title;


    document.getElementById("modalAchievement")
        .textContent = certificate.achievement;


    document.getElementById("modalDate")
        .textContent = certificate.date;


    document.getElementById("modalDescription")
        .textContent = certificate.description;


    const certificateLink =
        document.getElementById("certificateLink");

    certificateLink.href =
        certificate.link;


    document
        .getElementById("certificateModal")
        .classList.add("active");


    document.body.style.overflow = "hidden";
}


/* =====================================================
   CLOSE CERTIFICATE
===================================================== */

function closeCertificate() {

    document
        .getElementById("certificateModal")
        .classList.remove("active");


    document.body.style.overflow = "";
}


/* =====================================================
   CLOSE WHEN CLICK OUTSIDE
===================================================== */

document
    .getElementById("certificateModal")
    .addEventListener("click", function (event) {

        if (event.target === this) {

            closeCertificate();

        }

    });


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeCertificate();

    }

});
document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("portfolioMusic");
    const musicBtn = document.getElementById("musicBtn");

    if (!music) {
        console.error("Music element not found!");
        return;
    }

    music.volume = 0.5;

    // Try autoplay
    music.play().then(() => {

        musicBtn.textContent = "🔊 Music";

    }).catch(() => {

        // Browser blocked autoplay.
        console.log("Autoplay blocked. Click anywhere to start music.");

    });


    // First interaction starts music
    function startMusic() {

        if (music.paused) {

            music.play()
                .then(() => {
                    musicBtn.textContent = "🔊 Music";
                })
                .catch(error => {
                    console.error("Music could not play:", error);
                });

        }

        document.removeEventListener("click", startMusic);
        document.removeEventListener("touchstart", startMusic);
    }


    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);


    // Music button
    musicBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        if (music.paused) {

            music.play();
            musicBtn.textContent = "🔊 Music";

        } else {

            music.pause();
            musicBtn.textContent = "🔇 Music";

        }

    });

});
// ==========================================
// ABHIJEET PORTFOLIO AI ASSISTANT
// ==========================================

let currentUserName = "";
let isAskingName = true;
let lastActiveSection = "";
let assistantInitialized = false;


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  const avatar = document.getElementById("assistant-avatar");

  if (avatar) {
    avatar.addEventListener("click", handleAssistantClick);
  }

  // Enter key support
  const input = document.getElementById("ai-user-input");

  if (input) {
    input.addEventListener("keydown", handleKeyPress);
  }
});


// ==========================================
// ASSISTANT AVATAR CLICK
// ==========================================

function handleAssistantClick() {
  toggleAssistantChat();
}


// ==========================================
// OPEN / CLOSE CHAT
// ==========================================

function toggleAssistantChat() {
  const root = document.getElementById("ai-assistant-root");

  if (!root) {
    console.error("AI assistant root not found.");
    return;
  }

  root.classList.toggle("chat-open");

  const chatBody = document.getElementById("ai-chat-body");

  // Show welcome message only once
  if (
    root.classList.contains("chat-open") &&
    chatBody &&
    chatBody.children.length === 0
  ) {
    addBotMessage(
      `Hey! 👋 Welcome to my portfolio.<br><br>
       Before we begin, <strong>what's your name?</strong>`
    );

    assistantInitialized = true;
  }
}


// ==========================================
// ENTER KEY
// ==========================================

function handleKeyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendUserMessage();
  }
}


// ==========================================
// SEND USER MESSAGE
// ==========================================

function sendUserMessage() {
  const input = document.getElementById("ai-user-input");

  if (!input) {
    console.error("AI input not found.");
    return;
  }

  const text = input.value.trim();

  if (!text) return;

  // Add user message
  addUserMessage(text);

  // Clear input
  input.value = "";

  // Small delay for bot response
  setTimeout(() => {
    if (isAskingName) {
      currentUserName = text;

      isAskingName = false;

      showWelcomeMenu();
    } else {
      processGeneralQuery(text);
    }
  }, 400);
}


// ==========================================
// WELCOME MENU
// ==========================================

function showWelcomeMenu() {
  const name = escapeHTML(currentUserName);

  const msgHTML = `
    Nice to meet you, <strong>${name}</strong>! 🎉
    <br>
    What would you like to explore today?
  `;

  const optionsHTML = `
    <div class="ai-quick-options">

      <button
        class="ai-option-btn"
        onclick="navigateToSection('about')">
        🙋‍♂️ About Me
      </button>

      <button
        class="ai-option-btn"
        onclick="navigateToSection('skills')">
        ⚡ Skills
      </button>

      <button
        class="ai-option-btn"
        onclick="navigateToSection('experience')">
        💼 Experience
      </button>

      <button
        class="ai-option-btn"
        onclick="navigateToSection('projects')">
        🚀 Projects
      </button>

      <button
        class="ai-option-btn"
        onclick="navigateToSection('social')">
        📬 Social
      </button>

    </div>
  `;

  addBotMessage(msgHTML);
}


// ==========================================
// GENERAL USER QUESTIONS
// ==========================================

function processGeneralQuery(text) {
  const lower = text.toLowerCase().trim();

  // SKILLS
  if (
    lower.includes("skill") ||
    lower.includes("skills") ||
    lower.includes("technology") ||
    lower.includes("technologies") ||
    lower.includes("tech") ||
    lower.includes("stack")
  ) {
    navigateToSection("skills");
    return;
  }

  // PROJECTS
  if (
    lower.includes("project") ||
    lower.includes("projects") ||
    lower.includes("work") ||
    lower.includes("portfolio")
  ) {
    navigateToSection("projects");
    return;
  }

  // EXPERIENCE
  if (
    lower.includes("experience") ||
    lower.includes("job") ||
    lower.includes("career") ||
    lower.includes("work history")
  ) {
    navigateToSection("experience");
    return;
  }

  // SOCIAL / CONTACT
  if (
    lower.includes("contact") ||
    lower.includes("email") ||
    lower.includes("gmail") ||
    lower.includes("social") ||
    lower.includes("instagram") ||
    lower.includes("github") ||
    lower.includes("linkedin")
  ) {
    navigateToSection("social");
    return;
  }

  // ABOUT
  if (
    lower.includes("about") ||
    lower.includes("who are you") ||
    lower.includes("who is abhijeet") ||
    lower.includes("yourself") ||
    lower.includes("introduce")
  ) {
    navigateToSection("about");
    return;
  }

  // GREETING
  if (
    lower === "hi" ||
    lower === "hello" ||
    lower === "hey" ||
    lower.includes("good morning") ||
    lower.includes("good evening")
  ) {
    addBotMessage(
      `Hey ${escapeHTML(currentUserName)}! 👋
       What would you like to know about my portfolio?`
    );
    return;
  }

  // DEFAULT
  addBotMessage(
    `Thanks for asking, <strong>${escapeHTML(
      currentUserName
    )}</strong>! 😊
    <br><br>
    You can ask me about my
    <strong>About, Skills, Experience, Projects</strong>
    or <strong>Social</strong> profiles.`
  );
}


// ==========================================
// SECTION NAVIGATION
// ==========================================

function navigateToSection(sectionId) {
  const target = document.getElementById(sectionId);

  if (!target) {
    addBotMessage(
      `Sorry! Section
      <strong>#${escapeHTML(sectionId)}</strong>
      was not found in the page.`
    );

    console.error(
      `Section with id="${sectionId}" was not found.`
    );

    return;
  }

  // Section messages
  const messages = {
    about: `
      Here is a quick overview about me! 👋
    `,

    skills: `
      These are my primary technical skills and tools. ⚡
    `,

    experience: `
      Here is my work background and experience. 💼
    `,

    projects: `
      Check out some of my recent projects! 🚀
    `,

    social: `
      You can reach out to me directly here! 📬
    `
  };

  // Update active section BEFORE scrolling
  // This prevents the scroll event from generating
  // another duplicate bot message.
  lastActiveSection = sectionId;

  // Scroll
  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  // Show section message once
  if (messages[sectionId]) {
    setTimeout(() => {
      addBotMessage(messages[sectionId]);
    }, 500);
  }
}


// ==========================================
// BOT MESSAGE
// ==========================================

function addBotMessage(htmlContent) {
  const chatBody = document.getElementById("ai-chat-body");

  if (!chatBody) {
    console.error("AI chat body not found.");
    return;
  }

  const msgDiv = document.createElement("div");

  msgDiv.className = "ai-msg bot";

  msgDiv.innerHTML = htmlContent;

  chatBody.appendChild(msgDiv);

  scrollChatToBottom();
}


// ==========================================
// USER MESSAGE
// ==========================================

function addUserMessage(textContent) {
  const chatBody = document.getElementById("ai-chat-body");

  if (!chatBody) {
    console.error("AI chat body not found.");
    return;
  }

  const msgDiv = document.createElement("div");

  msgDiv.className = "ai-msg user";

  msgDiv.textContent = textContent;

  chatBody.appendChild(msgDiv);

  scrollChatToBottom();
}


// ==========================================
// CHAT AUTO SCROLL
// ==========================================

function scrollChatToBottom() {
  const chatBody = document.getElementById("ai-chat-body");

  if (!chatBody) return;

  setTimeout(() => {
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 50);
}


// ==========================================
// SECTION TRACKER
// ==========================================

const sectionNotes = {
  about: "Here is a little bit about me! 👋",

  skills: "These are my core skills and technical tools. ⚡",

  experience: "Here is my work history and hands-on experience. 💼",

  projects: "Check out some of the cool projects I've built! 🚀",

  social: "Feel free to get in touch if you want to connect! 📬"
};


// ==========================================
// SCROLL TRACKING
// ==========================================
//
// IMPORTANT:
// This does NOT send bot messages.
// It only tracks which section is currently visible.
//
// This prevents duplicate messages when clicking
// the quick buttons.
// ==========================================

let scrollTimeout;

window.addEventListener(
  "scroll",
  () => {
    if (!currentUserName || isAskingName) return;

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      Object.keys(sectionNotes).forEach((id) => {
        const element = document.getElementById(id);

        if (!element) return;

        const rect = element.getBoundingClientRect();

        const sectionVisible =
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2;

        if (sectionVisible) {
          lastActiveSection = id;
        }
      });
    }, 100);
  },
  { passive: true }
);


// ==========================================
// HTML ESCAPE
// ==========================================
//
// Prevents user's name from injecting HTML.
// ==========================================

function escapeHTML(text) {
  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}


// ==========================================
// RESET ASSISTANT
// ==========================================
//
// Optional function.
// You can use:
// resetAssistant();
// ==========================================

function resetAssistant() {
  currentUserName = "";
  isAskingName = true;
  lastActiveSection = "";
  assistantInitialized = false;

  const chatBody = document.getElementById("ai-chat-body");

  if (chatBody) {
    chatBody.innerHTML = "";
  }

  const input = document.getElementById("ai-user-input");

  if (input) {
    input.value = "";
  }
}


// ==========================================
// CLOSE CHAT
// ==========================================

function closeAssistantChat() {
  const root = document.getElementById("ai-assistant-root");

  if (root) {
    root.classList.remove("chat-open");
  }
}
// =========================
// AUTO SCROLL
// =========================

const autoScrollBtn = document.getElementById("autoScrollBtn");

let autoScrolling = false;
let autoScrollAnimation = null;

function startAutoScroll() {
  autoScrolling = true;
  autoScrollBtn.classList.add("active");
  autoScrollBtn.innerHTML = '<span>⏸</span> STOP';

  function scrollPage() {
    if (!autoScrolling) return;

    window.scrollBy({
      top: 1,
      left: 0,
      behavior: "auto"
    });

    // Page ke bottom par pahunchne ke baad stop
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2
    ) {
      stopAutoScroll();
      return;
    }

    autoScrollAnimation = requestAnimationFrame(scrollPage);
  }

  autoScrollAnimation = requestAnimationFrame(scrollPage);
}

function stopAutoScroll() {
  autoScrolling = false;

  if (autoScrollAnimation) {
    cancelAnimationFrame(autoScrollAnimation);
  }

  autoScrollBtn.classList.remove("active");
  autoScrollBtn.innerHTML = '<span>↓</span> SCROLL';
}

autoScrollBtn.addEventListener("click", () => {
  if (autoScrolling) {
    stopAutoScroll();
  } else {
    startAutoScroll();
  }
});