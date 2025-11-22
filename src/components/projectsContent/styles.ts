import styled from 'styled-components';

export const SectionContainer = styled.section`
	width: 100%;
	padding: 4rem 0;
	overflow: hidden;
	position: relative;
`;

export const CarouselWrapper = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	position: relative;

	.swiper {
		overflow: visible !important;
		padding-bottom: 2rem;
		z-index: 10;
	}

	.swiper-pagination-bullet {
		background: #4b5563;
		opacity: 0.5;
	}

	.swiper-pagination-bullet-active {
		background: #10b981;
		opacity: 1;
		width: 24px;
		border-radius: 4px;
		transition: width 0.3s;
	}

	.swiper-slide-shadow-left,
	.swiper-slide-shadow-right {
		background: transparent;
	}
`;

export const GlowEffect = styled.div`
	position: absolute;
	top: -10%;
	left: 50%;
	transform: translateX(-50%);
	width: 700px;
	height: 700px;
	background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(3, 7, 18, 0) 70%);
	pointer-events: none;
	z-index: 1;
	border-radius: 50%;
	filter: blur(50px);
`;

export const ProjectCard = styled.div<{ $bgImage: string }>`
	position: relative;
	border-radius: 16px;
	background-image: url(${(props) => props.$bgImage});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: top center;
	overflow: hidden;
	margin: 0 auto !important;
	box-sizing: border-box;

	box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
	border: 1px solid rgba(255, 255, 255, 0.1);

	transition: all 0.3s ease-out;

	width: 300px;
	height: 220px;

	@media screen and (min-width: 640px) {
		width: 450px;
		height: 280px;
	}

	@media screen and (min-width: 830px) {
		width: 550px;
		height: 340px;
	}

	@media screen and (min-width: 1100px) {
		width: 780px;
		height: 480px;
		pointer-events: auto;
	}
`;

export const NavButton = styled.div`
	position: absolute;
	top: 40%;
	transform: translateY(-50%);
	z-index: 20;
	cursor: pointer;
	background-color: #ffffff;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	color: #030712;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	align-items: center;
	justify-content: center;
	display: none;
	transition: transform 0.2s ease, background-color 0.2s;

	&:hover {
		transform: translateY(-50%) scale(1.1);
		background-color: #f8f9fa;
		color: #10b981;
	}

	@media screen and (min-width: 830px) {
		display: flex;
	}

	&.custom-prev {
		left: 20px;
		@media screen and (min-width: 1100px) {
			left: 40px;
		}
		@media screen and (min-width: 1500px) {
			left: 180px;
		}
	}

	&.custom-next {
		right: 20px;
		@media screen and (min-width: 1100px) {
			right: 40px;
		}
		@media screen and (min-width: 1500px) {
			right: 180px;
		}
	}
`;

export const InfoContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 100%;
	transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

	opacity: 0;
	transform: translateY(20px);
	filter: blur(4px);
	pointer-events: none;

	.swiper-slide-active &,
	.swiper-slide-duplicate-active & {
		opacity: 1;
		transform: translateY(0);
		filter: blur(0);
		pointer-events: auto;
	}
`;

export const MetaTag = styled.div`
	display: inline-flex;
	gap: 0.5rem;
	font-size: 0.875rem;
	font-weight: 700;
	background: linear-gradient(to right, #60a5fa, #34d399);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: 0.5rem;
	text-transform: uppercase;
	letter-spacing: 0.05em;
`;

export const Title = styled.h3`
	font-size: 1.2rem;
	color: white;
	margin-bottom: 1rem;
	@media (min-width: 768px) {
		font-size: 2.5rem;
	}
`;

export const ResultsList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1.5rem;
	align-items: center;

	li {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #d1d5db;
		font-size: 0.875rem;
		@media (min-width: 768px) {
			font-size: 1rem;
		}
	}
`;

export const ActionButton = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	z-index: 2;
	height: 3rem;
	padding: 0 1.5rem;
	background-color: white;

	color: #030712;

	font-weight: 600;
	border-radius: 0.75rem;
	text-decoration: none;

	transition: all 0.3s ease;

	svg {
		transition: transform 0.3s ease;
	}

	&:hover {
		background-color: #f3f4f6;
		color: #10b981;
	}

	&:hover svg {
		transform: translate(2px, -2px);
	}
`;
