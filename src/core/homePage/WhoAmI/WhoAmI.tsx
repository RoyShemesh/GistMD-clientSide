/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import RSPhoto from '../../../styles/img/myPhoto.jpg';

export default function WhoAmI() {
	return (
		<div className="max-w-screen-xl mt-10 font-thin px-4 mx-auto md:px-8 flex flex-col items-center">
			<div className="mb-10 md:mb-16">
				<h2
					id="WhoAmI"
					className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6"
				>
					Who am I?
				</h2>

				<p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
					Teamplayer, capable of forming strong bonds with people of all backgrounds whilst
					consistently performing as a team member. Quick and eager learner, striving to better
					myself on a professional and personal level.
				</p>
			</div>

			<div className="">
				<div className="p-4 shadow">
					<div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
						<img src={RSPhoto} alt="" className="object-cover object-center w-full h-full" />
					</div>

					<div className="flex flex-col items-center justify-center">
						<div className="font-bold text-indigo-500 md:text-lg">Roy Shemesh</div>
						<p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">Web Developer</p>

						<div className="flex">
							<div className="flex gap-4">
								<a href="https://www.linkedin.com/in/roy-shemesh/">
									<svg
										className="w-6 h-6 hover:text-blue-400 text-blue-500 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
									>
										<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
