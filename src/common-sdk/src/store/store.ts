import { UserState } from '../user/user.model';
import { userReducer } from '../user/user.reducer';

export interface AppState {
    user: UserState
}

export const reducers = {
    user: userReducer
}
