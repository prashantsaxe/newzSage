"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publisherController_1 = require("../controller/publisherController");
const authmiddleware_1 = require("../middlewares/authmiddleware");
const publisherController_2 = require("../controller/publisherController");
const router = (0, express_1.Router)();
router.post('/signup', authmiddleware_1.authMiddleware, publisherController_1.createPublisher);
router.post('/signin', publisherController_2.signInPublisher);
exports.default = router;
