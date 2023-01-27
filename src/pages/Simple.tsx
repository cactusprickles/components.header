import React from 'react';
import SimpleHeader from "../components/SimpleHeader/SimpleHeader";
import Contents from "../components/common/Contents";

export default function Simple() {
	return (
		<div className="page">
			<h3>Simple Header</h3>
			<section>
				<SimpleHeader />
				<Contents />
			</section>
		</div>
	);
}