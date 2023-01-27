type Props = {
	className?: string;
}

export default function Avatar({ className }: Props) {
	return (
		<div className={`avatar ${className}`}>
			예진
		</div>
	);
}