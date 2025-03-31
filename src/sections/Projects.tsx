import { ProjectsContent } from '@/components/projectsContent/projectsContent';
import { SectionHeader } from '@/components/sectionHeader/sectionHeader';

export const ProjectsSection = () => {
	return (
		<section className='pb-16 lg:py-24 '>
			<div className='container'>
				<div>
					<SectionHeader
						eyebrow='Real World Results'
						title='Featured Projects'
						description='Here are some of the projects I have worked on. Each project has been designed to solve
						real-world problems and deliver tangible results.'
					/>

					<ProjectsContent />
				</div>
			</div>
		</section>
	);
};
