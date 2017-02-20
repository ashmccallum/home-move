export class Property {

    constructor(
        createdAt: number = 0,
        updatedAt: number = 0,
        id: string,
        name: string,
        email: string,
        photoUrl: string,
        type: string,
        authProviderData: Object,
        properties: Array<any>
    ) {}
}