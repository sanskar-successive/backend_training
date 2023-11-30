import CreateError from 'http-errors';
const queryValidation = (req, res, next) => {
    try {
        const query = req.query;
        console.log(query);
        if (!Object.keys(query).length) {
            next();
            return;
        }
        const queryToCheck = query.query1;
        if (isNaN(queryToCheck)) {
            next(CreateError(406, 'not a numeric value'));
        }
        else {
            next();
        }
    }
    catch (err) {
        next(CreateError(500, 'internal server error'));
    }
};
export default queryValidation;
