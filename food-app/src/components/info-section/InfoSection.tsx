import styles from "./infoSection.module.scss";
import Line from "@/assets/icons/line.svg?react";
export function InfoSection() {
	return (
		<section className={styles.info}>
			<div className={styles.restaurant}>
				<h3 className={styles.restaurantSubtitle}>о ресторане</h3>
				<Line />
			</div>
			<div className={styles.infoContent}>
				<h2 className={styles.infoTitle}>Food Exxe Relo</h2>
				<div className={styles.infoText}>
					<p className={styles.infoDescription}>
						Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In
						lectus phasellus non ornare eget velit. Facilisi urna, tristique
						dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo pulvinar
						sit volutpat nulla vestibulum.
					</p>
					<p className={styles.infoDescription}>
						Morbi pellentesque enim massa laoreet vel id. Lectus ac, facilisis
						neque turpis. Morbi massa enim nullam sem vehicula. Amet quis
						pellentesque enim porttitor lectus interdum. Nisi, faucibus pharetra
						at porttitor. Fringilla luctus pretium in viverra. In adipiscing
						tempor amet malesuada ullamcorper ut sagittis. Dui, scelerisque
						vulputate risus massa dictum. Cras at quis in eu, faucibus feugiat
						vel. At.
					</p>
				</div>
			</div>
		</section>
	);
}
