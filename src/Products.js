import React from 'react';
import Table from './Table';

export default function Products() {
	return (
		<main
			className="main--bg-light main--products d-flex flex-column align-items-center pt-2"
			style={{ background: '#FDF1EF', marginBottom: '1px' }}
		>
			<h2 className="heading-secondary text-primary text-center">Products</h2>
			<h4 className="heading-quaternary text-center">
				Active Pharma Ingredients and Drug Intermediates
			</h4>
			<hr className="hr--long m-1" />

			<Table showExtra={true} />
			<Table showExtra={false} />
		</main>
	);
}
