"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_error_1 = require("../helpers/response_error");
class BaseService {
    constructor(repository) {
        this.create = async (entity) => {
            try {
                await this._repository.create(entity);
                return {
                    status: 201,
                    message: 'success'
                };
            }
            catch (error) {
                return (0, response_error_1.responses)(error, `${this._repository.constructor.name} method create`);
            }
        };
        this.all = async () => {
            try {
                console.log(`${this._repository.constructor.name} method create`);
                const data = await this._repository.getAll();
                return {
                    status: 200,
                    message: 'success',
                    data
                };
            }
            catch (error) {
                return (0, response_error_1.responses)(error, `${this._repository.constructor.name} method all`);
            }
        };
        this._repository = repository;
    }
}
exports.default = BaseService;
//# sourceMappingURL=base.service.js.map