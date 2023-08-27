"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QRMode_1 = require("./QRMode");
class QR8bitByte {
    constructor(data) {
        this.mode = QRMode_1.MODE_8BIT_BYTE;
        this.data = data;
    }
    getLength() {
        return this.data.length;
    }
    write(buffer) {
        for (var i = 0; i < this.data.length; i++) {
            // not JIS ...
            buffer.put(this.data.charCodeAt(i), 8);
        }
    }
}
exports.default = QR8bitByte;
