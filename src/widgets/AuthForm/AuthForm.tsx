import { axiosPublic } from '@/lib/utils'
import { LabeledInput } from '@/shared'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginFormInputs } from './IAuthFormProps'
import styles from './styles.module.css'

const AuthForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>()

	const onSubmit: SubmitHandler<LoginFormInputs> = async data => {
		const response = await axiosPublic.post(`/auth/signin`, data)
		localStorage.setItem('session', JSON.stringify(response.data))
		console.log('Logging in with', response)
	}

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
					errors={errors.password?.message}
				/>
				<button type='submit' className={styles.buttonForm}>
					Login
				</button>
			</form>
			<p className={styles.registerLink}>
				Don’t have an account? <a href='/register'>Register here</a>
			</p>
		</section>
	)
}

export default AuthForm
