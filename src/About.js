import React from 'react';
import Initiatives from './Initiatives';
import Quote from './Quote';

export default function About() {
	return (
		<main className="main--about">
			<h2 className="heading-secondary text-primary text-center mt-2">About Orgamine</h2>
			<hr className="hr--long m-1" />

			<div className="quote__container mt-3">
				<Quote
					primary={false}
					text="We are manufacturers of bulk drugs (Active Pharmaceutical Ingredients) with a focus on generic drugs in the anti-epileptic segment."
				/>

				<Quote
					primary={true}
					text="The company has moved from strength to strength, first establishing a reliable manufacturing design and then on business development."
				/>

				<Quote
					primary={false}
					text="Consistency of Quality and Reliability in Delivery have been the core principles adopted in every operation of the company."
				/>

				<Quote
					primary={true}
					text="These are a result of strict adherence to quality control, pollution control and manufacturing process standards."
				/>
			</div>

			<Initiatives />
		</main>
	);
}
