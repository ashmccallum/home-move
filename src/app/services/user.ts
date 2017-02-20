export interface IUser {
    createdAt?: number;
    updatedAt: number;
    id: string;
    name: string;
    email: string;
    photoUrl?: string;
    type: string;
    authProviderData: Object;
}

export class User implements IUser {
    createdAt: number = 0;
    updatedAt: number = 0;
    id: string;
    name: string;
    email: string;
    photoUrl: string;
    type: string;
    authProviderData: Object;

    constructor(createdAt: number, id: string, name: string, email: string, photoUrl: string, type: string, authProviderData: Object) {
        this.createdAt = createdAt;
        this.id = id;
        this.name = name;
        this.email = email;
        this.photoUrl = photoUrl;
        this.type = type;
        this.authProviderData = authProviderData;
    }
}