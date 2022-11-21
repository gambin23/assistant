import { Theme } from '../theme/theme.model';

export interface Preferences {
    theme?: Theme;
}

export interface PreferencesState extends Preferences { }
