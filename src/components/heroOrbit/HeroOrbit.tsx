import StarIcon from '@/assets/icons/star.svg';

export function HeroOrbit() {
	return (
		<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
			<div className='size-[800px] '>
				<div className='inline-flex '>
					<StarIcon className='size-28 text-emerald-300' />
				</div>
			</div>
		</div>
	);
}
