import StarIcon from '@/assets/icons/star.svg';

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
];

export const TapeSection = () => {
	return (
		<div className='py-16 lg:py-24'>
			<div className='bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 mask-image'>
				<div className='flex px-1 justify-center'>
					<div className='flex flex-none gap-4 py-3 '>
						{words.map((word) => (
							<div
								className='inline-flex gap-4 items-center '
								key={word}>
								<span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
								<StarIcon className='size-3.5 text-gray-900 -rotate-12' />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
