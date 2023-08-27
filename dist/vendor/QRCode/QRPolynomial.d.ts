export = QRPolynomial;
declare function QRPolynomial(num: any, shift: any): void;
declare class QRPolynomial {
    constructor(num: any, shift: any);
    num: any[];
    get: (index: any) => any;
    getLength: () => number;
    multiply: (e: any) => QRPolynomial;
    mod: (e: any) => any;
}
