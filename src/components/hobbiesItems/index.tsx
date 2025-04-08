import { TechIcon } from '@/components/techIcon/techIcon';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

const hobbies = [
	{
		title: 'Traveling',
		emoji: '🏝️',
	},
	{
		title: 'Play Soccer',
		emoji: '⚽',
	},
	{
		title: 'Go to Soccer Stadium',
		emoji: '🏟️ ⚽',
	},

	{
		title: 'Nature',
		emoji: '🌳',
	},

	{
		title: 'Exercises',
		emoji: '🏋️‍♂️',
	},
	{
		title: 'Gaming',
		emoji: '🕹️',
	},
	{
		title: 'Netflix',
		emoji: '📺',
	},
	{
		title: 'Music',
		emoji: '🎵',
	},
	{
		title: 'Go to the Beach',
		emoji: '🏖️',
	},
];

export function HobbiesItems({
	className,
	itemsWrapperClassName,
}: {
	className?: string;
	itemsWrapperClassName?: string;
}) {
	return (
		<div className={twMerge('flex mask-image', className)}>
			<div className={twMerge('flex flex-none py-0.5 gap-6 pr-6', itemsWrapperClassName)}>
				{[...new Array(2)].fill(0).map((_, index) => (
					<Fragment key={index}>
						{hobbies.map((hobby: any) => (
							<div
								className=' bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg'
								key={hobby.title}>
								<span className='font-medium text-gray-950'>{hobby.title}</span>
								<span className=''>{hobby.emoji}</span>
							</div>
						))}
					</Fragment>
				))}
			</div>
		</div>
	);
}
