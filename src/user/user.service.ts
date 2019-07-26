import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async createUser(user: User) {
        return await this.userRepository.save(user);
    }

    async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.userRepository.find({
            select: ["fullName", "birthDay", "isActive"],
            where: [{ "id": _id }]
        });
    }

    async updateUser(user: User) {
        return await this.userRepository.save(user);
    }

    async deleteUser(user: User) {
        return await this.userRepository.delete(user);
    }
}
