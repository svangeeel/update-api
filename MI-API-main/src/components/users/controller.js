async function addUser(params) {
    const {
        auth,
        email,
        password,
        displayName
    } = params;

    const user = await auth.createUser({
        email,
        password,
        displayName
    });

    return user;

}

async function getUser(params) {
    const {auth, email} = params;

    const user = await auth.getUserByEmail(email);

    return user;
}

async function updateUser(params) {
    const { auth, email, displayName, password } = params;

    const user = await auth.updateUserByEmail(email, {
        displayName,
        password,
    });

    return user;
}
module.exports = {
    addUser,
    getUser,
    updateUser
};