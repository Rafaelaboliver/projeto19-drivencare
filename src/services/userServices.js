import bcrypt from 'bcrypt';
import userRepositories from '../repositories/userRepositories.js';

async function signup({ username, email, password, gender }) {
    const {rows: user} = await userRepositories.findByEmail(email)
    if(user.length !== 0) return 'User already exists';

    const hashPass = await bcrypt.hash(password, 10);
    await userRepositories.signup({ username, email, password: hashPass, gender})
}

export default {
    signup,
}