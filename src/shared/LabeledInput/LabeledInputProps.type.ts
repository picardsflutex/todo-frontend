import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { InputProps } from '../Input/InputProps.type'

export interface LabeledInputProps<T extends FieldValues> extends InputProps {
	id: Path<T>
	label: string
	type: string
	register: UseFormRegister<T>
	errors?: string
	required?: boolean
	forgotPass?: boolean
}
