import { SendNotification } from './use-cases/send-notification';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
  providers: [SendNotification],
})
export class AppModule {}
