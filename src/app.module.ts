import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdiomaModule } from './idioma/idioma.module';
import { PalabraModule } from './palabra/palabra.module';

@Module({
  imports: [IdiomaModule, PalabraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
