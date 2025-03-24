import grainImage from '@/assets/images/grain.jpg';

export function RingCircle() {
	return (
		<>
			<div
				className='absolute inset-0 -z-30 opacity-5'
				style={{ backgroundImage: `url(${grainImage.src})` }}></div>
			<div className='size-[620px] hero-circle'></div>
			<div className='size-[820px] hero-circle'></div>
			<div className='size-[1020px] hero-circle'></div>
			<div className='size-[1220px] hero-circle'></div>
			<div className='size-[1420px] hero-circle'></div>
			<div className='size-[1620px] hero-circle'></div>
		</>
	);
}
