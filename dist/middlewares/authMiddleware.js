import jwt from 'jsonwebtoken';
import CreateError from 'http-errors';
const authenticateUser = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            next(CreateError(403, 'token not provided'));
        }
        else {
            const decodedUser = jwt.verify(token, "123");
            req.body.user = decodedUser;
            next();
        }
    }
    catch (err) {
        next(CreateError(401, 'invalid token'));
    }
};
export default authenticateUser;
