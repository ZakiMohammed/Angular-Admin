export class Profile {
    id: number;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;

    constructor() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.mobile = '';
        this.email = '';
    }
}
export class ProfileResolved {
    profile: Profile;
    error?: any;
}