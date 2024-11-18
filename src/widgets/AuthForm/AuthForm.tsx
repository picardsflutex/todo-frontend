import { IAuthFormProps } from './IAuthFormProps';

const AuthForm = ({ ...props }: IAuthFormProps) => {
  return <div {...props}>{'AuthForm'}</div>;
};

export default AuthForm;
