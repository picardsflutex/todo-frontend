'use client'

import { AuthForm } from '@/widgets'
import styles from './Auth.module.css'

const Auth = () => {
	return (
		<main className={styles.authPage}>
			<AuthForm />
		</main>
	)
}

export default Auth
