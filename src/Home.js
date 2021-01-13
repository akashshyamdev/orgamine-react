import React from 'react';
import { Link } from 'react-router-dom';
import './scss/main.scss';
import backgroundImage from './assets/svg/hero-bg.svg';

function Home() {
	return (
		<main>
			<section className="section section--hero">
				<div className="section__content">
					<h1 className="heading-primary">Orgamine Chemicals(I) Pvt. LTD.</h1>

					<h4 className="heading-quaternary">
						We were incorporated for the manufacture of Intermediates and Specialty Chemicals. We
						are presently manufacturing a large range of Bulk Activities, Intermediates & Specialty
						chemicals.
					</h4>

					<div className="section__buttons mt-4">
						<Link to="/about" className="btn btn--pill btn--filled mr-4">
							About
						</Link>
						<Link to="/products" className="btn btn--pill btn--bordered">
							Products
						</Link>
					</div>
				</div>

				<div className="section__visual">
					<img src={backgroundImage} alt="Background SVG" className="section__image" />
				</div>
			</section>
		</main>
	);
}

export default Home;
