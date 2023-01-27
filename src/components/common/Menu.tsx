type Props = {
	className?: string;
}

export default function Menu({ className }: Props) {
	return (
		<ul className={`menu ${className}`}>
			<li>메뉴1</li>
			<li>메뉴2</li>
			<li>메뉴3</li>
		</ul>
	);
}