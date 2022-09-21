type ILoading = 'IDLE' | 'PROCESSING' | 'SUCCESS' | 'FAILURE';

export interface IBaseState {
  loading: ILoading;
  message?: string;
}
