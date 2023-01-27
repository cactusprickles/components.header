type Props = {
	className?: string;
}

export default function Contents({ className }: Props) {
	return (
		<main className={`contents ${className}`}>
			<img src="https://picsum.photos/200/250" alt="lorem picsum" />
			<section>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lectus tincidunt nibh molestie consectetur. Nullam sed risus luctus, facilisis libero a, lobortis nisi. Donec est ipsum, tincidunt eu tristique sit amet, tristique at leo. Cras a neque tincidunt, placerat turpis et, accumsan purus. Integer ex turpis, vulputate a varius ac, tincidunt vitae sem. Vestibulum dapibus felis et lorem commodo, eu consequat ante viverra. Duis rhoncus ipsum nec sapien ornare, tempor laoreet lorem accumsan. Donec tincidunt nec diam nec accumsan. Proin tincidunt purus eget posuere ullamcorper. Quisque laoreet scelerisque eros, id malesuada turpis mattis in. Phasellus sed felis hendrerit, interdum sem nec, accumsan nisl. Ut varius non ipsum nec elementum. Nam porttitor feugiat sapien in mollis. Nunc non pharetra purus, id bibendum massa.
			</section>
		</main>
	);
}