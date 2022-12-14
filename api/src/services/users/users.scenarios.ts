import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        username: 'username1',
        email: 'String7863055',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        username: 'username2',
        email: 'String9600893',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
