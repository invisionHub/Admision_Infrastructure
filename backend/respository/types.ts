import { InferInsertModel } from "drizzle-orm";
import { exam, question, school, sessions, subject } from "../db/schema";





export type TDbSubject = InferInsertModel<typeof subject>
export type TDbQuestion = InferInsertModel<typeof question>
export type TDbExam = InferInsertModel<typeof exam>
export type TSchoolCreateAccount = InferInsertModel<typeof school>
export type TSession = InferInsertModel<typeof sessions>