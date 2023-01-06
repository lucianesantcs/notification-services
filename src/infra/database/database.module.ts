import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [PrismaService],
})
export class DatabaseModule {}
