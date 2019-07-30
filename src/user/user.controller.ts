import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { LoginEntity } from '../dto/login.dto';

@Controller('user')
export class UserController {
    constructor(private service: UserService) {}

    @Get()
    getAll() {
        return this.service.getUsers();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post('create')
    create(@Body() user: User) {
        return this.service.createUser(user);
    }

    @Put('update')
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteUser(params.id);
    }

    // Authentiation Controller
    @Post('register')
    register(@Body() user: User) {
        return this.service.createUser(user);
    }

    @Post('login')
    login(@Body() loginEntity: LoginEntity) {
        return this.service.login(loginEntity);
    }
}
