import { Router } from "express";
import {
  welcome,
  createPost,
  getPosts,
  updatePost,
  getPost,
  deletePost,
} from "../controllers/index.controllers";

const router: Router = Router();
const routeBase: string = "/api/v1";

router.get(`${routeBase}/`, welcome);
router.get(`${routeBase}/posts`, getPosts);
router.get(`${routeBase}/posts/:id`, getPost);
router.post(`${routeBase}/posts`, createPost);
router.put(`${routeBase}/posts/:id`, updatePost);
router.delete(`${routeBase}/posts/:id`, deletePost);

export { router };
