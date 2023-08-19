var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function fetchAPI(ingredient) {
    return __awaiter(this, void 0, void 0, function* () {
        // * For Static file
        // const url = '../../notes/response.json';
        // * API Settings
        const url = `https://low-carb-recipes.p.rapidapi.com/search?name=${ingredient}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c854b6e902msh3a5a404a2c7fe1ep103aa1jsn8e727021425b',
                'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com',
            },
        };
        try {
            const response = yield fetch(url, options);
            if (!response.ok) {
                if (response.status === 404) {
                    return null;
                }
                else {
                    throw new Error('API request failed.');
                }
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.log(`${error}`);
            throw error;
        }
    });
}
