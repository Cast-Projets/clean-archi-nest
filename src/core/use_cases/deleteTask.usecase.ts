import { Inject} from '@nestjs/common';
import { TaskProvider } from './task.provider';

export class DeleteTaskUseCase {

  constructor(@Inject('TASK_PROVIDER') private readonly taskProvider: TaskProvider) {}

  execute(id: String): Promise<void> {
    return this.taskProvider.deleteTask(id);
  } 
}
