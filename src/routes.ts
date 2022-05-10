import { Request, Response } from "express"; 
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Jeff",
    duration: 10
  });

  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Jeff"
  });

  return response.send();
}