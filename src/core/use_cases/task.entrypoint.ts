import { Injectable } from "@nestjs/common";
import { Task } from "../entities/task.entity";
import { GetAllTasksUseCase } from "./getAllTasks.usecase";
import { DeleteTaskUseCase } from "./deleteTask.usecase";
import { CreateTaskUseCase } from "./createTask.usecase";

/**
 * Not obligatory but makes it possible to simplify the use of use-cases 
 *  and not to multiply the imports in entrypoint
 */
@Injectable()
export class TaskEntrypoint {

    constructor(private readonly getAllTasksUseCase: GetAllTasksUseCase,
                private readonly deleteTaskUseCase: DeleteTaskUseCase,
                private readonly createTaskUseCase: CreateTaskUseCase) {}

    getAllTasks(): Promise<Task[]> {
        return this.getAllTasksUseCase.execute();
    }

    deleteTask(id: String): Promise<void> {
        return this.deleteTaskUseCase.execute(id);
    }

    createTask(task: Task): Promise<Task> {
        return this.createTaskUseCase.execute(task);
    }
}