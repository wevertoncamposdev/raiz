import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { marked } from 'marked';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const readmePath = join(process.cwd(), 'README.md');
    const markdown = readFileSync(readmePath, 'utf-8');
    const html = marked.parse(markdown);
    return html;
  }
}
