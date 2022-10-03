import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/index.controllers";

const router: Router = Router();
const routeBase: string = "/api/v1";

router.get(`${routeBase}/users`, getUsers);
router.post(`${routeBase}/user`, createUser);
router.get(`${routeBase}/user/:id`, getUser);
router.put(`${routeBase}/user/:id`, updateUser);
router.delete(`${routeBase}/user/:id`, deleteUser);

export { router };
