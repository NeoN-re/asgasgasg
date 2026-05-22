import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.link}>История</a>
        <a href="#" className={styles.link}>Дискография</a>
        <a href="#" className={styles.link}>Фотографии</a>
        <a href="#" className={styles.link}>Обратная связь</a>
      </nav>
    </header>
  )
}