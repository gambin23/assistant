import { createReducer, on } from '@ngrx/store';
import { userLogout, userLoginSuccess, userLogin, userRegister } from './user.actions';
import { UserState } from './user.model';
import { setState } from '../store/store';

const initialState: UserState = {
    data: { id: '' },
    isBusy: true
};

export const userReducer = createReducer(
    initialState,
    on(userLogin, userRegister, (state, action) => setState(state, {
        data: { id: action.id },
        isBusy: true
    })),
    on(userLoginSuccess, (state, action) => setState(state, {
        data: action.user,
        isBusy: false
    })),
    on(userLogout, (state) => setState(state, {
        data: { id: '' }
    }))
);
