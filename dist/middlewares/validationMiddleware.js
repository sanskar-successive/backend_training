import { userSchema } from "../utils/schema/userSchema.js";
import CreateError from 'http-errors';
const validateUser = (req, res, next) => {
    try {
        const user = req.body;
        if (!Object.keys(user).length) {
            next(CreateError(411, 'user is empty'));
            return;
        }
        const { value, error } = userSchema.validate(user, { abortEarly: false });
        if (error) {
            res.status(406).json(error);
        }
        else
            next();
    }
    catch (err) {
        next(CreateError(500, 'internal server error'));
    }
};
export default validateUser;
