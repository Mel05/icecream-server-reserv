"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRootRouter = void 0;
const express_1 = __importDefault(require("express"));
const rootController_1 = require("../controllers/rootController");
const getRootRouter = (db) => {
    const router = express_1.default.Router();
    router.get('/', rootController_1.get);
    return router;
};
exports.getRootRouter = getRootRouter;
