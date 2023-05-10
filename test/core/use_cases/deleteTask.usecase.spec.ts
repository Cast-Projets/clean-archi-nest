import { Task } from "src/core/entities/task.entity";
import { DeleteTaskUseCase } from "src/core/use_cases/deleteTask.usecase";
import { TaskProvider } from "src/core/use_cases/task.provider";


describe("deleteTaskUseCase", () => {
    let deleteTaskUseCase: DeleteTaskUseCase;
    
    beforeEach ( () => {
        let taskProvider: TaskProvider = {
            getAllTasks(): Promise<Task[]> {return null},
            createTask(): Promise<Task> {return null},
            deleteTask(): Promise<void> {return new Promise((res) => {})},
        };

        deleteTaskUseCase = new DeleteTaskUseCase(taskProvider);
    });

    it("Delete is OK", async () => {
        let promise = deleteTaskUseCase.execute('id');
    });

});