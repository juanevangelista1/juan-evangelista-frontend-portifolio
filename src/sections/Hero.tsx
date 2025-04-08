'use client';
import Image from 'next/image';
import memojiImage from '../assets/images/memoji-computer.png';

import { useTypewriter } from 'nextjs-simple-typewriter';
import ArrowDown from '../assets/icons/arrow-down.svg';
import { RingCircle } from '@/components/ringCircle/RingCircle';
import React from 'react';

export const HeroSection = () => {
	const [text] = useTypewriter({
		words: [
			'Juan Evangelista FrontEnd Engineer',
			'Specialist in JavaScript',
			'Specialist in TypeScript',
			'Specialist in React.js',
			'Specialist in Next.js',
			'Specialist in SEO',
			'Performance Optimization',
			'Making Digital Experiences Great!',
		],
		loop: 0,
		typeSpeed: 90,
		deleteSpeed: 55,
		delaySpeed: 2000,
	});
	return (
		<div className='py-32 md:py-48 lg:py-55 relative z-0 overflow-x-clip [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] '>
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
						<h1 className='font-serif text-3xl md:text-5xl text-center mt-4 mb-8 tracking-wide lg:h-[100px] md:h-[100px] h-[65px]'>
							{text}
						</h1>
						<p className='text-center mt-6 text-white/60 md:text-lg'>
							Welcome to my page! My name is{' '}
							<span className='text-gradients-blue-to-green capitalize font-semibold'>
								Juan Evangelista
							</span>{' '}
							and I am a{' '}
							<span className='text-gradients-blue-to-green capitalize font-semibold'>
								Front-End engineer{' '}
							</span>
							from Brazil. Explore a little about me, my work, and how I can help your team grow!
						</p>
					</div>
					<div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-2 '>
						<a
							href='#projects'
							className='hero-button border-white/25
                              hover:bg-white/90 hover:text-gray-900
                              transition-all duration-300 flex items-center gap-2 '>
							<span className='font-semibold'>Explore My Work</span>
							<ArrowDown className='size-4' />
						</a>

						<a
							href='https://www.linkedin.com/in/juan-evangelista-desenvolvedor/'
							target='_blank'
							rel='noopener noreferrer'>
							<button
								className='hero-button border-white/90 bg-white text-gray-900 cursor-pointer
               hover:bg-gray-900 hover:text-white transition-all duration-300 '>
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
