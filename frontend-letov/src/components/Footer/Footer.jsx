import styles from './Footer.module.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            <p>© {currentYear} Egor Letov's musical groups</p>
            <p className={styles.rights}>Все права защищены</p>
          </div>
          <div className={styles.linksColumn}>
            <a href="http://gr-oborona.ru/" className={styles.link}>сайт «Гражданской Обороны»</a>
            <a href="http://wyrgorod.ru" className={styles.link}>издательство «Выргород»</a>
            <a href="https://t.me/chumakovaGO" className={styles.link}>тгк Натальи Чумаковой</a>
            <a href="https://grob-hroniki.org/links.html" className={styles.link}>ГрОб-Хроники</a>
          </div>
        </div>
      </div>
    </footer>
  )
}