import { TechIcon } from '@/components/techIcon/techIcon';
import { twMerge } from 'tailwind-merge';

export function ToolboxItems({
	iconItem,
	className,
}: {
	iconItem: { title: string; iconType: React.ElementType }[];
	className?: string;
}) {
	return (
		<div className={twMerge('flex mask-image', className)}>
			<div className='flex flex-none py-0.5 gap-6'>
				{iconItem.map((item: any) => (
					<div
						className='inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg'
						key={item.title}>
						<TechIcon component={item.iconType} />
						<span className='font-semibold '>{item.title}</span>
					</div>
				))}
			</div>
		</div>
	);
}
