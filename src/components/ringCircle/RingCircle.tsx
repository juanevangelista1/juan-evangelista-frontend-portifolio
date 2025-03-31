import grainImage from '@/assets/images/grain.jpg';
import { HeroOrbit } from '../heroOrbit/HeroOrbit';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';

export function RingCircle() {
	return (
		<>
			<div
				className='absolute inset-0 -z-30 opacity-5'
				style={{ backgroundImage: `url(${grainImage.src})` }}></div>
			<div className='size-[620px] hero-circle'></div>
			<div className='size-[820px] hero-circle'></div>
			<div className='size-[1020px] hero-circle'></div>
			<div className='size-[1220px] hero-circle'></div>
			<div className='size-[1420px] hero-circle'></div>
			<div className='size-[1620px] hero-circle'></div>

			<HeroOrbit
				size={800}
				rotation={-72}>
				<StarIcon className='size-28 text-emerald-300' />
			</HeroOrbit>
			<HeroOrbit
				size={550}
				rotation={20}>
				<StarIcon className='size-12 text-emerald-300' />
			</HeroOrbit>
			<HeroOrbit
				size={590}
				rotation={98}>
				<StarIcon className='size-8 text-emerald-300' />
			</HeroOrbit>
			<HeroOrbit
				size={590}
				rotation={200}>
				<StarIcon className='size-4 text-emerald-300' />
			</HeroOrbit>

			<HeroOrbit
				size={430}
				rotation={-14}>
				<SparkleIcon className='size-8 text-emerald-300/20' />
			</HeroOrbit>
			<HeroOrbit
				size={440}
				rotation={79}>
				<SparkleIcon className='size-5 text-emerald-300/20' />
			</HeroOrbit>
			<HeroOrbit
				size={530}
				rotation={178}>
				<SparkleIcon className='size-10 text-emerald-300/20' />
			</HeroOrbit>
			<HeroOrbit
				size={710}
				rotation={144}>
				<SparkleIcon className='size-14 text-emerald-300/20' />
			</HeroOrbit>
		</>
	);
}
