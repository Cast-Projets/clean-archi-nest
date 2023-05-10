import { Task } from "src/core/entities/task.entity";
import { CreateTaskUseCase } from "src/core/use_cases/createTask.usecase";
import { TaskProvider } from "src/core/use_cases/task.provider";


describe("createTaskUseCase", () => {
    let createTaskUseCase: CreateTaskUseCase;
    let createdTask: Task = {id : 'id', name: "task created", completed: false};
    let param: Task = {name: "task created", completed: false};

    beforeEach ( () => {
        let taskProvider: TaskProvider = {
            getAllTasks(): Promise<Task[]> {return null},
            createTask(): Promise<Task> {return new Promise((res) => {return res(createdTask)})},
            deleteTask(): Promise<void> {return null},
        }
        createTaskUseCase = new CreateTaskUseCase(taskProvider);
    });

    it("Creation is OK", async () => {
        const task = await createTaskUseCase.execute(param);

        expect(task).not.toBeNull;
        expect(task.id).toEqual('id');
    });

});