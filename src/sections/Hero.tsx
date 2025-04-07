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
						<div className='bg-green-500 size-2.5 rounded-full relative'>
							<div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large '></div>
						</div>
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
						<a
							href='#projects'
							className='hero-button border-white/25
                              hover:bg-white/90 hover:text-gray-900
                              transition-all duration-300 flex items-center gap-2'>
							<span className='font-semibold'>Explore My Work</span>
							<ArrowDown className='size-4' />
						</a>

						<a
							href='https://www.linkedin.com/in/juan-evangelista-desenvolvedor/'
							target='_blank'
							rel='noopener noreferrer'>
							<button
								className='hero-button border-white/90 bg-white text-gray-900 cursor-pointer
               hover:bg-gray-900 hover:text-white transition-all duration-300 scroll-smooth'>
								<span>👋</span>
								<span className='font-semibold'>Let’s Connect</span>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
