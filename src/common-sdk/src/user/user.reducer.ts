import { createReducer, on } from '@ngrx/store';
import { userLogout, userLoginSuccess } from './user.actions';
import { UserState } from './user.model';

const initialState: UserState = { id: '' };

export const userReducer = createReducer(
    initialState,
    on(userLoginSuccess, (state, action) => state = action.user),
    on(userLogout, (state) => state = { id: '' })
);
