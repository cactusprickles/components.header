import Logo from "../common/Logo";
import Menu from "../common/Menu";
import Avatar from "../common/Avatar";

import styles from "./SimpleHeader.module.css";

export default function SimpleHeader() {
	return (
		<header className={styles.header}>
			<Logo />
			<Menu className={styles.menu} />
			<Avatar />
		</header>
	);
}