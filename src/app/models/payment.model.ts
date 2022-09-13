export class Payment {
    'id_NUMBER'!:number;
    'mode_OF_PAYMENT'!: string;
    'reference_NUMBER'!:string;
    'issue_DATE'!:Date;
    'expiry_DATE'!:Date;
    'bank'!:string;
    'branch'!:string;
    'amount'!:number;
    'remarks'!:string;

    constructor() {}
}