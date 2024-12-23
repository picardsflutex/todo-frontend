type inputSizes = 'small' | 'medium' | 'large'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	inputSize?: inputSizes
}
