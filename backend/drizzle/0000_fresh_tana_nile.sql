CREATE TABLE "answers" (
	"id" uuid PRIMARY KEY NOT NULL,
	"attempt-id" uuid NOT NULL,
	"question-id" uuid NOT NULL,
	"answer" text NOT NULL,
	"is-correct" boolean,
	"score" integer
);
--> statement-breakpoint
CREATE TABLE "exams" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"status" text NOT NULL,
	"duration" integer NOT NULL,
	"total-score" integer NOT NULL,
	"school-id" uuid NOT NULL,
	"start-date" timestamp with time zone,
	"close-date" timestamp with time zone,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exam-attempts" (
	"id" uuid PRIMARY KEY NOT NULL,
	"exam-id" uuid NOT NULL,
	"student-id" uuid NOT NULL,
	"token" text NOT NULL,
	"startedAt" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"score" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exam-registrations" (
	"id" uuid PRIMARY KEY NOT NULL,
	"exam-id" uuid NOT NULL,
	"student-id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "questions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"exam-id" uuid NOT NULL,
	"subject-id" uuid NOT NULL,
	"type" text NOT NULL,
	"question-text" text NOT NULL,
	"options" json,
	"correct-answer" text NOT NULL,
	"score" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "school-table" (
	"id" uuid PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"email" text NOT NULL,
	"password_hash" text NOT NULL,
	"is_verified" boolean NOT NULL,
	"failed_attempts" integer DEFAULT 0,
	"locked_until" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "school-table_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"school_id" uuid NOT NULL,
	"token_hash" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"revoked" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "students" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subject" (
	"id" uuid PRIMARY KEY NOT NULL,
	"exam-id" uuid NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "verification_tokens" (
	"id" uuid PRIMARY KEY NOT NULL,
	"school_id" uuid NOT NULL,
	"token_hash" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"used" boolean DEFAULT false NOT NULL
);
