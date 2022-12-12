export interface Alert {
    message: string;
    type: AlertType;
    link?: string;
    isPersistent?: boolean;
}

export interface AlertState {
    data?: Alert;
}

export type AlertType = 'success' | 'warning' | 'error';
