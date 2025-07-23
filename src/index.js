/**
 * Main entry point for the ab project
 * A versatile workspace for rapid development and experimentation
 */

const { Calculator } = require('./calculator');
const { Utils } = require('./utils');

function main() {
    console.log('🚀 Welcome to the ab project!');
    
    const calc = new Calculator();
    const result = calc.add(10, 5);
    
    console.log(`Calculator example: 10 + 5 = ${result}`);
    
    const greeting = Utils.formatMessage('Hello from ab project!');
    console.log(greeting);
    
    console.log('✨ Happy coding!');
}

if (require.main === module) {
    main();
}

module.exports = { main };
