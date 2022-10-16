function createEnumType(values) {
    const enumObject = {};
    for (const val of values) {
        enumObject[val] = val;
    }
    return Object.freeze(enumObject);
}


let UserType = createEnumType(['Donor', 'Shelter']);

class UserData {
    constructor(password, userType) {
        this.password = password;
        this.userType = userType;
    }
}

export {UserType, UserData};