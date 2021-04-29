import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
  const isUserLoggerdIn = true;

  return isUserLoggerdIn ? (
    <button
      className={styles.signInbutton}
      type="button"
    >
      <FaGithub color="#04D361" />
      Matheus Silva

      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button
      className={styles.signInbutton}
      type="button"
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
