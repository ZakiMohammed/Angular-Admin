export class Customer {
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
export class CustomerResolved {
    customer: Customer;
    error?: any;
}
export class CustomerListResolved {
    customers: Customer[];
    error?: any;
}