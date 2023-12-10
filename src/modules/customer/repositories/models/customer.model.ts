import { Schema, model } from "mongoose";
import ICustomer from "../../entities/ICustomer";


const customerSchema: Schema<ICustomer> = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  password : {type : String, required : true},
  confirmPassword : {type : String, required : true}

});

const Customer = model<ICustomer>("Customer", customerSchema);
export default Customer;
