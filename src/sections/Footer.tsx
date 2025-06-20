import { ArrowUpRight } from '@/components/icons/ArrowUpRight';

const Footerlinks = [
	{
		title: 'LinkedIn',
		href: 'https://www.linkedin.com/in/juan-evangelista-desenvolvedor/',
	},
	{
		title: 'Github',
		href: 'https://github.com/juanevangelista1',
	},
];

export const Footer = () => {
	return (
		<footer className='relative overflow-x-clip'>
			<div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-b bg-emerald-300/30 mask-radial-gradient -z-10'></div>
			<div className='container z-50'>
				<div className='border-t border-white/15  py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:gap-16 md:justify-between'>
					<div className='text-white/40'>
						<span>
							Made with a lot 💚 for you to get to know a little about me! | &copy; 2025 all rights
							Reserved
						</span>
					</div>
					<nav className='flex flex-col items-center gap-8 md:flex-row md:gap-16'>
						{Footerlinks.map((link) => (
							<a
								key={link.title}
								href={link.href}
								className='text-white inline-flex items-center gap-1.5 group transition-colors hover:text-emerald-300 duration-300'>
								<span className='font-semibold'>{link.title}</span>
								<ArrowUpRight className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
							</a>
						))}
						<a
							className='text-white inline-flex items-center gap-1.5 group transition-colors hover:text-emerald-300 duration-300'
							href='mailto:juan.evangelista.nascimentoo@gmail.com'>
							<span className='font-semibold'>E-mail</span>
							<ArrowUpRight className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
						</a>
					</nav>
				</div>
			</div>
		</footer>
	);
};
