import { getImageUrl } from '../../utility';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        {/* &apos; use HTML entity to render single quote */}
        <h1 className={styles.title}>Hi, I&apos;m Kate</h1>
        <p className={styles.description}>
          I&apos;m a web developer using JavaScript and React. Feel free to reach out!
        </p>
        <a href="mailto:kate56ncl@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImage.png')}
        className={styles.heroImg}
        alt="hero image of me"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
