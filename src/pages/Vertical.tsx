import React from 'react';
import VerticalHeader from "../components/VerticalHeader/VerticalHeader";
import Contents from "../components/common/Contents";

export default function Vertical() {
	return (
		<div className="page">
			<h3>Vertical Header</h3>
			<section>
				<VerticalHeader />
				<Contents />
			</section>
		</div>
	);
}