'use client'

import classNames from 'classnames'
import { ButtonProps } from './ButtonProps.type'
import styles from './styles.module.css'

const Button = ({
	className,
	animationType = 'default',
	buttonStyle = 'base',
	size = 'medium',
	children,
	isLoading = false,
	...rest
}: ButtonProps) => {
	switch (animationType) {
		case 'loading':
			return (
				<button
					className={classNames(
						className,
						styles.ButtonDefault,
						size,
						buttonStyle,
						isLoading && styles.loading
					)}
					{...rest}
				>
					{!isLoading ? children : 'Loading...'}
				</button>
			)

		default:
			return (
				<button
					className={classNames(
						className,
						styles.ButtonDefault,
						size,
						buttonStyle
					)}
					{...rest}
				>
					{children}
				</button>
			)
	}
}

export default Button
