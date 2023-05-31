export interface PropsLogin {
  email: string;
  password: string;
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
}
export interface PropsRegister {
  name: string;
  email: string;
  password: string;
  onChanges: React.ChangeEventHandler<HTMLInputElement>;
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
export interface AuthInitialState {
  user: {
    name: null;
    email: null;
  };
  token: null;
  isLoggedIn: boolean;
  getIsFetchAnswer: boolean;
}

export interface ContactsInitialState {
  item: [];
  filter: string;
  getIsFetchAnswer: boolean;
}

// import { PropsLogin } from 'components/Interface/Interface';
