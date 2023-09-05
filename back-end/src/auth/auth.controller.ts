
import { Controller, Get, Param, Res } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('43')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('get-authorization-url')
  async getAuthorizationUrl(): Promise<string> {
    const authorizationUrl = await this.authService.getAuthorizationUrl();
    return authorizationUrl;
  }
}