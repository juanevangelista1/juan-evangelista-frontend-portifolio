import grainImage from '@/assets/images/grain.jpg';
import { ComponentPropsWithRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export function Cards({ className, children, ...other }: ComponentPropsWithRef<'div'>) {
	return (
		<>
			<div
				className={twMerge('card-projects-style', className)}
				{...other}>
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
