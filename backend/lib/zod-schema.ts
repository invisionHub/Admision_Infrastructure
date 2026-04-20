import z from 'zod'

// TODO SAVE THIS VALIDATION RULES INTO CONSTANT FILE

export const baseAuthSchema = z.object({
    email: z.email({ error: "Please Enter A Valid Email Address" }),
    password: z.string().min(3, { error: "Password should be at least 3 characters" })
        .max(20, { error: "Password cannot be more than 20 characters" })
})


export const createSchoolSchema = baseAuthSchema.extend({
    schoolName: z.string().min(3, { error: "School name should be at least three chracters" })
})


// title: text("title").notNull(),
// slug: text("slug").notNull(),
// description: text("description"),
// status: text("status").notNull(),
// duration: text("duration").notNull(),
// totalScore: integer("total-score").notNull(),


// transformation would be done on the frontend side.
// Frontend transfromation
export const durationSchema = z.object({
    hours: z.number().min(0).max(23),
    minutes: z.number().min(0).max(59)
}).transform((data) => {
    return data.hours * 60 + data.minutes
})


// create count down to start date
//  send an email automatically when its some days closer...
// if close date there is need for a rebulish of the exam or the link would not work
// frontend should covert dates to iso standard before sending it to the backend using zod validator and the likes
export const createExamSchema = z.object({
    title: z.string().min(3, { error: "Title must be at least 3 chracters" }).max(20, { error: "Title must not be more than 20" }),
    slug: z.string().min(3, { error: "Title must be at least 3 chracters" }).max(20, { error: "Title must not be more than 20" }),
    description: z.string().min(3, { error: "Title must be at least 3 chracters" }).max(50, { error: "Title must not be more than 20" }),
    status: z.enum([ "published", "draft", "outdated" ]),
    duration: z.number(),
    totalScore: z.number().refine((num) => num <= 0),
    startDate: z.iso.datetime(),
    closeDate: z.iso.datetime(),
})

export const createSubjectSchema = z.object({
    name: z.string().min(3, { error: "Title must be at least 3 chracters" }).max(20, { error: "Title must not be more than 20" }),
})

const mcqSchema = z.object({
    type: z.literal("MCQ"),
    questionText: z.string().min(1, { error: "Title must be at least 3 chracters" }).max(100, { error: "Title must not be more than 20" }),
    options: z.json(),
    correctAnswer: z.string().min(1, { error: "Title must be at least 3 chracters" }).max(50, { error: "Title must not be more than 20" }),
    score: z.number().refine((num) => num <= 0),
})

const trueFalseSchema = z.object({
    type: z.literal("TRUE_FALSE"),
    questionText: z.string().min(1, { error: "Title must be at least 3 chracters" }).max(100, { error: "Title must not be more than 20" }),
    options: z.json().optional(),
    correctAnswer: z.enum([ "true", "false" ]),
    score: z.number().refine((num) => num <= 0),
})

const essaySchema = z.object({
    type: z.literal("ESSAY"),
    questionText: z.string().min(1, { error: "Title must be at least 3 chracters" }).max(100, { error: "Title must not be more than 20" }),
    options: z.json().optional(),
    correctAnswer: z.string().min(1, { error: "Title must be at least 3 chracters" }).max(50, { error: "Title must not be more than 20" }),
    score: z.number().refine((num) => num <= 0),
})

export const questionsSchema = z.discriminatedUnion("type", [
    mcqSchema,
    trueFalseSchema,
    essaySchema
])



// export const questions = pgTable("questions", {
//     type: text("type").notNull(),
//     questionText: text("question-text").notNull(),
//     options: json("options"),
//     correctAnswer: text("correct-answer").notNull(),
//     score: integer("score").notNull()
// })



export type TCreateSubject = z.infer<typeof createSubjectSchema>
export type TCreateExam = z.infer<typeof createExamSchema>
export type TBaseAuth = z.infer<typeof baseAuthSchema>
export type TcreateSchool = z.infer<typeof createSchoolSchema>