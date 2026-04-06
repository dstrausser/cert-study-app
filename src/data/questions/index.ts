import { Question } from "@/lib/types";
import { sc100Questions } from "./sc-100";

const questionBanks: Record<string, Question[]> = {
  "sc-100": sc100Questions,
};

export function getQuestions(certId: string): Question[] {
  return questionBanks[certId] || [];
}

export function getQuestionsByDomain(
  certId: string,
  domainId: string
): Question[] {
  return getQuestions(certId).filter((q) => q.domainId === domainId);
}

export function getRandomQuestions(
  certId: string,
  count: number,
  domainFilter?: string[]
): Question[] {
  let questions = getQuestions(certId);
  if (domainFilter && domainFilter.length > 0) {
    questions = questions.filter((q) => domainFilter.includes(q.domainId));
  }
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
