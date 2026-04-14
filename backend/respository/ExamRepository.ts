import { database } from "../db";



export class ExamRepository {
    private db: typeof database

    constructor () {
        this.db = database
    }
}