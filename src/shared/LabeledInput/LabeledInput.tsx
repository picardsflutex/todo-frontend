'use client'

import classNames from 'classnames'
import { useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { BiHide, BiShow } from 'react-icons/bi'
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
	className,
	forgotPass,
	...rest
}: LabeledInputProps<T>) => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<div className={classNames(className, styles.inputGroup)}>
			<div className={styles.labelGroup}>
				<label htmlFor={id as string} className={styles.inputLabel}>
					{label}
				</label>
				{type === 'password' && forgotPass && (
					<a href='/forgot-password' className={styles.forgotPasswordLink}>
						Forgot password?
					</a>
				)}
			</div>
			<Input
				id={id as string}
				type={type === 'password' && showPassword ? 'text' : type}
				required={required}
				className={styles.input}
				{...register(id, { required })}
				{...rest}
			/>
			{errors && <span className={styles.inputError}>{errors}</span>}
			{type === 'password' && (
				<button
					type='button'
					onClick={() => setShowPassword(!showPassword)}
					className={styles.inputButton}
				>
					{!showPassword ? <BiHide /> : <BiShow />}
				</button>
			)}
		</div>
	)
}

export default LabeledInput
