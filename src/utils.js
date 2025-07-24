const formatDate = (date = new Date()) => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

module.exports = {
    formatDate,
    generateId,
    validateEmail,
    capitalize,
    delay
};