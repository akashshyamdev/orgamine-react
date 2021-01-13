import React from 'react';
import logo from './assets/svg/logo.svg';
import { Link } from 'react-router-dom';
import './scss/main.scss';

export default function Nav() {
	const primary = '#ff755f';
	const navLinkClassName = `nav__link nav__link--primary`;

	return (
		<nav className="nav" style={{ background: '#FDF1EF' }}>
			<img src={logo} alt="Logo" className="nav__logo" />

			<div className="nav__links nav__links--normal">
				<li className="nav__item">
					<Link className={navLinkClassName} to="/" style={{ color: primary }}>
						Home
					</Link>
				</li>
				<li className="nav__item">
					<Link className={navLinkClassName} to="/about" style={{ color: primary }}>
						About
					</Link>
				</li>
				<li className="nav__item">
					<Link to="/products" className={navLinkClassName} style={{ color: primary }}>
						Products
					</Link>
				</li>
				<li className="nav__item">
					<Link to="/contact" className={navLinkClassName} style={{ color: primary }}>
						Contacts
					</Link>
				</li>
			</div>
		</nav>
	);
}
