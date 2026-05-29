import { Injectable } from '@nestjs/common';
import { PrismaService } from '@core/prisma/prisma.service';

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  async log(params: {
    userId: string;
    type: string;
    action: string;
    entity: string;
    entityId?: string;
    before?: any;
    after?: any;
  }) {
    await this.prisma.audit.create({
      data: {
        userId: params.userId,
        type: params.type as any, // ou ajuste para garantir que seja AuditType
        action: params.action,
        entity: params.entity,
        entityId: params.entityId,
        before: params.before ? JSON.stringify(params.before) : null,
        after: params.after ? JSON.stringify(params.after) : null,
      },
    });
  }
}
