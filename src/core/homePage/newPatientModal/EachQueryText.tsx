import React, { SetStateAction } from 'react';

export default function EachQuery({ name, setState, i, totalQuery }: Props) {
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
					{name}
				</label>
				<div className="flex">
					<div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
						<i className="mdi mdi-email-outline text-gray-400 text-lg" />
					</div>
					<input
						type="text"
						defaultValue={''}
						className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
						placeholder=""
						onChange={(e) => {
							setState(e.target.value);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

interface Props {
	name: string;
	setState: SetStateAction<any>;
	i: number;
	totalQuery: number;
}
