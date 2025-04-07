import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: ['400'] });

export const metadata: Metadata = {
	title: 'Juan Evangelista - Frontend Software Engineer',
	description: 'Created with love, for all developers to know me better. Welcome!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={twMerge(
					inter.variable,
					calistoga.variable,
					'bg-gray-900 text-white antialiased font-sans scroll-smooth'
				)}>
				{children}
			</body>
		</html>
	);
}
