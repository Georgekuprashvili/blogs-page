import { Model } from 'mongoose';
import { Blog } from './schema/blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
export declare class BlogsService {
    private blogModel;
    constructor(blogModel: Model<Blog>);
    create(createBlogDto: CreateBlogDto, userId: string): Promise<import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Blog, "find", {}>;
    findByUser(userId: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Blog, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Blog, "findOne", {}>;
    update(id: string, dto: UpdateBlogDto, userId: string): Promise<(import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    delete(blogId: string, userId: string): Promise<(import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
