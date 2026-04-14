import { database } from "../db";
import { exam, question, subject } from "../db/schema";
import { TDbExam, TDbQuestion, TDbSubject } from "./types";



export class ExamRepository {
    private db: typeof database

    constructor () {
        this.db = database
    }

    async createExam (examData: TDbExam) {
        await this.db.insert(exam).values(examData)
    }
    async addSubjects (subjectData: TDbSubject) {
        await this.db.insert(subject).values(subjectData)
    }
    async addQuestions (questionData: TDbQuestion) {
        await this.db.insert(question).values(questionData)
    }
}