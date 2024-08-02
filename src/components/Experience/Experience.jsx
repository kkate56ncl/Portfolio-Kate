import styles from './Experience.module.css';
import skillsArr from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageUrl } from '../../utility.js';

const Experience = () => {
  return (
    <section id="experience" className={styles.experienceContainer}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skillsArr.map((skill, index) => {
            return (
              <div key={index} className={styles.skill}>
                <div className={styles.skillImgContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, index) => {
            return (
              <li key={index} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>
                    {historyItem.role}, {historyItem.organisation}
                  </h3>
                  <p>
                    {historyItem.startDate} - {historyItem.endDate}
                  </p>
                  <ul>
                    {historyItem.experiences.map((experience, i) => {
                      return <li key={i}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
