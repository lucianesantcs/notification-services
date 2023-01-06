import { NotificationsController } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
