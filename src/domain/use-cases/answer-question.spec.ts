import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

test("create an anser to a question", () => {
  const answer = new AnswerQuestionUseCase().execute({
    instructorId: "1",
    questionId: "2",
    content: "Nova resposta",
  });

  expect(answer.content).toEqual("Nova resposta");
});
