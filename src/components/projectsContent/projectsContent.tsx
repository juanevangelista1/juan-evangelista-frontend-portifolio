'use client';
import { Cards } from '../cards/cards';
import AsicsImage from '@/assets/images/asics-brazil.png';
import LelloImage from '@/assets/images/lello-imoveis.png';
import ToDoAppImage from '@/assets/images/To-do-app.png';
import M3Image from '@/assets/images/M3.png';
import DTImage from '@/assets/images/dtBrasil.png';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const portfolioProjects = [
	{
		company: 'Asics',
		year: '2023',
		title: 'Asics Brazil, Chile and Colombia',
		results: [
			{ title: 'Maintenance and evolution of the site' },
			{ title: 'Improving performance by 40%' },
			{ title: 'Constant evolution to ensure a better user experience' },
		],
		link: 'https://www.asics.com.br',
		image: AsicsImage,
	},
	{
		company: 'Lello Imóveis',
		year: '2024',
		title: 'Front-End Engineer at Lello Imóveis',
		results: [
			{ title: 'Maintained and monitored the site' },
			{ title: 'Increased performance by 28%' },
			{ title: 'Increased SEO and search engine positioning' },
		],
		link: 'https://www.lelloimoveis.com.br/',
		image: LelloImage,
	},
	{
		company: 'M3 Digital Solutions',
		year: '2025',
		title: 'Front-End Engineer Partner at M3 Digital Solutions',
		results: [
			{ title: 'Maintained and monitored the site' },
			{ title: 'Evolution and refinement of layout using best practices' },
			{ title: 'Increased SEO and search engine positioning' },
		],
		link: 'https://www.m3solucoesdigitais.com/',
		image: M3Image,
	},
	{
		company: 'DT Brasil',
		year: '2025',
		title: 'Main Front-End Engineer at DT Brasil',
		results: [
			{ title: 'Responsible for layout and UI/UX design' },
			{ title: '360° project creation and development' },
			{ title: 'SEO evolution, maintenance, and optimization' },
		],
		link: 'https://www.dtbrasil.com.br/',
		image: DTImage,
	},
	{
		company: 'Pessoal Project',
		year: '2024',
		title: 'To Do App',
		results: [
			{ title: 'Personal project for daily activities' },
			{ title: 'Use of architecture best practices' },
			{ title: 'Project focus on daily productivity' },
		],
		link: 'https://to-do-app-roan-seven.vercel.app/',
		image: ToDoAppImage,
	},
];

export function ProjectsContent() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className='flex flex-col mt-10 md:mt-20 gap-20'>
			{portfolioProjects.map((project, projectIndex) => (
				<Cards
					className='card-projects-style pb-0 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky'
					key={project.title}
					style={{
						top: `calc(64px + ${projectIndex * 40}px)`,
					}}>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className='lg:grid lg:grid-cols-2 lg:gap-16 '>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							className='lg:pb-16'>
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1 }}
								className='text-gradients-blue-to-green inline-flex gap-2'>
								<span className='font-bold text-sm'>{project.company}</span>
								<span>&bull;</span>
								<span className='font-bold text-sm'>{project.year}</span>
							</motion.div>

							<h3 className='font-serif text-2xl mt-2 md:text-4xl md:mt-5'>{project.title}</h3>
							<hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
							<ul className='flex flex-col gap-4 mt-4 md:mt-5'>
								{project.results.map((result) => (
									<li
										key={result.title}
										className='flex items-center gap-2 text-sm md:text-base text-white/60'>
										<CheckCircleIcon className='size-5 md:size-6' />
										<span>{result.title}</span>
									</li>
								))}
							</ul>
							<a
								href={project.link}
								target='_blank'
								rel='noopener noreferrer'>
								<button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-gray-100 transition-all duration-300 '>
									<span>Visit Live Site</span>
									<ArrowUpRightIcon className='size-4 ' />
								</button>
							</a>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							className='relative'>
							<Image
								className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
								src={project.image}
								alt={project.title}
							/>
						</motion.div>
					</motion.div>
				</Cards>
			))}
		</motion.div>
	);
}
