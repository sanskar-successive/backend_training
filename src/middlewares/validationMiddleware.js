import joi from "joi";

const validateUser = (schema) => {
  return (req, res, next) => {
    const user = req.body;
    const { value, error } = schema.validate(user);

    if (error) {
      return res.status(400).json({ error: "Invalid user" });
    }
    next();
  };
};

export default validateUser;