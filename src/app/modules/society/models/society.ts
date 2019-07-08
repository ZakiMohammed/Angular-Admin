export class Society {
    id: number;
    name: string;
    displayName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    pinCode: string;
    contactNo: string;
    active: boolean;
    created: any;
    updated: any;
}
export class SocietyResolved {
    society: Society;
    error?: any;
}
export class SocietyListResolved {
    societys: Society[];
    error?: any;
}