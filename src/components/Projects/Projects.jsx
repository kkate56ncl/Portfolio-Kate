import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects.json';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projectContainer}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        {projectsData.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
