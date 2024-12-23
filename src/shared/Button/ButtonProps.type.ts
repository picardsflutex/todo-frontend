type buttonSizes = 'small' | 'medium' | 'large'
type buttonStyles =
	| 'base'
	| 'disabled'
	| 'danger'
	| 'warning'
	| 'success'
	| 'icon'
type animationTypes = 'default' | 'loading'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size?: buttonSizes
	buttonStyle?: buttonStyles
	animationType?: animationTypes
	isLoading?: boolean
}
