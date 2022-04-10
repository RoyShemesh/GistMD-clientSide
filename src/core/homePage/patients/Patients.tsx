import React, { useEffect, useState } from 'react';
import EachPatient from './EachPatient';
import axios from 'axios';
import { BASEURL } from '../../../utils/config';
import { Patient } from '../../../utils/interface';

export default function Patients() {
	const [patients, setPatients] = useState<Patient[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const fetchedPatients = await axios.get(`${BASEURL}/patients/getAll`);
			setPatients(fetchedPatients.data);
			return fetchedPatients;
		};
		try {
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, []);
	return (
		<div className="flex flex-col mt-20 md:flex-wrap md:flex-row  justify-center items-center ">
			{patients.map((patient) => (
				<EachPatient
					age={patient.age}
					gender={patient.gender}
					language={patient.language}
					surgeryName={patient.surgeryName}
				/>
			))}
		</div>
	);
}
