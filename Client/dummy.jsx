export default {
  firstName: "James",
  lastName: "Carter",
  jobTitle: "full stack developer",
  address: "525 N tryon Street, NC 28117",
  phone: "(123)-456-7890",
  email: "exmaple@gmail.com",
  themeColor: "#ff6666",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  experience: [
    {
      id: 1,
      title: "Full Stack Developer",
      companyName: "Amazon",
      city: "New York",
      state: "NY",
      start_year: "2021",
      end_year: "2019",
      currentlyWorking: true,
      description:
        " Designed, developed, and maintained full-stack applications using React and Node.js.\n" +
        "• Implemented responsive user interfaces with React, ensuring seamless user experiences across\n" +
        "various devices and browsers.\n" +
        "• Maintaining the React Native in-house organization application." +
        "• CreatedRESTfulAPIs withNode.js and Express,facilitating data communicationbetween the front-end" +
        "and back-end systems.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      companyName: "Google",
      city: "Charlotte",
      state: "NC",
      start_year: "2021",
      end_year: "2019",
      currentlyWorking: false,
      description:
        " Designed, developed, and maintained full-stack applications using React and Node.js." +
        "• Implemented responsive user interfaces with React, ensuring seamless user experiences across" +
        "various devices and browsers." +
        "• Maintaining the React Native in-house organization application." +
        "• CreatedRESTfulAPIs withNode.js and Express,facilitating data communicationbetween the front-end" +
        "and back-end systems.",
    },
  ],
  education: [
    {
      title: "Western Illinois University",
      start_year: "2018",
      end_year: "2019",
      city: "Karachi",
      currentlyWorking: false,
      degree: "Bachelor of Software Engineering",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      id: 2,
      title: "Western Illinois University",
      start_year: "2018",
      end_year: "2019",
      city: "Karachi",
      degree: "Bachelor of Software Engineering",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
  ],
  skills: [
    {
      id: 1,
      name: "Angular",
      rating: 80,
    },
    {
      id: 1,
      name: "React",
      rating: 100,
    },
    {
      id: 1,
      name: "MySql",
      rating: 80,
    },
    {
      id: 1,
      name: "React Native",
      rating: 100,
    },
  ],
  projects: [
    {
      id: 1,
      name: "Bali’s Blog Website",
      year: 2024,
      frameworks: [
        "React",
        "Redux",
        "Node",
        "Express",
        "MongoDB",
        "Firebase",
        "TailwindCSS",
        "Flowbite-react",
      ],
      githubLink: "asdfghjkl",
      description:
        "Developed a full-featured blog platform with JWT and Google authentication, an admin dashboard for post management, and interactive features like comments, likes, and image uploads. The frontend, built using React, TailwindCSS, and Redux Toolkit, supports light/dark mode and is fully responsive. The backend is powered by Node.js, Express, and MongoDB, with Firebase utilized for image storage. ",
    },
  ],
};
