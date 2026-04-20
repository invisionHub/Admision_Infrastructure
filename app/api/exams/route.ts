import { ExamController } from "@/backend/controller/exam/exam.controller";
import { createExamSchema, TCreateExam } from "@/backend/lib/zod-schema";
import { globalErrorHandler } from "@/backend/middleware/globalErrorHandler";
import { zodValidator } from "@/backend/middleware/validator";
import { NextRequest, NextResponse } from "next/server";



export type TCreateExamData = {
    examData: TCreateExam,
    token: string
}
const createExam = async (request: NextRequest, data: TCreateExamData) => {
    const examController = new ExamController()
    return await examController.createExam(data)
}

export const POST = globalErrorHandler(zodValidator({ handler: createExam, schema: createExamSchema }))

export async function GET (request: NextRequest) {
    const response = NextResponse.json({ message: "GET exam route working properly" })
    return response
}
