import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskState } from "../tasksState/tasksState.entity";
import { Project } from "src/projects/projects.entity";
import { TasksStateService } from "./tasksState.service";
import { TasksStateController } from "./tasksState.controller";
import { AuthModule } from "src/auth/auth.module";
import { Task } from "src/tasks/tasks.entity";

@Module({
  providers: [TasksStateService],
  controllers: [TasksStateController],
  imports: [
    TypeOrmModule.forFeature([TaskState]),
    TypeOrmModule.forFeature([Project]),
    TypeOrmModule.forFeature([Task]),
    AuthModule,
  ],
})
export class TasksStateModule {}
