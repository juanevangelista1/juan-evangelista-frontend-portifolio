import { Cards } from '@/components/cards/cards';
import { SectionHeader } from '@/components/sectionHeader/sectionHeader';
import StarIcon from '@/assets/icons/star.svg';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import ReacttIcon from '@/assets/icons/react.svg';
import HtmlIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { TechIcon } from '@/components/techIcon/techIcon';

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
					<Cards>
						<div className=''>
							<div className='inline-flex '>
								<StarIcon className='size-9' />
								<h3>My Tool Box</h3>
							</div>
							<p className=''>
								Explore the tecnologies and tools I use to craft exceptional digital experiences
							</p>
						</div>
						<div className=''>
							{toolBoxItems.map((item) => (
								<div
									className=''
									key={item.title}>
									<TechIcon component={item.iconType} />
									<span>{item.title}</span>
								</div>
							))}
						</div>
					</Cards>
					<Cards>
						<div className=''>
							<StarIcon />
							<h3>Beyond the Code</h3>
							<p className=''> Explore my interests and my hobbies beyond the digital</p>
						</div>
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
