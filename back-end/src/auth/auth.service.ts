
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {} 
  private readonly CLIENT_ID = this.configService.get('UID_42');
  private readonly CLIENT_SECRET = this.configService.get('SECRET_42');
  private readonly REDIRECT_URI = 'https://www.google.de'//needs to be changed

  async getAuthorizationUrl(): Promise<string> {
    const authorizationUrl = `https://api.intra.42.fr/oauth/authorize?client_id=${this.CLIENT_ID}&redirect_uri=${encodeURIComponent(this.REDIRECT_URI)}&response_type=code`;
    return authorizationUrl;
  }
}