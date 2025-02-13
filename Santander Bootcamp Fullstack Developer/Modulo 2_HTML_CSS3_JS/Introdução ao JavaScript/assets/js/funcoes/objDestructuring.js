const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        fistName: 'John',
        lastName: 'Doe'
    }
};

function userId({ id }) {
    return console.log('ID:', id);
}

function getFullName({
    fullName: {
        fistName: first,
        lastName: last
    }
}) {
    return console.log(`Full name: ${first} ${last}`);
}
userId(user)
getFullName(user)