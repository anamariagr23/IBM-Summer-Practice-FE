import { Timestamp } from "rxjs";

export interface AnswerDetails{
    id?: string;
    userId?: number;
    pollId?: string;
    voteDate?: Date;
    voteRating:number;
    comment:string;

}