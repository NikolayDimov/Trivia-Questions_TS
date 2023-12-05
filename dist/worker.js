var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BlobWriter, TextReader, ZipWriter } from "@zip.js/zip.js";
onmessage = (e) => __awaiter(void 0, void 0, void 0, function* () {
    const { currentCorrectScore, selectAmount, wrongAnswers, selectedCategory, selectDifficulty } = e.data;
    const resultPercentage = Math.round((currentCorrectScore / selectAmount) * 100);
    const text = `You answered ${currentCorrectScore} questions correctly of total ${selectAmount} and ${wrongAnswers} questions incorrectly. 
  Your result is ${resultPercentage}%
  You choose category of "${selectedCategory}" with difficulty "${selectDifficulty}".`;
    const zipWriter = new ZipWriter(new BlobWriter("application/zip"));
    yield zipWriter.add("QuizScore.txt", new TextReader(text));
    const blob = yield zipWriter.close();
    postMessage(blob);
});
