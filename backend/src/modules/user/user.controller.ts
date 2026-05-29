import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@core/auth/auth.guard';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @ApiOperation({ summary: 'Obter perfil do usuário autenticado' })
  async getProfile(@Request() req) {
    return this.userService.findOne(req.user.sub);
  }

  @Patch('me')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Atualizar perfil do usuário autenticado' })
  @ApiBody({ type: UpdateUserDto })
  async updateProfile(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(req.user.sub, updateUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  findAll(): Promise<UserResponseDto[]> {
    return this.userService.findAllWithValidation();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar usuário por ID' })
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.findOne(id);
  }

  @Delete('me')
  @ApiOperation({ summary: 'Remover o próprio usuário autenticado' })
  async removeSelf(@Request() req) {
    return this.userService.remove(req.user.sub);
  }
}
