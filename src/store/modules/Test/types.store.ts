import { IBaseState } from '../../types';

interface Test {
  test: string;
}

export interface ITestState extends IBaseState {
  payload: Test;
}
