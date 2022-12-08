import { v4 } from 'uuid';

export interface Dictionary<T> { [name: string]: T };

export type SortOrder = 'asc' | 'desc';

export const guid = () => v4();
