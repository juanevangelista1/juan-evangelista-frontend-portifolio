'use client';

import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowUpRight } from 'lucide-react';

import {
	SectionContainer,
	CarouselWrapper,
	ProjectCard,
	InfoContainer,
	Title,
	NavButton,
	GlowEffect,
	MetaTag,
	ResultsList,
	ActionButton,
} from './styles';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import AsicsImage from '@/assets/images/asics-brazil.png';
import LelloImage from '@/assets/images/lello-imoveis.png';
import ToDoAppImage from '@/assets/images/To-do-app.png';
import M3Image from '@/assets/images/M3.png';
import DTImage from '@/assets/images/dtBrasil.png';

const portfolioProjects = [
	{
		company: 'Asics',
		year: '2023',
		title: 'Asics Brazil, Chile and Colombia',
		results: [
			{ title: 'Maintenance and evolution of the site' },
			{ title: 'Improving performance by 40%' },
			{ title: 'Constant evolution' },
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
			{ title: 'Increased SEO' },
		],
		link: 'https://www.lelloimoveis.com.br/',
		image: LelloImage,
	},
	{
		company: 'M3 Digital Solutions',
		year: '2025',
		title: 'Partner at M3 Digital Solutions',
		results: [
			{ title: 'Evolution and refinement of layout' },
			{ title: 'Implementation of best practices' },
		],
		link: 'https://www.m3solucoesdigitais.com/',
		image: M3Image,
	},
	{
		company: 'DT Brasil',
		year: '2025',
		title: 'Front-End Engineer at DT Brasil',
		results: [
			{ title: '360° project creation and development' },
			{ title: 'SEO evolution and optimization' },
		],
		link: 'https://www.dtbrasil.com.br/',
		image: DTImage,
	},
	{
		company: 'Front-End Engineer Project',
		year: '2024',
		title: 'To Do App',
		results: [
			{ title: 'Personal project for daily activities' },
			{ title: 'Use of architecture best practices' },
		],
		link: 'https://to-do-app-roan-seven.vercel.app/',
		image: ToDoAppImage,
	},
];

export function ProjectsContent() {
	const swiperConfig = useMemo(
		() => ({
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto' as const,
			loop: true,
			speed: 600,
			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 350,
				modifier: 1.5,
				slideShadows: true,
				scale: 1.2,
			},
			navigation: {
				nextEl: '.custom-next',
				prevEl: '.custom-prev',
			},
			pagination: { clickable: true },
			modules: [EffectCoverflow, Pagination, Navigation, Autoplay],
		}),
		[]
	);

	return (
		<SectionContainer>
			<CarouselWrapper>
				<GlowEffect />

				<NavButton className='custom-prev'>
					<ChevronLeft
						size={24}
						strokeWidth={2.5}
					/>
				</NavButton>

				<NavButton className='custom-next'>
					<ChevronRight
						size={24}
						strokeWidth={2.5}
					/>
				</NavButton>

				<Swiper {...swiperConfig}>
					{portfolioProjects.map((project, index) => (
						<SwiperSlide
							key={`${project.company}-${index}`}
							style={{ width: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<ProjectCard $bgImage={project.image.src} />

							<InfoContainer>
								<MetaTag>
									<span>{project.company}</span>
									<span>•</span>
									<span>{project.year}</span>
								</MetaTag>

								<Title>{project.title}</Title>

								<ResultsList>
									{project.results.map((result, idx) => (
										<li key={idx}>
											<CheckCircle
												size={16}
												className='text-emerald-400'
											/>
											<span>{result.title}</span>
										</li>
									))}
								</ResultsList>
								<ActionButton
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'>
									<span>Visit Live Site</span>
									<ArrowUpRight size={16} />
								</ActionButton>
							</InfoContainer>
						</SwiperSlide>
					))}
				</Swiper>
			</CarouselWrapper>
		</SectionContainer>
	);
}
