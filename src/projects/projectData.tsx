import Chess from "../images/chess.png";
import Cake from "../images/cake.png";
import Calculator from "../images/calculator.png";
import Discord from "../images/discordLogo.svg";

/** Logos I cannot use and why.
 *
 * InfluxData - explicitely say not aloud to use logos
 *              https://www.influxdata.com/legal/guidelines-for-using-influxdata-trademarks/
 * GitHub - specifically as a default image when there is no image. Technically
 *          it is not allowed under the guidelines
 *          https://github.com/logos
 * Chess.com - as far as I can see it's free to use
 *             https://www.chess.com/article/view/chess-com-brand-resources
 */

// Leave as this despite not using "lastUpdated" in case I want to
// set it up such that I can sort it or search or filter projects

// status is used in the object, but not used in the actual rendering
enum status {
  complete = "Complete",
  abandoned = "Abandoned",
  inProgress = "In Progress",
}

type projectItem = {
  name: string;
  image: string;
  status: string;
  tools: string[];
  description: string;
  links: {
    github: string;
    urls?: {
      label: string;
      url: string;
    }[];
  };
  lastUpdated: string;
};

export const projectData: projectItem[] = [
  {
    name: "Personal Website",
    image: "",
    status: status.complete,
    tools: ["React.js", "TypeScript", "Sass"],
    description: `A personal website that acts as a portfolio. I plan to 
    periodically add to it to keep it up to date.`,
    links: {
      github: "https://github.com/mtian725/merricktian.github.io",
    },
    lastUpdated: "8/2021",
  },
  {
    name: "Chess.com Telegraf™ Plugin",
    image: Chess,
    status: status.complete,
    tools: ["Go", "Telegraf™"],
    description: `A project developed in collaboration with other interns 
    during the InfluxData 2021 Intern Hackathon. We created a plugin for 
    Telegraf™, the monitoring agent developed by InfluxData, to fetch data 
    from the public API from Chess.com.`,
    links: {
      github: "https://github.com/JustSomeCarbon/telegraf",
      urls: [
        {
          label: "Blog",
          url: "https://www.influxdata.com/blog/collecting-data-from-chess-com-writing-your-own-telegraf-plugin/",
        },
      ],
    },
    lastUpdated: "7/2021",
  },
  {
    name: "Cake Animations",
    image: Cake,
    status: status.complete,
    tools: ["React.js", "GSAP"],
    description: `A fun and simple website built for the sake of practicing 
    web development and experimenting with GSAP.`,
    links: {
      github: "https://github.com/mtian725/Cake-Animations",
      urls: [
        {
          label: "Web App",
          url: "https://mtian725.github.io/Cake-Animations/",
        },
      ],
    },
    lastUpdated: "7/2020",
  },
  {
    name: "Basic Calculator",
    image: Calculator,
    status: status.complete,
    tools: ["React.js", "HTML", "CSS"],
    description: `A basic calculator web applicatiuon built to familiarize 
    myself with and practice fundamental concepts of React.`,
    links: {
      github: "https://github.com/mtian725/BasicCalculator",
      urls: [
        {
          label: "Web App",
          url: "https://mtian725.github.io/BasicCalculator/",
        },
      ],
    },
    lastUpdated: "7/2020",
  },
  {
    name: "Sierokarte Bot",
    image: Discord,
    status: status.abandoned,
    tools: ["Python", "Heroku"],
    description: `This was a Discord bot built using Python, and I 
    temporarily hosted it on Heroku. I worked and maintained a 
    centralized codebase on GitHub with a team of three. We sought to 
    use this to improve the quality of life for beginners in the 
    video game Granblue Fantasy. Project was abandoned due to the team's 
    inexperience with software development, inexperience with the tools 
    available, and the features we sought to implement were not ideal for 
    a Discord bot medium. However, it was a good opportunity to learn more 
    Python.`,
    links: {
      github: "https://github.com/mtian725/Sierokarte-Bot",
    },
    lastUpdated: "7/2020",
  },
];
