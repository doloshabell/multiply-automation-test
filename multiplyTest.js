const assert = require('assert');
const multiply = require('./multiply');


try {
    assert.strictEqual(multiply(5,5), 25);
    assert.strictEqual(multiply(4,4), 16);
    assert.strictEqual(multiply(2,2), 4);
    console.log("Seluruh pengujian berhasil")
} catch (error) {
    console.log("Ada pengujian gagal ", error.message);
    
}