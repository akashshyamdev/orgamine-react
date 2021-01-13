import React from 'react';

export default function Table({ showExtra }) {
	const showExtraInfoClass = `table__column table__column--2 table__column--heading ${
		!showExtra ? 'd-none' : ''
	}`;

	return (
		<div className="table mt-4">
			<div className="table__header">
				<p>TETRACAINE HYDROCHLORIDE</p>
				<p>PHENYTOIN SODIUM</p>
				<p>PHENYTOIN(BASE)</p>
				<p>GLIMEPIRIDE</p>
			</div>

			<div className="table__body">
				<div className="table__column table__column--1 table__column--heading">
					<p className="table__column-data">136-47-0</p>
					<p className="table__column-data">630-93-3</p>
					<p className="table__column-data">57-41-0</p>
					<p className="table__column-data">93479-97-1</p>
				</div>

				<div className={showExtraInfoClass}>
					<p className="table__column-data">
						<i className="far fa-times-circle table__cross"></i>
					</p>
					<p className="table__column-data">
						<i className="far fa-check-circle table__checkmark"></i>
					</p>
					<p className="table__column-data">
						<i className="far fa-check-circle table__checkmark"></i>
					</p>
					<p className="table__column-data">
						<i className="far fa-check-circle table__checkmark"></i>
					</p>
				</div>

				<div className={showExtraInfoClass}>
					<p className="table__column-data">
						<i className="far fa-check-circle table__checkmark"></i>
					</p>
					<p className="table__column-data">
						<i className="far fa-check-circle table__checkmark"></i>
					</p>
					<p className="table__column-data">
						<i className="far fa-check-circle table__checkmark"></i>
					</p>
					<p className="table__column-data">
						<i className="far fa-check-circle table__checkmark"></i>
					</p>
				</div>
				<div className={showExtraInfoClass}>
					<p className="table__column-data">
						<i className="far fa-check-circle table__checkmark"></i>
					</p>
					<p className="table__column-data">
						<i className="far fa-check-circle table__checkmark"></i>
					</p>
					<p className="table__column-data">
						<i className="far fa-check-circle table__checkmark"></i>
					</p>
					<p className="table__column-data">
						<i className="far fa-check-circle table__checkmark"></i>
					</p>
				</div>
			</div>
		</div>
	);
}
