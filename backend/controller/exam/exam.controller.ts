import { TCreateExam, TCreateSubject } from "@/backend/lib/zod-schema";
import { ExamService } from "./exam.serivce";
import { NextResponse } from "next/server";
import { TCreateExamData } from "@/app/api/exams/route";


// TODO UPGRADE ADD MULTIPLE SUBJECTS

export class ExamController {

    private examService: ExamService

    constructor () {
        this.examService = new ExamService()
    }

    async createExam (data: TCreateExamData) {
        const { examData, token } = data
        await this.examService.createExam(examData, token)
        return NextResponse.json({ message: "exam creation succesful" }, { status: 200 })
    }

    async addSubjects (data: { subjectData: TCreateSubject, examId: string }) {
        const { subjectData, examId } = data
        await this.examService.addSubject(subjectData, examId)
        return NextResponse.json({ message: "subjects added succesfully" }, { status: 201 })
    }


}