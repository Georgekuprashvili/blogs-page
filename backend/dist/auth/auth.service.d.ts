import { SignUpDto } from './dto/SignUp.dto';
import { Model } from 'mongoose';
import { User } from 'src/users/schema/user.entity';
import { SignInDto } from './dto/SignIn.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    signUp({ fullName, email, password, userImage }: SignUpDto): Promise<{
        message: string;
        data: {
            fullName: string;
            email: string;
            userImage: string | undefined;
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    signIn({ email, password }: SignInDto): Promise<string>;
    getCurrentUser(userId: string): Promise<(import("mongoose").Document<unknown, {}, User, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
