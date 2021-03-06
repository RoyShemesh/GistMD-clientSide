import React from 'react';

export default function CloseSign({ setModal }: Props) {
	return (
		<div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out">
			<button
				type="button"
				onClick={() => {
					setModal(false);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					aria-label="Close"
					className="icon icon-tabler icon-tabler-x"
					width={20}
					height={20}
					viewBox="0 0 24 24"
					strokeWidth="2.5"
					stroke="currentColor"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" />
					<line x1={18} y1={6} x2={6} y2={18} />
					<line x1={6} y1={6} x2={18} y2={18} />
				</svg>
			</button>
		</div>
	);
}

interface Props {
	setModal: (Modal: boolean) => void;
}
