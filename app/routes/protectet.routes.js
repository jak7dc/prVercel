import express from 'express'
import { expressjwt } from "express-jwt";
import { findAssignUser } from '../controller/user.controller.js';
import config from '../config.js';
// PROTECTED ROTES

export const validateJwt = expressjwt({ secret: config.strKey, algorithms: ["HS256"] })
export const isAuthenticated = express.Router().use(validateJwt, findAssignUser)