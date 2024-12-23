export interface IAuthFormProps {}

export interface LoginFormInputs {
	email: string
	password: string
	confirmPassword?: string
}

export type authMethod = 'SignIn' | 'SingUp'
