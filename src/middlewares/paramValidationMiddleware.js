import CreateError from 'http-errors'

const paramValidation = (req,res,next)=>{
    const {id} = req.params;
    if(isNaN(id)){
        next(CreateError(406, 'not a valid param'))
    }   
    else{
        next();   
    }
}
export default paramValidation;