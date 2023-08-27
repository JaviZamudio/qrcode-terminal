export default QRCode;
declare class QRCode {
    static createData(typeNumber: any, errorCorrectLevel: any, dataList: any): any[];
    static createBytes(buffer: any, rsBlocks: any): any[];
    constructor(typeNumber: any, errorCorrectLevel: any);
    typeNumber: any;
    errorCorrectLevel: any;
    modules: any[] | null;
    moduleCount: number;
    dataCache: any[] | null;
    dataList: any[];
    addData(data: any): void;
    isDark(row: any, col: any): any;
    getModuleCount(): number;
    make(): void;
    makeImpl(test: any, maskPattern: any): void;
    setupPositionProbePattern(row: any, col: any): void;
    getBestMaskPattern(): number;
    createMovieClip(target_mc: any, instance_name: any, depth: any): any;
    setupTimingPattern(): void;
    setupPositionAdjustPattern(): void;
    setupTypeNumber(test: any): void;
    setupTypeInfo(test: any, maskPattern: any): void;
    mapData(data: any, maskPattern: any): void;
}
declare namespace QRCode {
    let PAD0: number;
    let PAD1: number;
}
