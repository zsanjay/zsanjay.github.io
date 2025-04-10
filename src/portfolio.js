/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sanjay Mehta",
  title: "Hi all, I'm Sanjay",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web, Enterprise and Mobile applications with Java / JavaScript / Reactjs / Angular / Spring Boot / AWS / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1m6QRW-Hze1pOlvyCJLXgd6ZC1au61MZ6/view?usp=drive_link", 
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zsanjay",
  linkedin: "https://www.linkedin.com/in/sanjay-mehta-475280176/",
  gmail: "sanjayofficial94@gmail.com",
  medium: "https://medium.com/@sanjayofficial94",
  substack : "https://sanjayofficial.substack.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Build distributed scalable and efficient solutions"),
    emoji(
      "⚡ Driving Innovation Through Full-Stack Development"
    ),
    emoji(
      "⚡ Create Scalable Web Applications with Java & React"
    ),
    emoji(
      "⚡ Turn Concepts into Production-Ready Code"
    ),
    emoji(
      "⚡ Developing Reliable and Maintainable Software Systems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indra Gandhi National Open University",
      logo: require("./assets/images/IGNOU-Preview.png"),
      subHeader: "Master of Computer Application",
      duration: "July 2016 - June 2018",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Indra Gandhi National Open University",
      logo: require("./assets/images/IGNOU-Preview.png"),
      subHeader: "Bachelor of Computer Application",
      duration: "July 2013 - June 2016",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "HiDubai",
      companylogo: require("./assets/images/hidubai.png"),
      date: "October 2023 – Present",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Implemented high-performance RESTful APIs for HiDubai business users using TDD approach, handling thousands of requests per second, and increased user engagement by 30%",
        "Headed the implementation of an API Gateway Caching using AWS, improving latency by 30% and boosting system performance by 25%",
        "Built 10+ responsive UI components, achieving a 95% satisfaction rate and ensuring seamless integration with 2 legacy systems while maintaining 100% backward compatibility",  
        "Resolved critical Elasticsearch indexing issues, increased customer interaction, and improved system search functionality by 20%",
        "Mentored junior developers, conducted code reviews, and established best coding practices"
      ]
    },
    {
      role: "Senior Technical Consultant",
      company: "Ernst & Young",
      companylogo: require("./assets/images/ey.jpg"),
      date: "March 2022 – Sep 2023",
      descBullets: [
        "Integrated video-based statement functionality as a part of the enhancement of the current architecture of the Simplified Member Benefit Statement (SMBS) using Idomoo APIs, increasing user engagement by 35%",
        "Designed and developed a scalable serverless architecture on AWS for the implementation of the Video Benefit Statement (VBS) feature into existing SMBS architecture, enabling seamless video processing and delivery, which increased user activity by 30%",
        "Applied API security policies and rate limiting, protecting backend systems from abuse and DDoS attacks, which results in 25% of improvement in system security and performance",
        "Drove adoption of TDD best practices, reducing post-release defects by 40%"
      ]
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer",
      company: "IOptibiz Solutions Pvt Ltd",
      companylogo: require("./assets/images/ioptibiz.jpeg"),
      date: "Aug 2018 – July 2019",
      descBullets: [
        "Implemented caching strategies of static files, reducing response time by 30%",
        "Devised an automated employee scheduling service for the bench project, improving resource allocation efficiency by 20%",
        "Built high performance RESTful APIs for project management module"
      ]
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Optiedge.jpeg"),
      projectName: "Optiedge",
      projectDesc: "ERP for People Industry",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.linkedin.com/showcase/optiedge-erp-for-people-industry/about/"
        }
      ]
    },
    {
      image: require("./assets/images/inventum_unify_operations_billing_platform_for_service_providers_image.png"),
      projectName: "Unify",
      projectDesc: "Operations and billing platform for service providers",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.inventum.net"
        }
      ]
    },
    {
      image: require("./assets/images/mohap1.jpeg"),
      projectName: "MOHAP Central Control Room Dashboard",
      projectDesc: "MOHAP CCR Dashboard shows aggregated data of every hospital in each emirate.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.linkedin.com/company/adapt-middle-east/posts/?feedView=all"
        }
      ]
    },
    {
      image: require("./assets/images/hidubai.png"),
      projectName: "HiDubai",
      projectDesc: "Business Directory for Dubai region.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.linkedin.com/company/adapt-middle-east/posts/?feedView=all"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications that I have done to gain deep knowledge in a specific subject",

  achievementsCards: [
    {
      title: "AWS Solutions Architect Associate",
      image: require("./assets/images/AWS Solutions Architect Associate Certificate.jpeg"),
      imageAlt: "AWS Solutions Architect Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1N5ZRl4VqowrOL1lDtwdlgqjnXiRroFu_/view?usp=drive_link"
        }
      ]
    },
    {
      title: "AWS Cloud Practitioner",
      image: require("./assets/images/AWS Cloud Practitioner.png"),
      imageAlt: "AWS Cloud Practitioner",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1n5SFo31PLQooYtO_AOPPGf6lSKDzkndw/view?usp=drive_link"
        }
      ]
    },

    {
      title: "100 Coding Challenges on Algoexpert.io",
      subtitle: "Completed 100 Coding Challenges on Algoexpert.io",
      image: require("./assets/images/AlgoExpert.jpeg"),
      imageAlt: "AlgoExpert",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1gC7JVgW9-idkA29LAOpvG3HTr4cH1DY5/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displaySubstackBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "sanjay.mehta.hidubai@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
