export = QRRSBlock;
declare function QRRSBlock(totalCount: any, dataCount: any): void;
declare class QRRSBlock {
    constructor(totalCount: any, dataCount: any);
    totalCount: any;
    dataCount: any;
}
declare namespace QRRSBlock {
    let RS_BLOCK_TABLE: number[][];
    function getRSBlocks(typeNumber: any, errorCorrectLevel: any): QRRSBlock[];
    function getRsBlockTable(typeNumber: any, errorCorrectLevel: any): number[] | undefined;
}
