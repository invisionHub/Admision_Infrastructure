import { boolean, integer, json, pgTable, text, timestamp, uuid, } from "drizzle-orm/pg-core";
import { email } from "zod";


export const school = pgTable("school-table", {
    id: uuid('id').notNull().primaryKey(),
    name: text("text").notNull(),
    email: text("email").unique().notNull(),
    passwordHash: text("password_hash").notNull(),
    isVerified: boolean("is_verified").notNull(),
    failedAttempts: integer("failed_attempts").default(0),
    lockedUntil: timestamp("locked_until"),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow()
})

export const verificationTokens = pgTable('verification_tokens', {
    id: uuid('id').notNull().primaryKey(),
    schoolId: uuid("school_id").notNull(),
    tokenHash: text("token_hash").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    used: boolean("used").notNull().default(false),
})

export const sessions = pgTable('sessions', {
    id: uuid('id').notNull().primaryKey(),
    schoolId: uuid("school_id").notNull(),
    tokenHash: text("token_hash").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    revoked: boolean("revoked").notNull().default(false),
})

// TODO define status as enum
// createdBy to userID for refrence point
export const exams = pgTable("exams", {
    id: uuid("id").notNull().primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull(),
    description: text("description"),
    status: text("status").notNull(),
    duration: text("duration").notNull(),
    totalScore: integer("total-score").notNull(),
    userId: uuid("userId").notNull(),
    startDate: timestamp("start-date", { withTimezone: true }),
    closeDate: timestamp("close-date", { withTimezone: true }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const subject = pgTable("subject", {
    id: uuid("id").notNull().primaryKey(),
    examId: uuid("exam-id").notNull(),
    name: text("name").notNull()
})

export const questions = pgTable("questions", {
    id: uuid("id").notNull().primaryKey(),
    examId: uuid("exam-id").notNull(),
    subjectId: uuid("subject-id").notNull(),
    type: text("type").notNull(),
    questionText: text("question-text").notNull(),
    options: json("options"),
    correctAnswer: text("correct-answer").notNull(),
    score: integer("score").notNull()
})


export const students = pgTable("students", {
    id: uuid("id").notNull().primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull()
})


export const examRegistrations = pgTable("exam-registrations", {
    id: uuid("id").notNull().primaryKey(),
    examId: uuid("exam-id").notNull(),
    studentId: uuid("student-id").notNull()
})


export const examAttempts = pgTable("exam-attempts", {
    id: uuid("id").notNull().primaryKey(),
    examId: uuid("exam-id").notNull(),
    studentId: uuid("student-id").notNull(),
    token: text("token").notNull(),
    startedAt: text("startedAt").notNull(),
    submittedAt: timestamp('created_at').notNull().defaultNow(),
    score: integer("score").notNull()
})


export const answers = pgTable("answers", {
    id: uuid("id").notNull().primaryKey(),
    attemptId: uuid("attempt-id").notNull(),
    questionsId: uuid("question-id").notNull(),
    answer: text("answer").notNull(),
    isCorrect: boolean("is-correct"),
    score: integer("score")
})

// POST / api / exams
// GET / api / exams
// GET / api / exams /: id
// PATCH / api / exams /: id
// POST / api / exams /: id / publish