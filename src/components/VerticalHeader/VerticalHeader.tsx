import Logo from "../common/Logo";
import Menu from "../common/Menu";

import styles from "./VerticalHeader.module.css";
import Avatar from "../common/Avatar";

export default function VerticalHeader() {
	return (
		<header className={styles.header}>
			<Logo />
			<Menu className={styles.menu} />
			<Avatar className={styles.avatar} />
		</header>
	);
}