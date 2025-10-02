import Logo from "@/assets/logo.png";
import MenuBtn from "@/assets/menu.svg?react";
import Youtube from "@/assets/icons/youtube.svg?react";
import Vk from "@/assets/icons/vk.svg?react";
import Telegram from "@/assets/icons/telegram.svg?react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function NavBar() {
	useEffect(() => {
		fetch(
			"https://fakerapi.it/api/v2/products?_quantity=1&_taxes=12&_categories_type=uuid"
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	}, []);

	return (
		<nav className={styles.navbar}>
			<div className={styles.logoContainer}>
				<Link to="/">
					<img className={styles.image} src={Logo} alt="логотип" />
				</Link>
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
