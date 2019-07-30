import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { LoginEntity } from 'src/dto/login.dto';
import { RegisterEntity } from 'src/dto/register.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async createUser(user: User): Promise<User>  {
        return await this.userRepository.save(user);
    }

    async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getUser(id: number): Promise<User[]> {
        return await this.userRepository.find({
            where: [{ 'id': id }],
        });
    }

    async updateUser(user: User) {
        return await this.userRepository.save(user);
    }

    async deleteUser(user: User) {
        return await this.userRepository.delete(user);
    }

    // Authentication service
    async registerUser(user: User): Promise<User>  {
        return await this.userRepository.save(user);
    }

    async login(loginEntity: LoginEntity): Promise<User> {
        return await this.userRepository.findOne({
            where: [{ nim: loginEntity.nim, password: loginEntity.password }],
        });
    }
}
