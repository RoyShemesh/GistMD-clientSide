import React from 'react';
import { Patient } from '../../../utils/interface';
import Label from './Label';

export default function EachPatient({ patient, deletePatient }: Props) {
	return (
		<div className="ticket my-2 mx-10 md:max-h-64  max-w-md  p-6 flex-col flex items-end  bg-white rounded-lg shadow-xl">
			<button
				onClick={() => deletePatient(patient._id)}
				className="font-semibold text-xs hover:bg-rose-700 hover:text-white border-rose-700  text-rose-700 border-2 py-1 px-2 rounded "
			>
				Del
			</button>
			<div className="ml-6 pt-1 flex-col ">
				<h4 className="text-2xl font-thin text-gray-900">{patient.age} years old</h4>
				<h4 className="text-2xl font-thin text-gray-900">Gender: {patient.gender}</h4>
				<p className="text-lg font-thin font-semibold text-blue-400">{patient.surgeryName}</p>
				<div className="flex justify-end pt-2">
					<Label language={patient.language} />
				</div>
			</div>{' '}
		</div>
	);
}

interface Props {
	patient: Patient;
	deletePatient: (_id: string) => void;
}
