// Sample JavaScript file to test Claude code review workflows

function calculateSum(a, b) {
    return a + b;
}

function processUserData(userData) {
    if (!userData) {
        throw new Error("No user data provided");
    }
    
    return {
        id: userData.id,
        name: userData.name.toLowerCase(),
        email: userData.email
    };
}

const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

users.forEach(user => {
    console.log(processUserData(user));
});

module.exports = {
    calculateSum,
    processUserData
};