'use client'

import { axiosPublic } from '@/lib/utils'
import { Button, LabeledInput } from '@/shared'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { authMethod, LoginFormInputs } from './IAuthFormProps'
import styles from './styles.module.css'

const AuthForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>()

	const onSubmit: SubmitHandler<LoginFormInputs> = async data => {
		const response = await axiosPublic.post(
			`/auth/${method.toLowerCase()}`,
			data
		)
		localStorage.setItem('session', JSON.stringify(response.data))
	}

	const [method, setMethod] = useState<authMethod>('SignIn')

	return (
		<section className={styles.AuthSection}>
			<h2 className={styles.header}>Login</h2>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<LabeledInput<LoginFormInputs>
					id='email'
					label='Email:'
					type='email'
					register={register}
					required
					errors={errors.email?.message}
				/>
				<LabeledInput<LoginFormInputs>
					id='password'
					label='Password:'
					type='password'
					register={register}
					required
					forgotPass={method === 'SignIn' ? true : false}
					errors={errors.password?.message}
				/>
				{method === 'SingUp' && (
					<LabeledInput<LoginFormInputs>
						id='confirmPassword'
						label='Confirm password:'
						type='password'
						register={register}
						forgotPass={false}
						errors={errors.confirmPassword?.message}
					/>
				)}
				<Button type='submit' className={styles.buttonForm}>
					{method}
				</Button>
			</form>
			<p className={styles.registerLink}>
				Don’t have an account?{' '}
				<button
					onClick={() => setMethod(method === 'SignIn' ? 'SingUp' : 'SignIn')}
				>
					{method === 'SignIn' ? 'SingUp' : 'SignIn'}
				</button>
			</p>
		</section>
	)
}

export default AuthForm
