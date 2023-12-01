import CreateError from 'http-errors';
const customHeader = (custom_header) => {
    return (req, res, next) => {
        try {
            if (!Object.keys(custom_header).length) {
                next(CreateError(411, 'header is not provided'));
                next();
            }
            else {
                res.set(custom_header);
                next();
            }
        }
        catch (err) {
            next(CreateError(500, 'internal server error'));
        }
    };
};
export default customHeader;
