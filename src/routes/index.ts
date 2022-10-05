import { Router } from "express";
import {
  welcome,
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/index.controllers";

const router: Router = Router();
const routeBase: string = "/api/v2";

router.get(`${routeBase}/`, welcome);
router.get(`${routeBase}/posts`, getPosts);
router.get(`${routeBase}/posts/:_id`, getPost);
router.post(`${routeBase}/posts`, createPost);
router.put(`${routeBase}/posts/:_id`, updatePost);
router.delete(`${routeBase}/posts/:_id`, deletePost);

export { router };
