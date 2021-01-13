import React from 'react';

export default function Initiatives() {
	return (
		<div className="initiatives mt-3 mb-3">
			<div className="initiatives__heading float-left">Some of our current initiatives are -</div>
			<div className="initiatives__pt1">
				<h4
					className="heading-quaternary text-primary m-0 mb-1"
					style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}
				>
					1. CGMP Compliance
				</h4>
				<hr className="hr m-0" />
				<p className="lead">
					With the revised Schedule M guidelines released by the Food & Drug Administration of
					India, a project to ensure compliance with them is currently under way. This mega project
					has been undertaken to ensure that every precaution and guideline for quality control is
					maintained and complied with.
				</p>
			</div>

			<p
				className="lead text-primary initiatives__sub-heading"
				style={{ fontWeight: 600, fontFamily: 'Montserrat', marginTop: '0px' }}
			>
				The company has undertaken a comprehensive overhaul of the manufacturing plant with focus
				on:
			</p>

			<p className="initiatives__features mt-2">
				<i class="fas fa-warehouse"></i> &nbsp;&nbsp; Warehousing and storage areas
			</p>
			<p className="initiatives__features">
				<i class="fas fa-industry"></i> &nbsp; &nbsp; Plant design to conform revised norms
			</p>
			<p className="initiatives__features">
				<i class="fas fa-cogs"></i> &nbsp;&nbsp; Air and water handling systems
			</p>
			<p className="initiatives__features">
				<i class="fas fa-smog"></i> &nbsp;&nbsp; Pollution and effluent control
			</p>
			<p className="initiatives__features">
				<i class="fas fa-book-open"></i> &nbsp;&nbsp; Documentation on product analysis to evolve
				the final drug master file With stability studies, impurity profiling and residual solvent
				analysis
			</p>

			<h4
				className="heading-quaternary text-primary m-0 mb-1 mt-3"
				style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}
			>
				2. Product Development
			</h4>

			<p className="lead">
				Since inception, the company has been focusing on Phenytoin and its sodium salt which is
				widely used as a first generation anti-epileptic.Other opportunities being pursued by the
				product development division include newer anti-epileptic drugs including Sodium Valproate,
				Carbamazepine, Gabapentin.
			</p>
		</div>
	);
}
