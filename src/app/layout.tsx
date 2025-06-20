import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const space_grotesk = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-serif',
	weight: ['400'],
});

export const metadata: Metadata = {
	title: 'Juan Evangelista - Frontend Engineer',
	description:
		'Created with love, for all developers to know me better. Front-End Engineer | Specialist in JavaScript | TypeScript | React.js | Next.js | jQuery | Redux | Performance Optimization & SEO',
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
					href='/icon.svg'
					className='text-gradients-blue-to-green'
				/>
				<link
					rel='shortcut icon'
					href='/icon.svg'
					className='text-gradients-blue-to-green'
				/>
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
