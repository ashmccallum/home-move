export class Property {

    constructor(
        public id: number,
        public postcode: string,
        public address: string,
        public owner: string,
        public buyer: string,
        public offer_price: number,
        public offer_date: number
    ) {}
}