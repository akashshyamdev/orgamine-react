import React from 'react';
import { Link } from 'react-router-dom';
import './scss/main.scss';
import logo from './assets/svg/logo.svg';

export default function Nav({ isHero }) {
	return (
		<nav className="nav">
			<img src={logo} alt="Logo" className="nav__logo" />

			<div className="nav__links">
				<li className="nav__item">
					<Link className="nav__link" to="/">
						Home
					</Link>
				</li>
				<li className="nav__item">
					<Link className="nav__link" to="/about">
						About
					</Link>
				</li>
				<li className="nav__item">
					<Link to="/products" className="nav__link">
						Products
					</Link>
				</li>
				<li className="nav__item">
					<Link to="/contact" className="nav__link">
						Contacts
					</Link>
				</li>
			</div>
		</nav>
	);
}
