import React, { useEffect, useState } from 'react';
import EachPatient from './EachPatient';
import axios from 'axios';
import { BASEURL } from '../../../utils/config';
import { Patient } from '../../../utils/interface';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
export default function Patients({ setModal, setPatients, patients }: Props) {
	useEffect(() => {
		const fetchData = async () => {
			const fetchedPatients = await axios.get(`${BASEURL}/patients/getAll`);
			setPatients(fetchedPatients.data);
			return fetchedPatients;
		};
		try {
			fetchData();
		} catch (error) {
			const notyf = new Notyf();
			notyf.error('Error occured');
		}
	}, []);

	const deletePatient = async (_id: string) => {
		try {
			await axios.delete(`${BASEURL}/patients`, { data: { patientId: _id } });
			setPatients(patients.filter((patient) => patient._id !== _id));
		} catch (error) {
			const notyf = new Notyf();
			notyf.error('Error occured');
		}
	};
	return (
		<div className="flex flex-col mt-20 md:items-center ">
			<button
				className="m-2 text-lg font-thin transition md:w-1/4 ease-in-out duration-150 shadow bg-blue-400 md:transform hover:scale-110  focus:outline-none text-white  py-2 px-4 rounded"
				type="button"
				onClick={() => {
					setModal(true);
				}}
			>
				Enter new patient
			</button>
			<div className="flex flex-col md:flex-wrap md:flex-row  justify-center items-center ">
				{patients.map((patient) => (
					<EachPatient key={patient._id} patient={patient} deletePatient={deletePatient} />
				))}
			</div>
		</div>
	);
}

interface Props {
	setModal: (Modal: boolean) => void;
	setPatients: (Patients: Patient[]) => void;
	patients: Patient[];
}
