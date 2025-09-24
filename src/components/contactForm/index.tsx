'use client';

import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import InputMask from 'react-input-mask';
import HCaptcha from '@hcaptcha/react-hcaptcha';

type FormData = {
	name: string;
	company?: string;
	email: string;
	phone: string;
	message: string;
	'h-captcha-response'?: string;
};

export default function ContactForm() {
	const {
		register,
		control,
		handleSubmit,
		setValue,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({ defaultValues: { phone: '' } });

	const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
	const [responseMessage, setResponseMessage] = useState('');
	const [showModal, setShowModal] = useState(false);

	const { submit: onSubmit } = useWeb3Forms({
		access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!,
		settings: {
			from_name: 'Site Contact Form',
			subject: 'New contact message',
		},
		onSuccess: (msg) => {
			setStatus('success');
			setResponseMessage(msg);
			reset();
		},
		onError: (msg) => {
			setStatus('error');
			setResponseMessage(msg);
		},
	});

	useEffect(() => {
		if (status === 'success') setShowModal(true);
	}, [status]);

	const handleForm = async (data: FormData) => {
		setStatus('sending');
		await onSubmit(data);
	};

	const maskSelector = (value: string) =>
		value.startsWith('+') ? '+99 999 9999 9999' : '(99) 99999-9999';

	return (
		<>
			<form
				onSubmit={handleSubmit(handleForm)}
				className='space-y-6'>
				<div>
					<label
						htmlFor='name'
						className='block text-sm font-medium mb-1'>
						Name
					</label>
					<input
						{...register('name', { required: 'Name is required' })}
						id='name'
						type='text'
						className='w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00B9CD] card-projects-style'
						placeholder='Your full name'
					/>
					{errors.name && <p className='mt-1 text-red-400 text-sm'>{errors.name.message}</p>}
				</div>

				<div>
					<label
						htmlFor='company'
						className='block text-sm font-medium mb-1'>
						Company Name (optional)
					</label>
					<input
						{...register('company')}
						id='company'
						type='text'
						className='w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00B9CD] card-projects-style'
						placeholder='Your company name (optional)'
					/>
				</div>

				<div>
					<label
						htmlFor='email'
						className='block text-sm font-medium mb-1'>
						Email
					</label>
					<input
						{...register('email', {
							required: 'Email is required',
							pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' },
						})}
						id='email'
						type='email'
						className='w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00B9CD] card-projects-style'
						placeholder='you@example.com'
					/>
					{errors.email && <p className='mt-1 text-red-400 text-sm'>{errors.email.message}</p>}
				</div>

				<div>
					<label
						htmlFor='phone'
						className='block text-sm font-medium mb-1'>
						Phone or WhatsApp
					</label>
					<Controller
						name='phone'
						control={control}
						defaultValue=''
						rules={{
							required: 'Phone number is required',
							validate: {
								onlyDigits: (v) => (/^\d+$/.test(v.replace(/\D/g, '')) ? true : 'Only numbers are allowed'),
								minLength: (v) => (v.replace(/\D/g, '').length >= 10 ? true : 'At least 10 digits'),
								maxLength: (v) => (v.replace(/\D/g, '').length <= 15 ? true : 'Up to 15 digits'),
							},
						}}
						render={({ field: { name, value, onChange, onBlur, ref } }) => (
							<InputMask
								mask={maskSelector(value)}
								value={value}
								onChange={onChange}
								onBlur={onBlur}
								maskChar={null}>
								{(inputProps: any) => (
									<input
										{...inputProps}
										name={name}
										ref={ref}
										id='phone'
										placeholder='(00) 00000-0000 or +00 000 0000 0000'
										className='w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00B9CD] card-projects-style'
									/>
								)}
							</InputMask>
						)}
					/>
					{errors.phone && <p className='mt-1 text-red-400 text-sm'>{errors.phone.message}</p>}
				</div>

				<div>
					<label
						htmlFor='message'
						className='block text-sm font-medium mb-1'>
						Message
					</label>
					<textarea
						{...register('message', { required: 'Message is required' })}
						id='message'
						rows={4}
						className='w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00B9CD] card-projects-style'
						placeholder='How can we help?'
					/>
					{errors.message && <p className='mt-1 text-red-400 text-sm'>{errors.message.message}</p>}
				</div>

				<input
					type='checkbox'
					name='botcheck'
					className='hidden'
					style={{ display: 'none' }}
				/>

				<HCaptcha
					sitekey='50b2fe65-b00b-4b9e-ad62-3ba471098be2'
					onVerify={(token) => setValue('h-captcha-response', token)}
				/>
				<input
					type='hidden'
					{...register('h-captcha-response')}
				/>

				<button
					type='submit'
					disabled={isSubmitting || status === 'sending'}
					className='w-full bg-[#00B9CD] text-white py-2 rounded-md hover:bg-[#009bb0]'>
					{status === 'sending' ? 'Sending...' : 'Send Message'}
				</button>
			</form>

			{showModal && (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm'>
					<div className='bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative'>
						<button
							onClick={() => setShowModal(false)}
							className='absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl'
							aria-label='Close'>
							&times;
						</button>
						<h2 className='text-2xl font-bold mb-4'>Email sent successfully!</h2>
						<p className='mb-6'>Thank you for reaching out! We'll be in touch soon.</p>
						<button
							onClick={() => setShowModal(false)}
							className='px-4 py-2 bg-[#00B9CD] text-white rounded-lg hover:bg-[#009bb0]'>
							Close
						</button>
					</div>
				</div>
			)}

			{status === 'error' && <p className='mt-4 text-red-400'>❌ {responseMessage}</p>}
		</>
	);
}
