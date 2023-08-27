import QRPolynomial = require("./QRPolynomial");
export let PATTERN_POSITION_TABLE: number[][];
export let G15: number;
export let G18: number;
export let G15_MASK: number;
export function getBCHTypeInfo(data: any): number;
export function getBCHTypeNumber(data: any): number;
export function getBCHDigit(data: any): number;
export function getPatternPosition(typeNumber: any): number[];
export function getMask(maskPattern: any, i: any, j: any): boolean;
export function getErrorCorrectPolynomial(errorCorrectLength: any): QRPolynomial;
export function getLengthInBits(mode: any, type: any): 8 | 10 | 12 | 11 | 9 | 14 | 16 | 13;
export function getLostPoint(qrCode: any): number;
