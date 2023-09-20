import { UseCaseError } from '@/core/errors/use-case-error'

export default class NotAllowedError extends Error implements UseCaseError {
  constructor() {
    super('Not allowed')
  }
}
