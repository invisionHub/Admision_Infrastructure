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


export type TBaseAuth = z.infer<typeof baseAuthSchema>
export type TcreateSchool = z.infer<typeof createSchoolSchema>