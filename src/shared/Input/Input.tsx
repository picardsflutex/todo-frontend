import { IInput } from './Input.type'

const Input = ({ children, maxLength = 500, ...rest }: IInput) => {
	return (
		<input maxLength={maxLength <= 500 ? maxLength : 500} {...rest}>
			{children}
		</input>
	)
}

export default Input
