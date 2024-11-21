export interface Credential {
    id: number;
    username: string;
    password: string;
    url: string;
    notes: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    credentials: Credential[];
}