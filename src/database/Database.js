import {UserType, UserData} from './User_data';

// Map of <username, userData>
let database = new Map();

function addDonor(username, name) {
    database.set(username, new UserData(name, UserType.Donor))
}

export {database, addDonor}