import { Outlet } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import styles from "./layout.module.scss";

export function Layout() {
	return (
		<div className={styles.container}>
			<NavBar />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
