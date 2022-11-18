import { createReducer, on } from '@ngrx/store';
import { UserState } from '../user.model';
import { userLogin, userLogout } from './user.actions';

export const initialState: UserState = {};

export const userReducer = createReducer(
    initialState,
    on(userLogin, (state, action) => state = action.user),
    on(userLogout, (state) => state = {})
);
