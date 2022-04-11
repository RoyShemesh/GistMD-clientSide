import React, { useState } from 'react';
import { Patient } from '../../utils/interface';
import NewPatientModal from './newPatientModal/NewPatientModal';
import Patients from './patients/Patients';
import WhoAmI from './WhoAmI/WhoAmI';

export default function HomePage() {
	const [modal, setModal] = useState<boolean>(false);
	const [patients, setPatients] = useState<Patient[]>([]);
	return (
		<div>
			{modal ? (
				<NewPatientModal setModal={setModal} setPatients={setPatients} patients={patients} />
			) : (
				''
			)}
			<Patients setModal={setModal} patients={patients} setPatients={setPatients} />
			<WhoAmI />
		</div>
	);
}
