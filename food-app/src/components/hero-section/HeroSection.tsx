import { Header } from "./header/Header";
import styles from "./heroSection.module.scss";

export function HeroSection() {
	return (
		<section className={styles.hero}>
			<Header />
			<div className={styles.heroContent}>
				<h1 className={styles.heroTitle}>
					Видовой ресторан Food Exxe Relo на Крестовском острове
				</h1>
			</div>
		</section>
	);
}
