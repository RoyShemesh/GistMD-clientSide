/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import { BASEURL } from '../../../utils/config';
import CloseSign from './CloseSign';
import EachQueryDrop from './EachQueryDrop';
import EachQueryText from './EachQueryText';
import validator from 'validator';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Patient } from '../../../utils/interface';

export default function Login({ setModal, setPatients, patients }: Props) {
	const [age, setAge] = useState('');
	const [language, setLanguage] = useState('');
	const [gender, setGender] = useState('');
	const [surgeryName, setSurgeryName] = useState('');
	const [count, setCount] = useState(0);
	const notyf = new Notyf();
	const queryArr = [
		{ name: 'Age', state: age, setState: setAge },
		{ name: 'Gender', state: gender, setState: setGender, dropDownOptions: ['Male', 'Female'] },
		{ name: 'Surgery name', state: surgeryName, setState: setSurgeryName },
		{
			name: 'Language',
			state: language,
			setState: setLanguage,
			dropDownOptions: ['Hebrew', 'Arabic', 'English'],
		},
	];
	const addPatient = async () => {
		try {
			if (!age || !language || !gender || !surgeryName) throw new Error('Fill all data');
			const { data } = await axios.put(`${BASEURL}/patients/newPatient`, {
				age,
				language,
				gender,
				surgeryName,
			});
			setModal(false);
			setPatients([...patients, data]);
		} catch (error) {
			notyf.error('Fill all data');
		}
	};
	return (
		<div>
			<div className="justify-center bg-opacity-30  bg-gray-400  items-center flex  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="animate-fade-out-div relative w-auto  my-6 mx-auto max-w-3xl ">
					<CloseSign setModal={setModal} />
					<div className="max-w-5xl bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
						<div className="md:flex w-full">
							<div className="w-full  py-10 px-5 md:px-10">
								<div className="text-center mb-10">
									<h1 className="font-bold text-3xl text-gray-900">New Patient</h1>
								</div>
								{queryArr[count].dropDownOptions ? (
									<EachQueryDrop
										name={queryArr[count].name}
										setState={queryArr[count].setState}
										dropDownOptions={queryArr[count].dropDownOptions as string[]}
										i={count + 1}
										totalQuery={queryArr.length}
									/>
								) : (
									<EachQueryText
										name={queryArr[count].name}
										setState={queryArr[count].setState}
										i={count + 1}
										totalQuery={queryArr.length}
									/>
								)}

								<div className="flex flex-col items-center -mx-3">
									<div className="w-full px-3 mb-5">
										{count !== queryArr.length - 1 ? (
											<button
												onClick={() => {
													if (queryArr[count].state === '') notyf.error('Please fill the field');
													else if (
														!validator.isNumeric(queryArr[count].state) &&
														queryArr[count].name === 'Age'
													)
														notyf.error('Please fill only numbers');
													else setCount((count) => count + 1);
												}}
												className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
											>
												Next
											</button>
										) : (
											<button
												onClick={() => {
													addPatient();
												}}
												className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
											>
												Add patient
											</button>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

interface Props {
	setModal: (Modal: boolean) => void;
	setPatients: (Patients: Patient[]) => void;
	patients: Patient[];
}
