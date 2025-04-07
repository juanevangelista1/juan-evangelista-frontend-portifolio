import grainImage from '@/assets/images/grain.jpg';
import { HeroOrbit } from '../heroOrbit/HeroOrbit';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';

export function RingCircle() {
	return (
		<section className=''>
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
				size={300}
				rotation={50}
				shouldOrbit
				orbitDuration='28s'
				shouldSpin
				spinDuration='10s'>
				<StarIcon className='size-4 text-emerald-300' />
			</HeroOrbit>
			<HeroOrbit
				size={430}
				rotation={-14}
				shouldOrbit
				orbitDuration='30s'
				shouldSpin
				spinDuration='10s'>
				<SparkleIcon className='size-8 text-emerald-300/20' />
			</HeroOrbit>
			<HeroOrbit
				size={440}
				rotation={79}
				shouldOrbit
				orbitDuration='32s'
				shouldSpin
				spinDuration='10s'>
				<SparkleIcon className='size-5 text-emerald-300/20' />
			</HeroOrbit>
			<HeroOrbit
				size={530}
				rotation={178}
				shouldOrbit
				orbitDuration='34s'
				shouldSpin
				spinDuration='10s'>
				<SparkleIcon className='size-10 text-emerald-300/20' />
			</HeroOrbit>
			<HeroOrbit
				size={590}
				rotation={98}
				shouldOrbit
				orbitDuration='38s'
				shouldSpin
				spinDuration='10s'>
				<StarIcon className='size-8 text-emerald-300' />
			</HeroOrbit>

			<HeroOrbit
				size={650}
				rotation={-5}
				shouldOrbit
				orbitDuration='42s'
				shouldSpin
				spinDuration='10s'>
				<StarIcon className='size-4 text-emerald-300' />
			</HeroOrbit>
			<HeroOrbit
				size={710}
				rotation={144}
				shouldOrbit
				orbitDuration='44s'
				shouldSpin
				spinDuration='10s'>
				<SparkleIcon className='size-14 text-emerald-300/20' />
			</HeroOrbit>
			<HeroOrbit
				size={720}
				rotation={85}
				shouldOrbit
				orbitDuration='46s'
				shouldSpin
				spinDuration='12s'>
				<SparkleIcon className='size-14 text-emerald-300/20' />
			</HeroOrbit>

			<HeroOrbit
				size={800}
				rotation={-72}
				shouldOrbit
				orbitDuration='48s'
				shouldSpin
				spinDuration='10s'>
				<StarIcon className='size-28 text-emerald-300' />
			</HeroOrbit>
		</section>
	);
}
