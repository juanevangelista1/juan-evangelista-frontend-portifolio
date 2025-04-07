export function SectionHeader({
	title,
	eyebrow,
	description,
}: {
	title: string;
	eyebrow: string;
	description: string;
}) {
	return (
		<>
			<div className='flex justify-center'>
				<p className='text-gradients-blue-to-green text-center font-semibold'>{eyebrow}</p>
			</div>
			<h2 className='title-project-section'>{title}</h2>
			<p className='text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-2xl mx-auto '>
				{description}
			</p>
		</>
	);
}
