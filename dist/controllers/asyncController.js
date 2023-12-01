var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const asyncHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const promise = new Promise((resolve, reject) => {
        reject("Promise nhi nibha paya");
        resolve("Promise pura kr diya");
    });
    try {
        const response = yield promise;
        res.status(200).json({ message: response });
    }
    catch (err) {
        res.status(400).json({ error: err });
    }
});
export default asyncHandler;
