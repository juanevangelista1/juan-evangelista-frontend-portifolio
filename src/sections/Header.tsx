'use client';
import { motion } from 'framer-motion';

export const Header = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className='flex justify-center items-center fixed top-3 w-full z-10 '>
			<nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
				<a
					className='nav-item '
					href='/'>
					Home
				</a>
				<a
					className='nav-item '
					href='#projects'>
					Project
				</a>
				<a
					className='nav-item '
					href='#about'>
					About
				</a>
				<a
					className='nav-item '
					href='https://www.linkedin.com/in/juan-evangelista-desenvolvedor/'>
					Contact
				</a>
			</nav>
		</motion.div>
	);
};
