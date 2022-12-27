import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  list() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create() {
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content: 'Você tem uma nova notificação de amizade!',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
