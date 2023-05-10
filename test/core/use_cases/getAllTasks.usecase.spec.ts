import { Task } from "src/core/entities/task.entity";
import { TaskProvider } from "src/core/use_cases/task.provider";
import { GetAllTasksUseCase } from "src/core/use_cases/getAllTasks.usecase";


describe("getAllTasksUseCase", () => {
    let getAllTasksUseCase: GetAllTasksUseCase;
    let listOfTask: Task[] = [];

    beforeEach ( () => {
        let taskProvider: TaskProvider = {
            getAllTasks(): Promise<Task[]> {return new Promise((resolve) => {
                resolve(listOfTask);
            })},
            createTask(): Promise<Task> {return null},
            deleteTask(): Promise<void> {return null},
        }
        getAllTasksUseCase = new GetAllTasksUseCase(taskProvider);
    });

    it("should return a empty list", async () => {
        const list = await getAllTasksUseCase.execute();

        expect(list.length).toEqual(0);
    });

    it("should return a list of task", async () => {
        listOfTask.push({id: 't1', name: 'task One', completed: false});
        listOfTask.push({id: 't2', name: 'task two', completed: true});
        const list = await getAllTasksUseCase.execute();

        expect(list.length).toEqual(2);
    });

});