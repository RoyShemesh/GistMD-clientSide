import React from 'react';
import Patients from './patients/Patients';
import WhoAmI from './WhoAmI/WhoAmI';

export default function HomePage() {
	return (
		<div>
			<Patients />
			<WhoAmI />
		</div>
	);
}
