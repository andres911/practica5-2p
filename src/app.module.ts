import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdiomaModule } from './idioma/idioma.module';
import { PalabraModule } from './palabra/palabra.module';
import { RegistroModule } from './registro/registro.module';

@Module({
  imports: [IdiomaModule, PalabraModule, RegistroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
