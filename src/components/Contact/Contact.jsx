import { getImageUrl } from '../../utility.js';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <footer id="contact" className={styles.contactContainer}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
          <a>email@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/linkedinIcon.png')} alt="Linkedin icon" />
          <a href="https://www.linkedin.com/in/katechangsyd/">Linkedin.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon" />
          <a href="https://github.com/kkate56ncl">Github.com</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
