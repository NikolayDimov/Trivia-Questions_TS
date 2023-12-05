interface SingleQuestion {
    correct_answer: string;
    incorrect_answers: Array<string>;
    category: string;
    difficulty: string;
    question: string;
}

interface FunData {
    funFactElement: string;
    fact: string;
}

interface FunDataArray {
    result: Array<FunData>;
}
