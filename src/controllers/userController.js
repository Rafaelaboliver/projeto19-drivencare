import userServices from "../services/userServices.js";

async function signup(req, res) { 
    const { username, email, password, gender} = req.body;

    try {
        await userServices.signup({username, email, password, gender})

        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export default {
    signup,
}