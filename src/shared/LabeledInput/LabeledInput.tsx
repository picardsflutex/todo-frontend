import { useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { Input } from '..'
import { LabeledInputProps } from './LabeledInputProps.type'
import styles from './styles.module.css'

const LabeledInput = <T extends FieldValues>({
	id,
	label,
	type,
	register,
	required = false,
	errors,
	...rest
}: LabeledInputProps<T>) => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<div className={styles.inputGroup}>
			<div className={styles.labelGroup}>
				<label htmlFor={id as string} className={styles.inputLabel}>
					{label}
				</label>
				{type === 'password' && (
					<a href='/forgot-password' className={styles.forgotPasswordLink}>
						Forgot password?
					</a>
				)}
			</div>
			<Input
				id={id as string}
				type={type === 'password' && showPassword ? 'text' : type}
				required={required}
				{...register(id, { required })}
				{...rest}
			/>
			{errors && <span className={styles.error}>{errors}</span>}
			{type === 'password' && (
				<button
					type='button'
					onClick={() => setShowPassword(!showPassword)}
					className={styles.inputButton}
				>
					{showPassword ? 'Hide' : 'Show'}
				</button>
			)}
		</div>
	)
}

export default LabeledInput
