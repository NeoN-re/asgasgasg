import styles from './Discography.module.css'

export const Discography = () => {
    return (
        <div className={styles.discography}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.bandTitle}>Гражданская оборона</h1>
                    <h2 className={styles.sectionTitle}>Студийные альбомы</h2>
                </div>
                
                <div className={styles.albumsList}>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1985</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Поганая молодёжь</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1985</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Оптимизм</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1987</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Красный альбом</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1987</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Мышеловка</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1987</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Хорошо!!</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1987</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Тоталитаризм</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1987</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Некрофилия</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1988</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Всё идёт по плану</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1988</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Так закалялась сталь</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1988</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Боевой стимул</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1989</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Песни радости и счастья</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1989</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Война</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1989</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Здорово и вечно</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1989</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Армагеддон-попс</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1989</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Русское поле экспериментов</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1990</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Инструкция по выживанию</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1997</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Солнцеворот</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>1997</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Невыносимая лёгкость бытия</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>2002</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Звездопад</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>2004</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Долгая счастливая жизнь</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>2005</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Реанимация</span>
                    </div>
                    <div className={styles.albumItem}>
                        <span className={styles.year}>2007</span>
                        <span className={styles.separator}>|</span>
                        <span className={styles.albumName}>Зачем снятся сны?</span>
                    </div>
                </div>
            </div>
        </div>
    )
}