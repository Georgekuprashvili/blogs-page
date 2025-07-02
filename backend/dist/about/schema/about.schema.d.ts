import mongoose from 'mongoose';
export declare class About {
    user: mongoose.Types.ObjectId;
    content: string;
}
export declare const AboutSchema: mongoose.Schema<About, mongoose.Model<About, any, any, any, mongoose.Document<unknown, any, About, any> & About & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, About, mongoose.Document<unknown, {}, mongoose.FlatRecord<About>, {}> & mongoose.FlatRecord<About> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
