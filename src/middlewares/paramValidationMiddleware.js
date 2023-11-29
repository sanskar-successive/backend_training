import CustomError from "../utils/errorClass.js";

const paramValidation = (req,res,next)=>{
    const {id} = req.params;
    if(isNaN(id)){
        next(new CustomError('not a valid param', 406))
    }
    else{
        next();   
    }
}
export default paramValidation;