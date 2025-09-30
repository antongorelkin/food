import Logo from "@/assets/logo.png";
import MenuBtn from "@/assets/menu.svg?react";
import Youtube from "@/assets/icons/youtube.svg?react";
import Vk from "@/assets/icons/vk.svg?react";
import Telegram from "@/assets/icons/telegram.svg?react";
import styles from "./navbar.module.scss";

export function NavBar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logoContainer}>
				<img className={styles.image} src={Logo} alt="логотип" />
				<button className={styles.menuBtn}>
					<MenuBtn />
				</button>
			</div>
			<div className={styles.socialContainer}>
				<ul className={styles.listSocial}>
					<a className={styles.socialItem}>
						<Youtube />
					</a>
					<a className={styles.socialItem}>
						<Vk />
					</a>
					<a className={styles.socialItem}>
						<Telegram />
					</a>
				</ul>
			</div>
		</nav>
	);
}
