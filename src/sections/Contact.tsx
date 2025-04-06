import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

export const ContactSection = () => {
	return (
		<div className='py-16 pt-12'>
			<div className='container'>
				<div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 rounded-3xl py-8 px-10 text-center md:text-left'>
					<div className='flex flex-col md:flex-row lg:flex-row md:gap-16 gap-8 items-center'>
						<div className=''>
							<h2 className='font-serif text-2xl md:text-3xl'>Let's create something amazing together</h2>
							<p className='text-sm md:text-base mt-2'>
								If you're looking for a committed, results-oriented professional to improve your digital
								solutions, get in touch. Let's talk! 🚀
							</p>
						</div>

						<div className=''>
							<button className='text-white bg-gray-900 rounded-xl px-6 py-2 h-12 w-max inline-flex items-center gap-2 hover:bg-gray-800 transition duration-300'>
								<span className='font-semibold'>Contact Me</span>
								<ArrowUpRightIcon className='size-4 ' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
