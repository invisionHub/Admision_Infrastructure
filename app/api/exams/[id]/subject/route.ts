import { ExamController } from "@/backend/controller/exam/exam.controller"
import { createSubjectSchema, TCreateSubject } from "@/backend/lib/zod-schema"
import { globalErrorHandler } from "@/backend/middleware/globalErrorHandler"
import { zodValidator } from "@/backend/middleware/validator"
import { NextRequest, NextResponse } from "next/server"

async function addSubjects (request: NextRequest, data: TCreateSubject, { params }: { params: Promise<{ id: string }> },) {
    const { id } = await params
    const examcontroller = new ExamController()
    return await examcontroller.addSubjects({ examId: id, subjectData: data })
}

export const POST = globalErrorHandler(zodValidator<TCreateSubject>({ handler: addSubjects, schema: createSubjectSchema }))


