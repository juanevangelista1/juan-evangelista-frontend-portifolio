import grainImage from '@/assets/images/grain.jpg';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export function Cards({ className, children }: PropsWithChildren<{ className?: string }>) {
	return (
		<>
			<div className={twMerge('card-projects-style', className)}>
				<div
					className='absolute inset-0 -z-10 opacity-5'
					style={{
						backgroundImage: `url(${grainImage.src})`,
					}}></div>
				{children}
			</div>
		</>
	);
}
