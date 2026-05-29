import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '@core/prisma/prisma.module';
import { UserMapper } from './mappers/user.mapper';
import { UserValidator } from './validators/user.validator';
import { UserBusinessRules } from './domain/rules/user-business-rules';
import { UserRepository } from './persistence/repository/user.repository';
import { UserErrorMapper } from './mappers/user-error.mapper';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    UserService,
    UserMapper,
    UserValidator,
    UserBusinessRules,
    UserRepository,
    UserErrorMapper,
  ],
  exports: [UserService],
})
export class UserModule { }
