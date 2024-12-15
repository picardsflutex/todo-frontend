import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { IInput } from '../Input/Input.type'

export interface LabeledInputProps<T extends FieldValues> extends IInput {
	id: Path<T>
	label: string
	type: string
	register: UseFormRegister<T>
	errors?: string
	required?: boolean
}
