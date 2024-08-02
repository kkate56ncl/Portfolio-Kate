import styles from './About.module.css';
import { getImageUrl } from '../../utility';

const About = () => {
  return (
    <section id="about" className={styles.aboutContainer}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImg}
          src={getImageUrl('about/aboutImage.png')}
          alt="Me sitting with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I&apos;m a front-end developer with experience in building responsive and optimized
                sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/serverIcon.png')} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience in developing fast and optimised back-end systems and APIs.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/uiIcon.png')} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>I have designed multiple landing pages and have created design systems as well</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
