import db from "../config/database.js"

async function findByEmail(email) {
    return await db.query(`
        SELECT * FROM users WHERE email=$1
    `,
        [email]
    );
}

async function signup(username, password, email, gender) {
    return await db.query(`
    INSERT INTO users (username, password, email, gender)
    VALUES ($1, $2, $3, $4)
 `,
        [username, password, email, gender]
    );
}

export default {
    findByEmail,
    signup,
}