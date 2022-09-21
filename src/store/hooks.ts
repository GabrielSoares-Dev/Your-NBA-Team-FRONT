import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, CustomState } from '.';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<CustomState> = useSelector;
