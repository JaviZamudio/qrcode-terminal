import { MODE_8BIT_BYTE } from './QRMode';

class QR8bitByte {
	constructor(data) {
		this.mode = MODE_8BIT_BYTE;
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

export default QR8bitByte;
