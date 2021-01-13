import React from 'react';

export default function Contact() {
	return (
		<main className="main--contact">
			<div className="heading__content pt-3 pl-4 pb-4">
				<h2 className="heading-secondary mb-1 text-primary">Get In Touch</h2>
				<hr className="hr my-0" />
			</div>

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2569.227721949103!2d73.10051958977982!3d19.2046996597336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79584d2ecf081%3A0xa01bedd448e19afd!2sPhase%20II%2C%20Ganesh%20Nagar%2C%20MIDC%2C%20Dombivli%20East%2C%20Dombivli%2C%20Maharashtra%20421203!5e0!3m2!1sen!2sin!4v1608293997212!5m2!1sen!2sin"
				allowfullscreen=""
				aria-hidden="false"
				tabindex="0"
				id="js--map-box"
				className="map-box"
				title="map"
			></iframe>

			<div className="contact-bg">
				<h3 className="heading-tertiary mt-2" style={{ marginLeft: '3.6rem' }}>
					Contact Form
				</h3>

				<form className="form" id="js--contact-form">
					<div className="form__group">
						<label for="name" className="form__label">
							Name
						</label>
						<input
							type="text"
							className="form__input"
							placeholder="Your name"
							id="js--contact-form-name"
							name="name"
						/>
						<label for="js--contact-form-name" className="form__label form__label--inner">
							<i className="fas fa-user-alt"></i>
						</label>
					</div>

					<div className="form__group mt-2">
						<label for="email" className="form__label">
							Email
						</label>
						<input
							type="email"
							className="form__input"
							placeholder="Your email"
							id="email"
							name="email"
						/>
						<label for="email" className="form__label form__label--inner">
							<i className="fas fa-envelope"></i>
						</label>
					</div>

					<div className="form__group mt-2">
						<label for="phone" className="form__label">
							Phone
						</label>

						<label for="phone" className="form__label form__label--inner">
							<i className="fas fa-phone"></i>
						</label>

						<input
							type="tel"
							className="form__input"
							placeholder="Your phone"
							id="phone"
							name="phone"
						/>
					</div>

					<div className="form__group mt-2">
						<label for="message" className="form__label">
							Message Me
						</label>

						<label for="message" className="form__label form__label--inner">
							<i className="far fa-comments"></i>
						</label>

						<input
							name="message"
							id="message"
							type="text"
							className="form__input"
							placeholder="Your message"
						></input>
					</div>

					<button type="submit" className="form__submit mt-3">
						Send Message &nbsp; &mdash;
					</button>
				</form>
			</div>
		</main>
	);
}
