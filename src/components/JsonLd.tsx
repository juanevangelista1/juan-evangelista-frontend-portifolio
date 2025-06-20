export default function JsonLd() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': 'https://juan-evangelista-developer.vercel.app/#person',
				name: 'Juan Evangelista',
				jobTitle: 'Frontend Engineer',
				description:
					'Frontend Engineer specializing in JavaScript, TypeScript, React.js, Next.js, and modern web development',
				url: 'https://juan-evangelista-developer.vercel.app/',
				image: 'https://juan-evangelista-developer.vercel.app/og-image.jpg',
				sameAs: [
					'https://www.linkedin.com/in/juan-evangelista-desenvolvedor/',
					'https://github.com/juanevangelista1',
				],
				knowsAbout: [
					'JavaScript',
					'TypeScript',
					'React.js',
					'Next.js',
					'Frontend Development',
					'Web Development',
					'UI/UX Development',
					'Performance Optimization',
					'SEO Optimization',
				],
				worksFor: {
					'@type': 'Organization',
					name: 'Freelance Developer',
				},
				address: {
					'@type': 'PostalAddress',
					addressCountry: 'BR',
				},
			},
			{
				'@type': 'WebSite',
				'@id': 'https://juan-evangelista-developer.vercel.app/#website',
				url: 'https://juan-evangelista-developer.vercel.app/',
				name: 'Juan Evangelista Portfolio',
				description:
					'Frontend Engineer Portfolio - JavaScript, TypeScript, React.js, Next.js Developer',
				publisher: {
					'@id': 'https://juan-evangelista-developer.vercel.app/#person',
				},
				potentialAction: {
					'@type': 'SearchAction',
					target: 'https://juan-evangelista-developer.vercel.app/?s={search_term_string}',
					'query-input': 'required name=search_term_string',
				},
			},
			{
				'@type': 'WebPage',
				'@id': 'https://juan-evangelista-developer.vercel.app/#webpage',
				url: 'https://juan-evangelista-developer.vercel.app/',
				inLanguage: 'en-US',
				name: 'Juan Evangelista - Frontend Engineer & Developer',
				isPartOf: {
					'@id': 'https://juan-evangelista-developer.vercel.app/#website',
				},
				about: {
					'@id': 'https://juan-evangelista-developer.vercel.app/#person',
				},
				description:
					'Frontend Engineer specializing in JavaScript, TypeScript, React.js, Next.js, and modern web development. Creating high-performance, SEO-optimized web applications.',
			},
		],
	};

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
