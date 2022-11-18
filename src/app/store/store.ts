import { userReducer } from '../user/store/user.reducer';
import { UserState } from './../user/user.model';

export interface AppState {
    user: UserState
}

export const reducers = {
    user: userReducer
}
