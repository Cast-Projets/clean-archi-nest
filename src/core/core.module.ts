import { Module } from "@nestjs/common";
import { CreateTaskUseCase } from "./use_cases/createTask.usecase";
import { DeleteTaskUseCase } from "./use_cases/deleteTask.usecase";
import { GetAllTasksUseCase } from "./use_cases/getAllTasks.usecase";
import { TaskEntrypoint } from "./use_cases/task.entrypoint";
import { DatabaseModule } from "src/dataprovider/database/database.module";

@Module({
  imports: [DatabaseModule],
  providers: [CreateTaskUseCase, DeleteTaskUseCase, GetAllTasksUseCase, TaskEntrypoint],
  exports: [TaskEntrypoint]
})

export class CoreModule {}
  