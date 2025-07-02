import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): string;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/user.entity").User, {}> & import("./schema/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schema/user.entity").User, {}> & import("./schema/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/user.entity").User, "find", {}>;
    updateMe(userId: string, body: {
        fullName?: string;
        image?: string;
    }): Promise<{
        _id: import("mongoose").Types.ObjectId;
        fullName: string;
        email: string;
        userImage: string;
    }>;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
