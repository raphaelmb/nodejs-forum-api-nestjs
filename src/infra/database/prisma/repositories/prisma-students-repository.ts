import { StudentsRepository } from '@/domain/forum/application/repositories/students-repository'
import { Student } from '@/domain/forum/enterprise/entities/student'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaStudentMapper } from '../mappers/prisma-student-mapper'

@Injectable()
export class PrismaStudentsRepository implements StudentsRepository {
  constructor(readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<Student | null> {
    const student = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })

    return student ? PrismaStudentMapper.toDomain(student) : null
  }

  async create(student: Student): Promise<void> {
    const data = PrismaStudentMapper.toPrisma(student)
    await this.prisma.user.create({
      data,
    })
  }
}
