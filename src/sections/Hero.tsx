import Image from 'next/image';
import memojiImage from '../assets/images/memoji-computer.png';

import ArrowDown from '../assets/icons/arrow-down.svg';
import { RingCircle } from '@/components/ringCircle/RingCircle';

export const HeroSection = () => {
	return (
		<div className='py-32 md:py-48 lg:py-55 relative z-0 overflow-x-clip [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
			<RingCircle />

			<div>
				<div className='flex flex-col items-center'>
					<Image
						className='size-[100px]'
						src={memojiImage}
						alt='Person peeking behind laptop'
					/>
					<div className='hero-top-section'>
						<div className='bg-green-500 size-2.5 rounded-full'></div>
						<div>
							<p className='text-sm font-medium'>Available for new challenges</p>
						</div>
					</div>
				</div>
				<div>
					<div className='max-w-lg mx-auto'>
						<h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide '>
							Making Digital Experiences Great
						</h1>
						<p className='text-center mt-4 text-white/60 md:text-lg'>
							Welcome to my page! I am a software Front-End engineer based in the Brazil. Innovative
							front-end solutions driving outstanding user engagement and exceptional performance.
						</p>
					</div>
					<div className='flex flex-col md:flex-row justify-center items-center gap-4'>
						<button className='hero-button border-white/25'>
							<span className='font-semibold'>Explore My Work</span>
							<ArrowDown className='size-4 ' />
						</button>
						<button className='hero-button border-white bg-white text-gray-900'>
							<span>👋</span>
							<span className='font-semibold'>Let&apos;s Connect</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
