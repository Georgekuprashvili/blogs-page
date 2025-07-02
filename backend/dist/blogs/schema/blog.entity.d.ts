import mongoose from 'mongoose';
export declare class Blog {
    title: string;
    summary: string;
    author: mongoose.Types.ObjectId;
}
export declare const BlogSchema: mongoose.Schema<Blog, mongoose.Model<Blog, any, any, any, mongoose.Document<unknown, any, Blog, any> & Blog & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Blog, mongoose.Document<unknown, {}, mongoose.FlatRecord<Blog>, {}> & mongoose.FlatRecord<Blog> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
