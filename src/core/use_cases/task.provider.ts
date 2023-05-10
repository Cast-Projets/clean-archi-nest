import { Task } from "../entities/task.entity";

/**
 * Interface for provider. The service is defined in /dataprovider/database/database.module.ts
 */
export interface TaskProvider {
    getAllTasks(): Promise<Task[]>;
    
    createTask(task: Task): Promise<Task>;

    deleteTask(id: String): Promise<void>;
}
