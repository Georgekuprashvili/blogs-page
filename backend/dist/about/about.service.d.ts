import { Model } from 'mongoose';
import { About } from './schema/about.schema';
export declare class AboutService {
    private aboutModel;
    constructor(aboutModel: Model<About>);
    getByUserId(userId: string): Promise<(import("mongoose").Document<unknown, {}, About, {}> & About & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | {
        content: string;
    }>;
    update(userId: string, content: string): Promise<import("mongoose").Document<unknown, {}, About, {}> & About & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
