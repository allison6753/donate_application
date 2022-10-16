import {UserType, UserData} from './User_data';

// Map of <username, userData>
let database = new Map();

function usernameExists(username) {
    return database.has(username);
}

function correctPassword(username, password) {
    console.log(database.get(username).password);
    console.log(password);
    return database.get(username).password == password;
}

function registerDonor(username, password) {
    database.set(username, new UserData(password, UserType.Donor))
}

function registerShelter(username, password) {
    database.set(username, new UserData(password, UserType.Shelter))
}

// for debugging
function printDatabase() {
    console.log(database);
}

export {usernameExists, correctPassword, registerDonor, registerShelter, printDatabase}