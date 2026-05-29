import {
  Injectable,
  UnauthorizedException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { UserService } from '@modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/sign-in.dto';
import { CreateUserDto } from '@modules/user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  resetPassword(token: string, password: string) {
    throw new Error('Method not implemented.');
  }
  forgotPassword(email: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    signInDto: SignInDto,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const user = await this.userService.findOneWithEmail(signInDto.email);
    if (!user) {
      throw new UnauthorizedException('Not found');
    }

    const isPasswordValid = await bcrypt.compare(
      signInDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, username: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '1h',
      }),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
      }),
    };
  }

  async register(createUserDto: CreateUserDto) {
    // Cria usuário e retorna tokens
    const user = await this.userService.create(createUserDto);
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '1h',
      }),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
      }),
      user,
    };
  }

  async refresh(refreshToken: string): Promise<{ access_token: string }> {
    try {
      const payload = await this.jwtService.verifyAsync(refreshToken);
      // Opcional: validar se o usuário ainda existe/está ativo
      return {
        access_token: await this.jwtService.signAsync(
          { sub: payload.sub, username: payload.username },
          { expiresIn: '1h' },
        ),
      };
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
