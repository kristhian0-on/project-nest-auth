import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
//import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  //constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    /* this.prisma.user.create({
      data: user,
    }); */
    return user;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
