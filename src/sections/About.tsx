import { Cards } from '@/components/cards/cards';
import { SectionHeader } from '@/components/sectionHeader/sectionHeader';
import StarIcon from '@/assets/icons/star.svg';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import ReacttIcon from '@/assets/icons/react.svg';
import HtmlIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { CardHeader } from '@/components/cardHeader/cardHeader';
import { ToolboxItems } from '@/components/toolboxItems/toolboxItems';

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
];

const hobbies = [
	{
		title: 'Travel',
		emoji: '🏝️',
		left: '5%',
		top: '5%',
	},
	{
		title: 'Play Soccer',
		emoji: '⚽',
		left: '50%',
		top: '5%',
	},

	{
		title: 'Nature',
		emoji: '🌳',
		left: '45%',
		top: '70%',
	},

	{
		title: 'Exercises',
		emoji: '🏋️‍♂️',
		left: '35%',
		top: '40%',
	},
	{
		title: 'Gaming',
		emoji: '🕹️',
		left: '70%',
		top: '45%',
	},
	{
		title: 'Netflix',
		emoji: '📺',
		left: '5%',
		top: '65%',
	},
	{
		title: 'Music',
		emoji: '🎵',
		left: '10%',
		top: '35%',
	},
];

export const AboutSection = () => {
	return (
		<section className='py-20 lg:py-28'>
			<div className='container'>
				<SectionHeader
					eyebrow='Recommendations'
					title='What my Collegues say about me:'
					description='Learn more about who I am, what I do, and what inspires me'
				/>
				<div className='mt-20 flex flex-col gap-8'>
					<div className='grid grid-cols-1 gap-8 lg:grid lg:grid-cols-2 lg:gap-8'>
						<Cards className='h-[320px] p-0 lg:col-span-1'>
							<CardHeader
								title='My Tool Box'
								description='Explore the tecnologies and tools I use to craft exceptional digital experiences'
								className='px-6 pt-6'
							/>
							<ToolboxItems
								iconItem={toolBoxItems}
								className=' '
								itemsWrapperClassName='-translate-x-1/2'
							/>
							<ToolboxItems
								iconItem={toolBoxItems}
								className='mt-6 '
								itemsWrapperClassName='-translate-x-1/2'
							/>
						</Cards>
						<Cards className='h-[320px] p-0 flex flex-col lg:col-span-1.5'>
							<CardHeader
								title='Beyond the Code'
								description='Explore my interests and my hobbies beyond the digital world'
								className='px-6 pt-6'
							/>

							<div className='relative flex-1'>
								{hobbies.map((hobby) => (
									<div
										className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 py-1.5 rounded-full absolute '
										key={hobby.title}
										style={{
											left: hobby.left,
											top: hobby.top,
										}}>
										<span className='font-medium text-gray-950'>{hobby.title}</span>
										<span className=''>{hobby.emoji}</span>
									</div>
								))}
							</div>
						</Cards>
					</div>
				</div>
			</div>
		</section>
	);
};
