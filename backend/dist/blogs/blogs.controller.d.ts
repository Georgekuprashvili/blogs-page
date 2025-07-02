import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
export declare class BlogsController {
    private readonly blogsService;
    constructor(blogsService: BlogsService);
    create(createBlogDto: CreateBlogDto, userId: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/blog.entity").Blog, {}> & import("./schema/blog.entity").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/blog.entity").Blog, {}> & import("./schema/blog.entity").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schema/blog.entity").Blog, {}> & import("./schema/blog.entity").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/blog.entity").Blog, "find", {}>;
    findMyBlogs(userId: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/blog.entity").Blog, {}> & import("./schema/blog.entity").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schema/blog.entity").Blog, {}> & import("./schema/blog.entity").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/blog.entity").Blog, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/blog.entity").Blog, {}> & import("./schema/blog.entity").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schema/blog.entity").Blog, {}> & import("./schema/blog.entity").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/blog.entity").Blog, "findOne", {}>;
    update(id: string, updateBlogDto: UpdateBlogDto, userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/blog.entity").Blog, {}> & import("./schema/blog.entity").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    remove(id: string, userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/blog.entity").Blog, {}> & import("./schema/blog.entity").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
