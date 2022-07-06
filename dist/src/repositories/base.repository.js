"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRepository {
    constructor(model) {
        this.model = model;
        this.all = async () => await this.model.find();
        this.create = async (entity) => await this.model.create(entity);
        this.model = model;
    }
}
exports.default = BaseRepository;
//# sourceMappingURL=base.repository.js.map