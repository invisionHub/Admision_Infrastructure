import { database } from "../db";
import { exam } from "../db/schema";
import { TCreateExam } from "./types";



export class ExamRepository {
    private db: typeof database

    constructor () {
        this.db = database
    }

    async createExam (examData: TCreateExam) {
        await this.db.insert(exam).values(examData)
    }
    async addSubjects () {

    }
}