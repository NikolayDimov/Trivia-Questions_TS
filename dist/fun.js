"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomFunFact = exports.fetchFunData = void 0;
const limit = 30;
const api_url = `https://api.api-ninjas.com/v1/facts?limit=${limit}`;
const headers = {
    headers: {
        "X-Api-Key": "JcZkU96W5n5XuzVc/0wq3w==T6O35MaJ40uGLAFU",
        "Content-Type": "application/json",
    },
};
document.addEventListener("DOMContentLoaded", () => {
    fetchFunData();
});
function fetchFunData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newApiResponse = yield fetch(api_url, headers);
            if (!newApiResponse.ok) {
                throw new Error(`HTTP error! Status: ${newApiResponse.status}`);
            }
            const funData = yield newApiResponse.json();
            // console.log(funData);
            return funData;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.fetchFunData = fetchFunData;
function getRandomFunFact(funData) {
    const randomIndex = Math.floor(Math.random() * funData.result.length);
    return funData.result[randomIndex].fact;
}
exports.getRandomFunFact = getRandomFunFact;
