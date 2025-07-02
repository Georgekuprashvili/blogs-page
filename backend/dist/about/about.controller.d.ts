import { AboutService } from './about.service';
export declare class AboutController {
    private readonly aboutService;
    constructor(aboutService: AboutService);
    getMyAbout(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/about.schema").About, {}> & import("./schema/about.schema").About & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | {
        content: string;
    }>;
    updateMyAbout(userId: string, content: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/about.schema").About, {}> & import("./schema/about.schema").About & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
