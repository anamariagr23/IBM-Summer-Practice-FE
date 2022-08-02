import { Timestamp } from "rxjs";

export interface AnswerDetails{
    id?: string;
    userId?: number;
    pollId?: number;
    voteDate?: Date;
    voteRating:number;
    comment:string;

}