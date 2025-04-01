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
		title: 'Go to the beach',
		emoji: '🏝️',
	},
	{
		title: 'Go to the stadium ',
		emoji: '🏟️⚽',
	},
	{
		title: 'I love animals',
		emoji: '🐈‍⬛',
	},
	{
		title: 'Exercises',
		emoji: '🏋️‍♂️',
	},
	{
		title: 'Video Games',
		emoji: '🕹️',
	},
	{
		title: 'Movies and Series',
		emoji: '📺',
	},
];

export const AboutSection = () => {
	return (
		<section className='py-20'>
			<div className='container'>
				<SectionHeader
					eyebrow='Recommendations'
					title='What my Collegues say about me:'
					description='Learn more about who I am, what I do, and what inspires me'
				/>
				<div className='mt-20'>
					<Cards className='h-[320px] p-0 '>
						<CardHeader
							title='My Tool Box'
							description='Explore the tecnologies and tools I use to craft exceptional digital experiences'
							className='px-6 pt-6'
						/>
						<ToolboxItems
							iconItem={toolBoxItems}
							className='mt-6 '
						/>
						<ToolboxItems
							iconItem={toolBoxItems}
							className='mt-6 '
						/>
					</Cards>
					<Cards className='h-[320px]'>
						<CardHeader
							title='Beyond the Code'
							description='Explore my interests and my hobbies beyond the digital world'
						/>

						<div className=''>
							{hobbies.map((hobby) => (
								<div
									className=''
									key={hobby.title}>
									<span className=''>{hobby.title}</span>
									<span className=''>{hobby.emoji}</span>
								</div>
							))}
						</div>
					</Cards>
				</div>
			</div>
		</section>
	);
};
