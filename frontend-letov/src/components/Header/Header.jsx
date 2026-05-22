import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>История</NavLink>
        <NavLink to="/discography" className={styles.link}>Дискография</NavLink>
        <NavLink to="#" className={styles.link}>Фотографии</NavLink>
        <NavLink to="#" className={styles.link}>Обратная связь</NavLink>
      </nav>
    </header>
  )
}