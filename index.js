#!/usr/bin/env node

const readline = require('readline');

class GreetingApp {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    async start() {
        console.log('🚀 Welcome to the ab project!');
        console.log('===============================');
        console.log('A versatile workspace for rapid development and experimentation.\n');
        
        await this.interactiveMode();
    }

    async interactiveMode() {
        return new Promise((resolve) => {
            this.rl.question('What\'s your name? ', (name) => {
                if (name.trim()) {
                    console.log(`\n✨ Hello, ${name}! Nice to meet you!`);
                    console.log('🔧 This workspace is ready for your next amazing project.');
                    console.log('📚 Feel free to explore and build something incredible!');
                } else {
                    console.log('\n👋 Hello there! Thanks for trying out the ab project.');
                    console.log('🔧 This workspace is ready for development and experimentation.');
                }
                
                console.log('\n📅 Last Updated: December 2024');
                console.log('Happy coding! 🎉\n');
                
                this.rl.close();
                resolve();
            });
        });
    }

    static getRandomTip() {
        const tips = [
            "💡 Tip: Start small and iterate quickly!",
            "🎯 Tip: Focus on solving real problems!",
            "🚀 Tip: Don't be afraid to experiment!",
            "📝 Tip: Document your learning journey!",
            "🤝 Tip: Collaborate and share your ideas!"
        ];
        return tips[Math.floor(Math.random() * tips.length)];
    }
}

// Handle command line arguments
if (process.argv.includes('--tip')) {
    console.log(GreetingApp.getRandomTip());
    process.exit(0);
}

if (process.argv.includes('--version')) {
    const pkg = require('./package.json');
    console.log(`ab v${pkg.version}`);
    process.exit(0);
}

if (process.argv.includes('--help')) {
    console.log(`
Usage: node index.js [options]

Options:
  --help     Show this help message
  --version  Show version information
  --tip      Get a random development tip

Without options, starts interactive mode.
    `);
    process.exit(0);
}

// Start the application
const app = new GreetingApp();
app.start().catch(console.error);