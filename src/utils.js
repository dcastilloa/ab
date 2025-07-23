/**
 * Utility functions for the ab project
 */
class Utils {
    static formatMessage(message) {
        const timestamp = new Date().toISOString();
        return `[${timestamp}] ${message}`;
    }
    
    static capitalizeFirst(str) {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

module.exports = { Utils };
