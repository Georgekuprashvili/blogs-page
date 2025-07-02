import { AuthService } from './auth.service';
import { SignUpDto } from './dto/SignUp.dto';
import { SignInDto } from './dto/SignIn.dto';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signUpDto: SignUpDto): Promise<{
        message: string;
        data: {
            fullName: string;
            email: string;
            userImage: string | undefined;
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    signIn(signInDto: SignInDto, res: Response): Promise<{
        message: string;
    }>;
    getCurrentUser(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../users/schema/user.entity").User, {}> & import("../users/schema/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
