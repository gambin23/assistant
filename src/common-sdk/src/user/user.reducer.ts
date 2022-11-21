import { createReducer, on } from '@ngrx/store';
import { userLogin, userLogout } from './user.actions';
import { UserState } from './user.model';

const initialState: UserState = {};

export const userReducer = createReducer(
    initialState,
    on(userLogin, (state, action) => state = action.user),
    on(userLogout, (state) => state = {})
);
