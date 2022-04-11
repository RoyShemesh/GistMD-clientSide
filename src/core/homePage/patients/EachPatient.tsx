import React from 'react';
import { Patient } from '../../../utils/interface';
import Label from './Label';

export default function EachPatient({ age, gender, surgeryName, language }: Patient) {
	return (
		<div className="ticket my-2 mx-10 md:max-h-64  max-w-md  p-6 flex-col flex items-end  bg-white rounded-lg shadow-xl">
			{/* <button
				// onClick={() => props.clickHide(props.id)}
				className="font-semibold text-xs hover:bg-gray-500 hover:text-white border-gray-500 border-2 py-1 px-2 rounded "
			>
				hide
			</button> */}
			<div className="ml-6 pt-1 flex-col ">
				<h4 className="text-2xl font-thin text-gray-900">{age} years old</h4>
				<h4 className="text-2xl font-thin text-gray-900">Gender: {gender}</h4>
				<p className="text-lg font-thin font-semibold text-blue-400">{surgeryName}</p>
				<div className="flex justify-end pt-2">
					{/* {props.labels !== undefined
						? props.labels.map((label) => <Label key={label} value={label} />)
						: null} */}
					<Label language={language} />
				</div>
			</div>{' '}
		</div>
	);
}
