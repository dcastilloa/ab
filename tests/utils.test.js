const { 
    formatDate, 
    generateId, 
    validateEmail, 
    capitalize, 
    delay 
} = require('../src/utils');

const assert = require('assert');

console.log('🧪 Running tests...\n');

console.log('Testing generateId...');
const id1 = generateId();
const id2 = generateId();
assert(typeof id1 === 'string', 'generateId should return a string');
assert(id1.length === 9, 'generateId should return 9 character string');
assert(id1 !== id2, 'generateId should return unique values');
console.log('✅ generateId tests passed\n');

console.log('Testing validateEmail...');
assert(validateEmail('test@example.com') === true, 'Should validate correct email');
assert(validateEmail('invalid-email') === false, 'Should reject invalid email');
assert(validateEmail('test@') === false, 'Should reject incomplete email');
console.log('✅ validateEmail tests passed\n');

console.log('Testing capitalize...');
assert(capitalize('hello') === 'Hello', 'Should capitalize first letter');
assert(capitalize('WORLD') === 'World', 'Should handle uppercase input');
assert(capitalize('tEST') === 'Test', 'Should handle mixed case');
console.log('✅ capitalize tests passed\n');

console.log('Testing formatDate...');
const formatted = formatDate(new Date('2024-01-01'));
assert(typeof formatted === 'string', 'formatDate should return a string');
assert(formatted.includes('2024'), 'Should include the year');
console.log('✅ formatDate tests passed\n');

console.log('Testing delay...');
(async () => {
    const start = Date.now();
    await delay(100);
    const elapsed = Date.now() - start;
    assert(elapsed >= 90 && elapsed <= 150, 'delay should wait approximately correct time');
    console.log('✅ delay tests passed\n');
    
    console.log('🎉 All tests passed!');
})();