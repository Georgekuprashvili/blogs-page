"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutController = void 0;
const common_1 = require("@nestjs/common");
const about_service_1 = require("./about.service");
const isAuth_guard_1 = require("../auth/guards/isAuth.guard");
const user_decorator_1 = require("../users/decorators/user.decorator");
let AboutController = class AboutController {
    aboutService;
    constructor(aboutService) {
        this.aboutService = aboutService;
    }
    getMyAbout(userId) {
        return this.aboutService.getByUserId(userId);
    }
    updateMyAbout(userId, content) {
        return this.aboutService.update(userId, content);
    }
};
exports.AboutController = AboutController;
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(isAuth_guard_1.IsAuthGuard),
    __param(0, (0, user_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AboutController.prototype, "getMyAbout", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, user_decorator_1.UserId)()),
    __param(1, (0, common_1.Body)('content')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AboutController.prototype, "updateMyAbout", null);
exports.AboutController = AboutController = __decorate([
    (0, common_1.Controller)('about'),
    (0, common_1.UseGuards)(isAuth_guard_1.IsAuthGuard),
    __metadata("design:paramtypes", [about_service_1.AboutService])
], AboutController);
//# sourceMappingURL=about.controller.js.map