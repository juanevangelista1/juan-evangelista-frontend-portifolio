import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'react-hot-toast';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const space_grotesk = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-serif',
	weight: ['400'],
});

export const metadata: Metadata = {
	title: {
		default: 'Juan Evangelista - Frontend Engineer & Developer',
		template: '%s | Juan Evangelista',
	},
	description:
		'Frontend Engineer specializing in JavaScript, TypeScript, React.js, Next.js, and modern web development. Creating high-performance, SEO-optimized web applications with cutting-edge technologies.',
	keywords: [
		'Frontend Engineer',
		'JavaScript Developer',
		'TypeScript Developer',
		'React.js Developer',
		'Next.js Developer',
		'Web Developer',
		'Frontend Development',
		'UI/UX Development',
		'Performance Optimization',
		'SEO Optimization',
		'Web Applications',
		'Modern Web Development',
	],
	authors: [{ name: 'Juan Evangelista' }],
	creator: 'Juan Evangelista',
	publisher: 'Juan Evangelista',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://juan-evangelista-developer.vercel.app/',
		title: 'Juan Evangelista - Frontend Engineer & Developer',
		description:
			'Frontend Engineer specializing in JavaScript, TypeScript, React.js, Next.js, and modern web development. Creating high-performance, SEO-optimized web applications.',
		siteName: 'Juan Evangelista Portfolio',
		images: [
			{
				url: '/meta-photo.png',
				width: 1200,
				height: 630,
				alt: 'Juan Evangelista - Frontend Engineer',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Juan Evangelista - Frontend Engineer & Developer',
		description:
			'Frontend Engineer specializing in JavaScript, TypeScript, React.js, Next.js, and modern web development.',
		images: ['/og-image.jpg'],
		creator: '@juan_evangelista',
	},
	verification: {
		google: 'your-google-verification-code',
		yandex: 'your-yandex-verification-code',
		me: 'your-me-verification-code',
	},
	alternates: {
		canonical: 'https://juan-evangelista-developer.vercel.app/',
	},
	category: 'technology',
	classification: 'Portfolio',
	metadataBase: new URL('https://juan-evangelista-developer.vercel.app/'),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='icon'
					href='/favicon.ico'
					sizes='any'
				/>
				<link
					rel='icon'
					href='/icon.svg'
					type='image/svg+xml'
				/>
				<link
					rel='apple-touch-icon'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='manifest'
					href='/manifest.json'
				/>
				<meta
					name='theme-color'
					content='#10b981'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					name='format-detection'
					content='telephone=no'
				/>
				<JsonLd />
			</head>
			<body
				className={twMerge(
					inter.variable,
					space_grotesk.variable,
					'bg-gray-900 text-white antialiased font-sans '
				)}>
				<Toaster />
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
