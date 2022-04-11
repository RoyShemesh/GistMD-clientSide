import React, { SetStateAction, useEffect } from 'react';

export default function EachQueryDrop({ name, setState, dropDownOptions, i, totalQuery }: Props) {
	useEffect(() => {
		setState(dropDownOptions[0]);
	}, []);
	return (
		<div className="flex flex-col -mx-3">
			<div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
				<div
					className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
					style={{ width: `${(i / totalQuery) * 100}%` }}
				>
					{i} of {totalQuery}
				</div>
			</div>
			<div className="w-full px-3 mb-5">
				<label htmlFor="" className="text-xs font-semibold px-1">
					Choose {name}
				</label>
				<div className="flex">
					<select
						className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline "
						name="dropDown"
						id=""
						onChange={(e) => {
							setState(e.target.value);
						}}
					>
						{dropDownOptions.map((option) => (
							<option value={option}>{option}</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
}

interface Props {
	name: string;
	setState: SetStateAction<any>;
	dropDownOptions: string[];
	i: number;
	totalQuery: number;
}
