import { Module } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TasksController } from "./tasks.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./tasks.entity";
import { TaskState } from "../tasksState/tasksState.entity";
import { Project } from "src/projects/projects.entity";
import { AuthModule } from "src/auth/auth.module";
import { TaskFieldValue } from "src/task-fields/task-field-values.entity";

@Module({
  providers: [TasksService],
  controllers: [TasksController],
  imports: [
    TypeOrmModule.forFeature([Task]),
    TypeOrmModule.forFeature([TaskState]),
    TypeOrmModule.forFeature([Project]),
    TypeOrmModule.forFeature([TaskFieldValue]),
    AuthModule,
  ],
})
export class TasksModule {}
