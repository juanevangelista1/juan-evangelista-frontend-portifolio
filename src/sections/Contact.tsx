'use client';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

export const ContactSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className='py-16 pt-12'
			id='contact'>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className='container'>
				<ContactForm />
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 rounded-3xl py-8 px-10 text-center md:text-left mt-12'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className='flex flex-col md:flex-row lg:flex-row md:gap-16 gap-8 items-center'>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							className=''>
							<h2 className='font-serif text-2xl md:text-3xl'>
								Let&apos;s create something amazing together
							</h2>
							<p className='text-sm md:text-base mt-2'>
								If you&apos;re looking for a committed, results-oriented professional to improve your
								digital solutions, get in touch. Let's talk! 🚀
							</p>
						</motion.div>

						<a
							href='https://www.linkedin.com/in/juan-evangelista-desenvolvedor/'
							target='_blank'
							rel='noopener noreferrer'>
							<button className='text-white bg-gray-900 rounded-xl px-6 py-2 h-12 w-max inline-flex items-center gap-2 group transition-colors duration-300'>
								<span className='font-semibold'>Contact Me</span>
								<ArrowUpRightIcon className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
							</button>
						</a>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};
