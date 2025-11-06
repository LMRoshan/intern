import jwt from 'jsonwebtoken';
import 'dotenv/config';
const JWT_SECRET = process.env.JWT_SECRET;

const fetchUser = (req, res, next) => {
    const token = req.header("authToken");
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}

export default fetchUser;