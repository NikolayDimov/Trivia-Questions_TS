interface SingleQuestion {
    correct_answer: string;
    incorrect_answers: string;
    category: string;
    difficulty: string;
    question: string;
}

interface QuestionArray {
    result: Array<SingleQuestion>;
}

interface FunData {
    funFactElement: string;
}
