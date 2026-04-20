import { TCreateExam, TCreateSubject } from "@/backend/lib/zod-schema";
import { ExamRepository } from "@/backend/respository/ExamRepository";
import { signAccessToken, verifyAccessToken } from "@/backend/utils/jwt";
import { JwtPayload } from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid"

export class ExamService {
    private examRepository: ExamRepository

    constructor () {
        this.examRepository = new ExamRepository()
    }

    async createExam (examData: TCreateExam, token: string) {
        const payload = verifyAccessToken(token) as JwtPayload
        const { sessionId } = payload

        const examId = uuidv4()
        const startDate = new Date(examData.startDate)
        const closeDate = new Date(examData.closeDate)
        await this.examRepository.createExam({ ...examData, id: examId, startDate, closeDate }, sessionId)
        return
    }

    async addSubject (subjectData: TCreateSubject, examId: string) {
        const { name } = subjectData
        const subjectID = uuidv4()
        await this.examRepository.addSubjects({ examId: examId, id: subjectID, name })
        return
    }

    async addQuestions (subjectData: TCreateSubject, examId: string) {
        const { name } = subjectData
        const subjectID = uuidv4()
        await this.examRepository.addSubjects({ examId: examId, id: subjectID, name })
        return
    }
}