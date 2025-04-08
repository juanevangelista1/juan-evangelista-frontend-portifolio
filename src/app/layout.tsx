import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { Head } from 'next/document';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: ['400'] });

export const metadata: Metadata = {
	title: 'Juan Evangelista - Frontend Engineer',
	description:
		'Created with love, for all developers to know me better. Front-End Engineer | Specialist in JavaScript | TypeScript | React.js | Next.js | jQuery | Redux | Performance Optimization & SEO',
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
					calistoga.variable,
					'bg-gray-900 text-white antialiased font-sans '
				)}>
				{children}
			</body>
		</html>
	);
}
