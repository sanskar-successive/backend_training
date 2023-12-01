var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import CreateError from 'http-errors';
const getGeoLocation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const key = "29f6aafef213de059431ac964c670b6d";
        const ip = "103.83.71.179";
        const response = yield axios.get(`http://api.ipstack.com/${ip}?access_key=${key}`);
        const region = response.data.country_name;
        if (region === "India") {
            next();
        }
        else {
            next(CreateError(401, 'not authorized'));
        }
    }
    catch (err) {
        next(CreateError(403, 'error occured in data fetching'));
    }
});
export default getGeoLocation;
