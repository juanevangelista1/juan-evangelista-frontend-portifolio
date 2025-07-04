'use client';
import { Cards } from '@/components/cards/cards';
import { SectionHeader } from '@/components/sectionHeader/sectionHeader';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import ReacttIcon from '@/assets/icons/react.svg';
import HtmlIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import GithubIcon from '@/assets/icons/github.svg';
import TypescriptIcon from '@/assets/icons/typescript_icon.svg';
import SeoIcon from '@/assets/icons/SEO_icon.svg';
import PerfomanceIcon from '@/assets/icons/performance-icon.svg';
import { CardHeader } from '@/components/cardHeader/cardHeader';
import { ToolboxItems } from '@/components/toolboxItems/toolboxItems';
import { HobbiesItems } from '@/components/hobbiesItems';
import { motion } from 'framer-motion';

const toolBoxItems = [
	{
		title: 'Javascript',
		iconType: JavascriptIcon,
	},
	{
		title: 'React',
		iconType: ReacttIcon,
	},
	{
		title: 'HTML5',
		iconType: HtmlIcon,
	},
	{
		title: 'CSS3',
		iconType: CssIcon,
	},
	{
		title: 'Github',
		iconType: GithubIcon,
	},
	{
		title: 'Typescript',
		iconType: TypescriptIcon,
	},
	{
		title: 'SEO',
		iconType: SeoIcon,
	},
	{
		title: 'Performance',
		iconType: PerfomanceIcon,
	},
];

export const AboutSection = () => {
	return (
		<section
			className='my-20 lg:py-28 '
			id='about'>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className='container'>
				<SectionHeader
					eyebrow='About me:'
					title='Get to know me better:'
					description='Learn more about who I am, what I do, and what inspires me'
				/>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className='mt-20 flex flex-col gap-8'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className='grid grid-cols-1 gap-8 lg:grid lg:grid-cols-2 lg:gap-8'>
						<Cards className='h-[320px] p-0 lg:col-span-1'>
							<CardHeader
								title='My Tool Box'
								description='Explore the tecnologies and tools I use to craft exceptional digital experiences'
								className='px-6 pt-6'
							/>
							<ToolboxItems
								iconItem={toolBoxItems}
								className=''
								itemsWrapperClassName='animate-move-left [animation-duration:35s]'
							/>
							<ToolboxItems
								iconItem={toolBoxItems}
								className='mt-6'
								itemsWrapperClassName='animate-move-right [animation-duration:35s]'
							/>
						</Cards>
						<Cards className='lg:h-[320px] md:h-[320px] h-[450px] p-0 flex flex-col lg:col-span-1'>
							<CardHeader
								title='Hard Skills'
								description='Know me better through my hard skills'
								className='px-6'
							/>

							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1 }}
								className='relative'>
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1 }}
									className='inline-flex items-center gap-2 px-6'>
									<span className='font-medium  text-gray-300'>
										Front-End Engineer with 3 years of experience in developing high-quality web applications,
										focused on business results and user experience. Specialized in JavaScript (ES6+),
										React.js, TypeScript, Next.js, Performance Optimization, SEO and Node.js. A proactive,
										resilient, and problem-solving oriented professional committed to high-impact deliveries
										and clean, efficient, and well-documented code.
									</span>
								</motion.div>
							</motion.div>
						</Cards>

						<Cards className='lg:h-[320px] md:h-[320px] h-[450px] p-0 flex flex-col lg:col-span-1'>
							<CardHeader
								title='Soft Skills'
								description='Know me better through my soft skills'
								className='px-6'
							/>

							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1 }}
								className='relative'>
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1 }}
									className='inline-flex items-center gap-2 px-6'>
									<span className='font-medium  text-gray-300'>
										Beyond technical skills, I'm proactive, resilient, and detail-oriented. I thrive on
										solving complex problems and continuously seek growth opportunities. Colleagues have noted
										my empathy and collaborative spirit, highlighting my ability to address challenges
										transparently and efficiently. If you're looking for a dedicated professional passionate
										about quality and innovation, I'd love to connect and explore potential collaborations.
									</span>
								</motion.div>
							</motion.div>
						</Cards>
						<Cards className='h-[320px] p-0 flex flex-col lg:col-span-1.5'>
							<CardHeader
								title='Beyond the Code'
								description='Explore my interests and my hobbies beyond the digital world'
								className='px-6 pt-6'
							/>

							<HobbiesItems
								className='mt-6'
								itemsWrapperClassName='animate-move-right [animation-duration:35s]'
							/>
							<HobbiesItems
								className='mt-6'
								itemsWrapperClassName='animate-move-left [animation-duration:35s]'
							/>
						</Cards>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
};
