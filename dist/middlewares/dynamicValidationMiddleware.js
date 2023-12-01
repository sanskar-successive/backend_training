import validationConfig from "../utils/validationConfig.js";
import CreateError from 'http-errors';
const dynamicValidation = (req, res, next) => {
    try {
        const path = req.url;
        if (Object.keys(validationConfig).includes(path)) {
            const schema = validationConfig[path];
            const toValidate = req.body;
            if (!Object.keys(toValidate).length) {
                next(CreateError(411, 'got an empty object in body'));
                return;
            }
            const { value, error } = schema.validate(toValidate);
            if (error) {
                next(CreateError(406, 'object in body is not acceptable'));
                return;
            }
        }
        next();
    }
    catch (err) {
        next(CreateError(500, 'internal server error'));
    }
};
export default dynamicValidation;
