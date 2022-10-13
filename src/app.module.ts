import { CacheModule, Module } from '@nestjs/common';
import { ClientOpts } from 'redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as redisStore from 'cache-manager-redis-store';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://127.0.0.1:27017`, {
      user: "admin-blog",
      pass: "a0d579244d370d921ecfc5c07bf1cbaa721446df9d6d8138a8684ba2329401581ce38b0cbb576349fb7eccb867e721079815344b011e4a5440770fa6776872ab",
      dbName: "blog",
      
    }),
    CacheModule.register<ClientOpts>({
      store: redisStore,

      // Store-specific configuration:
      host: 'host.docker.internal',
      port: 6379,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
