'use client';
import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png';
import { SectionHeader } from '@/components/sectionHeader/sectionHeader';
import Image from 'next/image';
import { Cards } from '@/components/cards/cards';
import { Fragment } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
	{
		name: 'Clemerson Costa',
		position: 'Full Front-end Developer at Global System | React | E-commerce | VTEX',
		text:
			"I recommend Juan for his commitment to his work and to the business. He's a great team partner and communicates well. He's a calm professional when faced with problems. In addition, I can assure you that Juan has a leap ahead of other junior developers, because despite his seniority, at Take Off On Innovation he has always been exposed to more complex problems, and he has always done very well.",
		avatar: memojiAvatar1,
	},
	{
		name: 'Gustavo Santos',
		position: 'Full Stack Developer at Ideatech Softwares',
		text:
			'I studied with Juan and have followed his progress in technology ever since. He is a highly competent front-end developer, proficient in JavaScript, TypeScript, React.js and Next.js. His focus on performance and SEO is a differentiator that adds a lot of value to projects. I recommend Juan as a dedicated, technical professional who is always looking for the best solutions.',
		avatar: memojiAvatar5,
	},
	{
		name: 'Guilherme Santos',
		position: 'Senior Javascript Developer at Lello Imóveis',
		text:
			'Juan is dedicated and resilient, facing challenges with determination. We worked together improving SEO through web development for one of the largest real estate companies in the state of São Paulo. Juan treats everyone with sympathy and empathy, and stands out for solving problems with speed and transparency. I would recommend Juan without hesitation, a valuable resource for any institution.',
		avatar: memojiAvatar3,
	},
	{
		name: 'Thiago Mariano',
		position: 'Full Stack Engineer',
		text:
			'I had the privilege of meeting Juan Evangelista Nascimento, where his technical ability and commitment stood out. He is a highly skilled Front-End Software Engineer, with deep expertise in JavaScript, TypeScript, React.js and Next.js. In addition to his technical skills, he is collaborative, proactive and always willing to share knowledge. Meeting Juan was an extremely enriching experience, and I highly recommend him to any team or project seeking excellence in front-end development.',
		avatar: memojiAvatar5,
	},
];

export const TestimonialsSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className='py-16 lg:py-24 '>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className='container'>
				<SectionHeader
					eyebrow='Recommendations'
					title='What my Collegues say about me:'
					description='Find out what my colleagues say about me and my work'
				/>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className='mt-12 lg:mt-20 flex overflow-x-clip mask-image py-4 -my-4'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className='flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]'>
						{[...new Array(2)].fill(0).map((_, index) => (
							<Fragment key={index}>
								{testimonials.map((testimonial) => (
									<Cards
										key={testimonial.name}
										className='max-w-xs md:p-8 md:max-w-md transform transition-transform duration-300 ease-in-out hover:scale-105'>
										<motion.div
											initial={{ opacity: 0, y: 30 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 1 }}
											className='flex gap-4 items-center'>
											<motion.div
												initial={{ opacity: 0, y: 30 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 1 }}
												className='size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0'>
												<Image
													src={testimonial.avatar}
													alt={`${testimonial.name}'s avatar`}
													className='max-h-full'
												/>
											</motion.div>
											<motion.div
												initial={{ opacity: 0, y: 30 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 1 }}
												className=''>
												<h3 className='text-lg font-semibold text-white'>{testimonial.name}</h3>
												<p className='text-sm text-white/40'>{testimonial.position}</p>
											</motion.div>
										</motion.div>
										<p className='mt-4 md:mt-6 md:text-base text-sm text-gray-300'>{testimonial.text}</p>
									</Cards>
								))}
							</Fragment>
						))}
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};
