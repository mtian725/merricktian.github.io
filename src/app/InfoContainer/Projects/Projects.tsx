import Image from "next/image";
import github from "public/Logos/github-mark-white.png";
import styles from "../../page.module.scss";
import { BiLinkExternal } from "react-icons/bi";
import ProjectDetails from "./ProjectData";
import { projectType } from "../../types";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const projectComponents: JSX.Element[] = [];

const buildProject = (project: projectType): void => {
  const githublink = project.github ? (
    <a href={project.github} target="_blank">
      <Image className={styles.links} src={github} alt="github" priority />
    </a>
  ) : null;
  const weblink = project.webapp ? (
    <a href={project.webapp} target="_blank">
      <BiLinkExternal className={styles.links} />
    </a>
  ) : null;

  projectComponents.push(
    <div className={styles.projectItem} key={project.name}>
      <Image
        className={styles.projectImage}
        src={project.image}
        alt={project.name}
        priority
      />
      <div className={styles.projectTitleBox}>
        <div className={styles.titleCard}>
          <h3 className={inter.className}>{project.name}</h3>
        </div>
      </div>
      <div className={styles.overlay}>
        {githublink}
        {weblink}
      </div>
    </div>
  );
};

ProjectDetails.forEach((projectGroup) => {
  projectComponents.push(
    <div className={styles.projectYear} key={projectGroup.year}>
      <h3 className={inter.className}>{projectGroup.year}</h3>
    </div>
  );
  projectGroup.projects.forEach((project: projectType) =>
    buildProject(project)
  );
});

const Projects = (): JSX.Element => {
  return <div className={styles.projectContainer}>{projectComponents}</div>;
};

export default Projects;
