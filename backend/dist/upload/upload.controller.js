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
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const cloudinary_config_1 = require("../config/cloudinary.config");
let UploadController = class UploadController {
    async uploadFile(file) {
        if (!file || !file.buffer) {
            throw new common_1.InternalServerErrorException('File or buffer not provided');
        }
        try {
            const result = await new Promise((resolve, reject) => {
                console.log(file, "ფილეეეეეეეეეეედსადს");
                const uploadStream = cloudinary_config_1.default.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
                    if (error) {
                        console.error('Cloudinary Error:', error);
                        return reject(new common_1.InternalServerErrorException('Upload failed'));
                    }
                    console.log(result, 'resuultt');
                    resolve(result);
                });
                uploadStream.end(file.buffer);
            });
            return result;
        }
        catch (error) {
            console.error('Upload failed:', error);
            throw new common_1.InternalServerErrorException('Upload to Cloudinary failed');
        }
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { storage: (0, multer_1.memoryStorage)() })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadFile", null);
exports.UploadController = UploadController = __decorate([
    (0, common_1.Controller)('upload')
], UploadController);
//# sourceMappingURL=upload.controller.js.map