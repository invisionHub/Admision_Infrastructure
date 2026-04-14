import { InferInsertModel } from "drizzle-orm";
import { exam, school, sessions } from "../db/schema";





export type TCreateExam = InferInsertModel<typeof exam>
export type TSchoolCreateAccount = InferInsertModel<typeof school>
export type TSession = InferInsertModel<typeof sessions>