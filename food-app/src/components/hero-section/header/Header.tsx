import styles from "./header.module.scss";

export function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>Меню</li>
					<li className={styles.navItem}>Доставка</li>
					<li className={styles.navItem}>Оплата</li>
					<li>
						<button className={styles.navBtn}>Бронь столика</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}
