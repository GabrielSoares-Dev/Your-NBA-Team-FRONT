import { IBaseState } from '../../types';

interface Auth {
  token: string;
}

export interface IAuthState extends IBaseState {
  payload: Auth;
}
