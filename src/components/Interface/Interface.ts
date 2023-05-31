export interface PropsLogin {
  email: string;
  password: string;
  onChangeInput: Function;
}
export interface PropsRegister {
  name: string;
  email: string;
  password: string;
  onChanges: Function;
}
export interface PropsItemContacts {
  id: string;
  name: string;
  number: string;
}
export interface PropsRestrictedRout {
  component: any;
  redirectTo: string;
}
// import { PropsLogin } from 'components/Interface/Interface';
