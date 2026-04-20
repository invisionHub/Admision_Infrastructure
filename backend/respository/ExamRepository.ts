import { database } from "../db";
import { exam, question, sessions, subject } from "../db/schema";
import { TCreateExam } from "../lib/zod-schema";
import { TDbExam, TDbQuestion, TDbSubject } from "./types";
import { eq } from "drizzle-orm"


export class ExamRepository {
    private db: typeof database

    constructor () {
        this.db = database
    }

    async createExam (examData: Omit<TDbExam, "schoolId">, sessionId: string,) {
        return await this.db.transaction(async (tsx) => {
            const { schoolId } = await tsx.select({ schoolId: sessions.schoolId }).from(sessions).where(eq(sessions.id, sessionId)).then((res) => res[ 0 ] || null)
            await tsx.insert(exam).values({ ...examData, schoolId })
        })
    }
    async addSubjects (subjectData: TDbSubject) {
        await this.db.insert(subject).values(subjectData)
    }
    async addQuestions (questionData: TDbQuestion) {
        await this.db.insert(question).values(questionData)
    }
}