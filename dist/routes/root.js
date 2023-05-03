"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rootController_ts_1 = require("../controllers/rootController.ts");
const router = new express_1.Router();
router.get('/', rootController_ts_1.get);
