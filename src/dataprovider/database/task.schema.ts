import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<TaskDomain>;

@Schema()
export class TaskDomain {
    _id: string;

    @Prop({String, required: true})
    name: string;

    @Prop({Boolean, required: true, default: false})
    completed: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(TaskDomain);

export const TaskName = 'Task';