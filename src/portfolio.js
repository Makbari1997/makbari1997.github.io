/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/programming-computer.json"; // Rename to your file name for custom animation

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
  username: "Masoud Akbari",
  title: "Hey, I'm Masoud!",
  subTitle: emoji(
    "I am an AI enthusiast 🤓 with proficiency in Natural Language Processing and working experience as Data Scientist and Machine Learning Engineer. I enjoy learning 📖 new things since there are always new things to know. I am into facing new challenges as it helps me level myself up."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1HZLON5dJj_p8FlNHSN6rpfpstHmOKMEn/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Makbari1997",
  linkedin: "https://www.linkedin.com/in/masoud-akbari/",
  gmail: "ma.akbari421@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BEING CURIOUS ABOUT ANYTHING CAN WELL IMPACT OUR LIVES!",
  skills: [
    emoji(
      "⚡ Research (Specifically in Natural Language Processing)"
    ),
    emoji("⚡ Implementing models and algorithms"),
    emoji(
      "⚡ Developing pipelines to put Machine Leaning into production"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "ubuntu",
    //   fontAwesomeClassname: "fab fa-ubuntu"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Amirkabir University of Technology",
      logo: require("./assets/images/aut.png"),
      subHeader: "Master of Science in Computer Science (Artificial Intelligence and Soft Computations)",
      duration: "October 2020 - September 2022",
      desc: ["Thesis: A Hybrid Architecture for Out of Domain Intent Detection and Intent Discovery"],
      descBullets: [
        "The proposed method passed the baselines.",
        "Its related paper is submitted to IEEE/ACM Transactions on Audio, Speech, and Language Processing.",
        "The preprint of the paper can be accessed through searching the name in google scholar."
      ],
    },
    {
      schoolName: "Kharazmi Uinversity",
      logo: require("./assets/images/khu_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2015 - June 2020",
      desc: "Ranked top 10% in the program. Also, member of ACM student association for 3 years. Some proceedings of those 3 years are: ",
      descBullets: [
        "Co-organizer of two seasonal deep learning schools.",
        "Participating in holding a variety of seminars in AI, programming, mathematics, etc.",
        "Chosen as the best association of Kharazmi university."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Tensorflow, Scikit-Learn, Pandas, Numpy",
      progressPercentage: "70%"
    },
    {
      Stack: "TFX, Airflow, MLFlow",
      progressPercentage: "50%"
    },
    {
      Stack: "SQL", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Engineer",
      company: "Bontech Holding",
      companylogo: require("./assets/images/bontech-logo.png"),
      date: "April 2022 – March 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Used concepts of MLOps to develop a customized pipeline to accelerate and facilitate the management, experiments, deployments, etc.",
        "Worked with open-source tools to develop each component of the pipeline and orchestration.",
        "Developed pipelines for structured and unstructured data."
      ]
    },
    {
      role: "Natural Language Processing Research Assistant",
      company: "NLPIC",
      companylogo: require("./assets/images/nlpic-logo.png"),
      date: "October 2020 – October 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Worked on the paper \"A Hybrid Architecture for Out of Domain Intent Detection and Intent Discovery\"",
        "Managed the paper \"A Persian Benchmark for Joint Intent Detection and Slot Filling\"",
        "Participated in gathering a short-text Persian benchmark dataset for Topic Modeling (under submission)",
        "Managed weekly meetings"
      ] 
    },
    {
      role: "Data Scientist",
      company: "Bontech Holding",
      companylogo: require("./assets/images/bontech-logo.png"),
      date: "April 2021 – March 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Worked with one of the provincial (Alborz province) gas companies to detect consumers with abnormal consumption behavior.",
        "Set up a PostgreSQL database on our local servers to store client data when remote data access was impossible.",
        "Applied different data exploratory analyses which helped gather insights from the data.",
        "Used statistical and unsupervised approaches to make data cleaner, which improved anomaly detection results.",
        "Implemented a deep self-supervised model to detect abnormal consumption behaviors to deal with unlabeled data."
      ]
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
  title: "Open-Source Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Persian-Atis",
      projectDesc: "The persian version of ATIS dataset for join intent detection and slot filling",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/Makbari1997/Persian-Atis"
        },
        {
          name: "Arxiv",
          url: "https://arxiv.org/abs/2303.00408"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Persian Short-text Topic Modeling",
      projectDesc: "A short-text data gathering and set of topic modeling tools",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/DSInCenter/topicmodel"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  // title: emoji("Achievements And Certifications 🏆 "),
  title: "Courses",
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Machine Learning Engineering for Production (MLOps) Specialization",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/deeplearningai-logo.png"),
      imageAlt: "Deeplearning.ai logo",
      footerLink: [
        {
          name: "Course Link",
          url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops"
        },
      ]
    },
    {
      title: "SQL Server Database Development",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/cropped-logo-dark.png"),
      imageAlt: "MFT Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1IS0LPYDD8yPAdukDjVCYMEqlULOzGZfC/view?usp=sharing"
        },
        {
          name: "Webiste",
          url: "https://mftplus.com/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "ma.akbari421@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable
};
