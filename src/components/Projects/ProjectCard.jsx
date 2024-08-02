/* eslint-disable react/prop-types */
import { getImageUrl } from '../../utility.js';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCardContainer}>
      <img
        className={styles.projectImage}
        src={getImageUrl(project.imageSrc)}
        alt={`Image of ${project.title}`}
      />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill, i) => {
          return (
            <li className={styles.skill} key={i}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={project.demo}>
          Demo
        </a>
        <a className={styles.link} href={project.source}>
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
