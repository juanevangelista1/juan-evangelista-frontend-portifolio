'use client';

import { ProjectsContent } from '@/components/projectsContent/projectsContent';
import { SectionHeader } from '@/components/sectionHeader/sectionHeader';
import { motion } from 'framer-motion';

export const ProjectsSection = () => {
	return (
		<section
			className='pb-16 lg:py-24 '
			id='projects'>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className='container'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}>
					<SectionHeader
						eyebrow='Real World Results'
						title='Featured Projects'
						description='Here are some of the projects I have worked on. In each project I took great pride in creating clean and efficient code, always focused on the processes, as they are what really make the difference in the success of a project with a large and real impact.'
					/>

					<ProjectsContent />
				</motion.div>
			</motion.div>
		</section>
	);
};
