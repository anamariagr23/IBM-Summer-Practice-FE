import { Timestamp } from "rxjs";

export interface AnswerDetails{
    id?: number;
    userId?: number;
    pollId?: number;
    voteDate?: Date;
    vottingDetail:number;
    content:string;

}