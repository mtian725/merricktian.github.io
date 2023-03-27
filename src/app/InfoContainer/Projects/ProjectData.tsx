import discordLogo from "public/ProjectImages/discord-mark-black.png";
import calculator from "public/ProjectImages/calculator.png";
import cake from "public/ProjectImages/cake.png";
import chess from "public/ProjectImages/chess.png";
import website from "public/ProjectImages/website.png";

const ProjectDetails = [
  {
    year: 2023,
    projects: [
      {
        name: "merricktian.me",
        image: website,
        github: "https://github.com/mtian725/merricktian.github.io",
      },
    ],
  },
  {
    year: 2021,
    projects: [
      {
        name: "Chess.com Telegraf™ Plugin",
        image: chess,
        github: "https://github.com/JustSomeCarbon/telegraf",
        webapp:
          "https://www.influxdata.com/blog/collecting-data-from-chess-com-writing-your-own-telegraf-plugin/",
      },
    ],
  },
  {
    year: 2020,
    projects: [
      {
        name: "Cake Animations",
        image: cake,
        github: "https://github.com/mtian725/Cake-Animations",
        webapp: "https://mtian725.github.io/Cake-Animations/",
      },
      {
        name: "Basic Calculator",
        image: calculator,
        github: "https://github.com/mtian725/BasicCalculator",
        webapp: "https://mtian725.github.io/BasicCalculator/",
      },
      {
        name: "Sierokarte Bot",
        image: discordLogo,
        github: "https://github.com/mtian725/Sierokarte-Bot",
      },
    ],
  },
];

export default ProjectDetails;
