import React from 'react';

export default function Label({ language }: Props) {
	return (
		<div className="label font-thin bg-white mx-1 border-blue-400 border-2 text-blue-400  py-1 px-2 rounded w-max justify-end">
			{language}
		</div>
	);
}
interface Props {
	language: string;
}
