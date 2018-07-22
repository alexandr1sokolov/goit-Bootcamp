// ======================== GET ALL USERS =============================

const getAllUsers = () => {
    const url = "https://test-users-api.herokuapp.com/users";

    return fetch(url)
        .then(response => response.ok ? response.json() : null)
        .then(data => console.log('All users', data))
        .catch(error => console.log(error))
};
getAllUsers();

// ========================= GET USER BY ID ===========================

const getUserById = id => {
    const url = `https://test-users-api.herokuapp.com/users/${id}`;

    return fetch(url)
        .then(response => response.ok ? response.json() : null)
        .then(data => console.log('User by id', data))
        .catch(error => console.log(error))
};
getUserById('5b3f510a8143ae0014b30b73');

// ============================= ADD USER =============================

const addUser = (name, age) => {
    const url = `https://test-users-api.herokuapp.com/users`;

    const newUser = {
        name,
        age,
    };

    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    };

    return fetch(url, options)
        .then(response => response.ok ? response.json() : null)
        .then(data => console.log('User added',data))
        .catch(error => console.log(error))
};
addUser('Vasya', '18');
addUser('Dura', '16');

// ============================= DELETE USER ==========================

const removeUser = id => {
    const url = `https://test-users-api.herokuapp.com/users/${id}`;

    return fetch(url, { method: 'DELETE' })
        .then(response => response.ok ? response.json() : null)
        .then(data => console.log('User removed', data))
        .catch(error => console.log(error))
};
removeUser('5b54333e4633130014019c63');

// ============================ UPDATE USER =============================

const updateUser = (id, name, age) => {
    const url = `https://test-users-api.herokuapp.com/users/${id}`;

    const userToUpdate = {
        name,
        age,
    };

    const options = {
        method: 'PUT',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(userToUpdate),
    };

    return fetch(url, options)
        .then(response => response.ok ? response.json() : null)
        .then(data => console.log('User updated',data))
        .catch(error => console.log(error))
};

updateUser('5b3f510a8143ae0014b30b73','Roma','18');