import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  moduleFileExtensions: ['js', 'ts'],
  rootDir: './',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/test/**/*.spec.ts'],
  modulePaths: ['<rootDir>']
}

export default jestConfig