import { IBaseState } from '../../types';

interface Configurations {
  isOpenDrawerMobileNavBar: boolean;
}

export interface IConfigurationsState extends IBaseState {
  payload: Configurations;
}
