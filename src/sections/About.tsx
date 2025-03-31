import { ProjectsContent } from '@/components/projectsContent/projectsContent';

export const AboutSection = () => {
	return (
		<section className='pb-16 lg:py-24 '>
			<div className='container'>
				<div>
					<div className='flex justify-center'>
						<p className='text-gradients-blue-to-green text-center font-semibold'>Know me better</p>
					</div>
					<h2 className='title-project-section'>Featured Projects</h2>
					<p className='text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto '>
						Here are some of the projects I have worked on. Each project has been designed to solve
						real-world problems and deliver tangible results.
					</p>

					<ProjectsContent />
				</div>
			</div>
		</section>
	);
};
