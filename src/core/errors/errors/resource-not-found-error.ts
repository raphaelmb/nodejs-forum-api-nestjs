import { UseCaseError } from '@/core/errors/use-case-error'

export default class ResourceNotFoundError
  extends Error
  implements UseCaseError
{
  constructor() {
    super('Resource not found')
  }
}
