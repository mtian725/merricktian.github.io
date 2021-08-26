type careerItem = {
  title: string;
  start: string;
  end: string;
  org: string;
  url?: string;
  description: string;
  uniData?: uniData;
};

type uniData = {
  major: string;
  minor: string;
  gpa: string;
  achievements: string;
};

export const professionalExperience: careerItem[] = [
  {
    title: "Software Engineer Intern",
    start: "Jun 2021",
    end: "Aug 2021",
    org: "InfluxData",
    url: "https://www.influxdata.com/",
    description: `Utilized React, TypeScript, and Sass to resolve issues and implemented new features for the
    UI and the Giraffe visualization library. Integrated the SimpleTable component into the Giraffe library, created a new Storybook
    component for SimpleTable, and released the new feature as version 2.17.0 of Giraffe. Developed and updated around 20 end-to-end tests using Cypress as bugs were resolved. 
    Contributed towards the implementation of the new design of the Tokens page.`,
  },
  {
    title: "Web Development Intern",
    start: "Jun 2020",
    end: "Aug 2020",
    org: "Cmind Inc",
    url: "https://www.cmind-ai.com/",
    description: `Created a visually appealing and dynamic web product through close collaboration with the
    back end team by visualizing compiled financial and risk score data. Updated and maintained the web product using BitBucket as development advanced
    through the early stages of public distribution. Utilized React and JavaScript to construct several features currently available on the web
    product, including market tracking features, peer group analysis, and earning call graphs.`,
  },
  {
    title: "Student Researcher",
    start: "Aug 2018",
    end: "Dec 2019",
    org: "FIRE: Phillips Virtual Culture",
    url: "https://www.fire.umd.edu/",
    description: `As a member of the FIRE research stream Philips Virtual Culture, we collaborated with the Phillips Collection to utilize 
    augmented reality and virtual reality to develop innovative ways to explore 
    and learn from museums. Utilizing C#, Unity, and ARCore, I constructed a 
    mobile application that generates an interactive gallery, which included 
    videos, art, transcripts, and audiotapes. I was also invited to be a part 
    of the Summer Research Fellowship Program. During that time, I worked closely 
    with my advisor and peers to further our research and help the development 
    of each other's projects.`,
  },
];

export const academicExperience: careerItem[] = [
  {
    title: "Undergrad Teaching Assistant",
    start: "Jan 2021",
    end: "May 2021",
    org: "CMSC433: Programming Language Technologies and Paradigms",
    url: "https://www.cs.umd.edu/class/spring2021/cmsc433/",
    description: `Held office hours and answered questions pertaining to multithreading, distributed systems,
    and other concurrency concepts for 10 hours per week. Collaborated with other Teaching Assistants to aid over 170 students and the professor during
    the Spring 2021 semester.`,
  },
  {
    title: "",
    start: "Aug 2018",
    end: "Dec 2021",
    org: "University of Maryland, College Park",
    url: "https://www.umd.edu/",
    description: "",
    uniData: {
      major: "B.S. Computer Science",
      minor: "Minor: Classical Mythology",
      gpa: "3.828/4.000",
      achievements: "Dean’s List: Fall 2018 - Spring 2021",
    },
  },
];
