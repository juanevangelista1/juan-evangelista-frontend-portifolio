'use client';

import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import toast from 'react-hot-toast';

function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setValue,
	} = useForm({
		mode: 'onTouched',
	});

	const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '';

	const { submit: onSubmit } = useWeb3Forms({
		access_key: accessKey,
		settings: {
			from_name: 'Juan Evangelista Portfolio',
			subject: 'New Contact Message from your Website',
		},
		onSuccess: (msg, data) => {
			toast.success('Message sent successfully!');
			setValue('name', '');
			setValue('company', '');
			setValue('email', '');
			setValue('phone', '');
			setValue('help', '');
			setValue('message', '');
		},
		onError: (msg, data) => {
			toast.error('An error occurred. Please try again.');
		},
	});

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='p-4 md:p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800'>
			<h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-6'>Contact Me</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<input
					type='hidden'
					name='access_key'
					value='34f91c54-b84e-4be6-b285-11d2164712a7'
				/>
				<div className='mb-4'>
					<label
						htmlFor='name'
						className='block text-gray-700 dark:text-gray-300 mb-2'>
						Full Name
					</label>
					<input
						type='text'
						id='name'
						{...register('name', { required: 'Full name is required' })}
						className='w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500'
					/>
					{errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message as string}</p>}
				</div>

				<div className='mb-4'>
					<label
						htmlFor='company'
						className='block text-gray-700 dark:text-gray-300 mb-2'>
						Company
					</label>
					<input
						type='text'
						id='company'
						{...register('company')}
						className='w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500'
					/>
				</div>
			</div>

			<div className='mb-4'>
				<label
					htmlFor='email'
					className='block text-gray-700 dark:text-gray-300 mb-2'>
					Email Address
				</label>
				<input
					type='email'
					id='email'
					{...register('email', {
						required: 'Enter your email',
						pattern: {
							value: /^\S+@\S+$/i,
							message: 'Please enter a valid email',
						},
					})}
					className='w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500'
				/>
				{errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message as string}</p>}
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='mb-4'>
					<label
						htmlFor='phone'
						className='block text-gray-700 dark:text-gray-300 mb-2'>
						Phone Number
					</label>
					<InputMask
						mask='+99 (99) 99999-9999'
						id='phone'
						{...register('phone')}
						className='w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500'
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='help'
						className='block text-gray-700 dark:text-gray-300 mb-2'>
						How can I help?
					</label>
					<select
						id='help'
						{...register('help')}
						className='w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500'>
						<option value=''>Select an option</option>
						<option value='Front-end Development'>Front-end Development</option>
						<option value='Back-end Development'>Back-end Development</option>
						<option value='UI/UX Design'>UI/UX Design</option>
						<option value='General Inquiry'>General Inquiry</option>
					</select>
				</div>
			</div>

			<div className='mb-4'>
				<label
					htmlFor='message'
					className='block text-gray-700 dark:text-gray-300 mb-2'>
					Message
				</label>
				<textarea
					id='message'
					rows={4}
					{...register('message', { required: 'Enter your Message' })}
					className='w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500'></textarea>
				{errors.message && (
					<p className='text-red-500 text-sm mt-1'>{errors.message.message as string}</p>
				)}
			</div>

			<button
				type='submit'
				className='w-full bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-400/30 disabled:bg-gray-400 group'
				disabled={isSubmitting}>
				<span className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'>
					{isSubmitting ? 'Submitting...' : 'Send Message'}
				</span>
			</button>
		</form>
	);
}

export default ContactForm;
