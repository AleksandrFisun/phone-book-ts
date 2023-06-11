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
export interface PropsMessage {
  onDeleteMessage: Function;
  onEditMessage: Function;
}

export interface PropsRestrictedRout {
  component: any;
  redirectTo: string;
}
//Auth
export interface AuthInitialState {
  user: {
    name: null;
    email: null;
  };
  token: null;
  isLoggedIn: boolean;
  getIsFetchAnswer: boolean;
}
export interface AuthUser {
  auth: {
    user: {
      name: null;
      email: null;
    };
  };
}
export interface AuthIsLoggedIn {
  auth: {
    isLoggedIn: boolean;
  };
}
export interface AuthGetIsFetchAnswer {
  auth: {
    getIsFetchAnswer: boolean;
  };
}
export interface AuthToken {
  auth: {
    token: null;
  };
}
//
export interface ContactsInitialState {
  item: [];
  filter: string;
  getIsFetchAnswer: boolean;
}
export interface ChatInitialState {
  items: [];
  getIdMessage: string;
  isModal: boolean;
  fullScreen: boolean;
  writingMessage: boolean;
  getIsMessage: boolean;
}
// import { PropsLogin } from 'components/Interface/Interface';
