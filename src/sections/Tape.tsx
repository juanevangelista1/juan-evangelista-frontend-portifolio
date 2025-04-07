import StarIcon from '@/assets/icons/star.svg';
import { Fragment } from 'react';

const words = [
	'Frontend',
	'JavaScript',
	'jQuery',
	'Typescript',
	'React.js',
	'Next.js',
	'Team Player',
	'Efficient',
	'Proactive',
	'Resilient',
	'Problem-solving',
	'Real impact',
	'Fast learner',
	'Adaptable',
	'Creative',
	'Innovative',
	'Passionate',
];

export const TapeSection = () => {
	return (
		<div className='py-16 lg:py-24 overflow-x-clip'>
			<div className='bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1'>
				<div className='flex px-1 justify-center mask-image'>
					<div className='flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:35s]'>
						{[...new Array(2)].fill(0).map((_, index) => (
							<Fragment key={index}>
								{words.map((word) => (
									<div
										className='inline-flex gap-4 items-center '
										key={word}>
										<span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
										<StarIcon className='size-6 text-gray-900 -rotate-12' />
									</div>
								))}
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
