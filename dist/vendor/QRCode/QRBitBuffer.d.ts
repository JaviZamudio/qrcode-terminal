export = QRBitBuffer;
declare function QRBitBuffer(): void;
declare class QRBitBuffer {
    buffer: any[];
    length: number;
    get: (index: any) => boolean;
    put: (num: any, length: any) => void;
    getLengthInBits: () => number;
    putBit: (bit: any) => void;
}
