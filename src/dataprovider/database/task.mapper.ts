import { Injectable } from "@nestjs/common";
import { Task } from "src/core/entities/task.entity";
import { TaskDomain } from "./task.schema";

@Injectable()
export class TaskMapper {

    toTask(taskDomain: TaskDomain): Task {
        return {
            id: taskDomain._id,
            name: taskDomain.name,
            completed: taskDomain.completed,
        };
    }

    toTaskDomain(task: Task): TaskDomain {
        return {
            _id: task.id,
            name: task.name,
            completed: task.completed
        }
    }
}