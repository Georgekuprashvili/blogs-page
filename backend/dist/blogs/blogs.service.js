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
exports.BlogsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BlogsService = class BlogsService {
    blogModel;
    constructor(blogModel) {
        this.blogModel = blogModel;
    }
    create(createBlogDto, userId) {
        if (!userId)
            throw new common_1.ForbiddenException('User not authenticated');
        return this.blogModel.create({ ...createBlogDto, author: userId });
    }
    findAll() {
        return this.blogModel.find().populate('author', 'fullName');
    }
    findByUser(userId) {
        return this.blogModel
            .find({ author: userId })
            .sort({ createdAt: -1 })
            .populate('author', 'fullName');
    }
    findOne(id) {
        return this.blogModel.findById(id).populate('author', 'fullName');
    }
    async update(id, dto, userId) {
        const blog = await this.blogModel.findById(id);
        if (!blog)
            throw new common_1.NotFoundException('Blog not found');
        if (blog.author.toString() !== userId) {
            throw new common_1.ForbiddenException('Not authorized to update this blog');
        }
        return this.blogModel.findByIdAndUpdate(id, dto, { new: true });
    }
    async delete(blogId, userId) {
        const blog = await this.blogModel.findById(blogId);
        if (!blog)
            throw new common_1.NotFoundException('Blog not found');
        if (blog.author.toString() !== userId) {
            throw new common_1.ForbiddenException('Not authorized to delete this blog');
        }
        return this.blogModel.findByIdAndDelete(blogId);
    }
};
exports.BlogsService = BlogsService;
exports.BlogsService = BlogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('blog')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BlogsService);
//# sourceMappingURL=blogs.service.js.map