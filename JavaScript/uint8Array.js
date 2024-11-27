const numbers = [10, 20, 30, 40, 50];
const uint8Array = new Uint8Array(numbers); // Creates a Uint8Array from the numbers array
console.log(uint8Array); // Uint8Array(5) [10, 20, 30, 40, 50]

// Create an ArrayBuffer with 16 bytes (16 bytes = 128 bits)
const buffer = new ArrayBuffer(16);

// Create a Typed Array view of the buffer
const int32View = new Int32Array(buffer);
console.log(int32View); // Int32Array(4) [0, 0, 0, 0]
