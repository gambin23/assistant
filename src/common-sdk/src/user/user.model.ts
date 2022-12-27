import { Dictionary } from '../common';

export interface User {
    id: string;
    name?: string;
    email?: string;
    image?: string;
    apps?: Dictionary<string>;
    registeredDate?: Date;
    lastLoginDate?: Date;
}

export interface UserState extends User { }
