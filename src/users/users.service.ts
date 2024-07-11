import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./users.entity";
import { CreateUserDto } from "./dto/createUser.dto";
import { RolesService } from "src/roles/roles.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private roleService: RolesService
  ) {}

  async createUser(dto: CreateUserDto) {
    const newUser = this.usersRepository.create(dto);
    const role = await this.roleService.findRole("USER");
    newUser.roles = [role];
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.find({
      relations: { roles: true },
    });
    return users;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await this.usersRepository.findOne({
      where: { email: email },
      relations: { roles: true },
    });
    return user;
  }
}
