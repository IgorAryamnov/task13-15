import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Project } from "./projects.entity";
import { ProjectsController } from "./projects.controller";
import { ProjectsService } from "./projects.service";
import { AuthModule } from "src/auth/auth.module";

@Module({
  providers: [ProjectsService],
  controllers: [ProjectsController],
  imports: [TypeOrmModule.forFeature([Project]), AuthModule],
})
export class ProjectsModule {}
