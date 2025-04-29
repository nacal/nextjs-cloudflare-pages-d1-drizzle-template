'use client'

import type { usersTable } from '@/db/schema'
import { Container, Heading, Table } from '@radix-ui/themes'
import type { InferSelectModel } from 'drizzle-orm'

type User = InferSelectModel<typeof usersTable>

interface Props {
  users: User[]
}

export default function HomeClient({ users }: Props) {
  return (
    <Container size='2' py='6'>
      <Heading size='6' mb='4'>
        Users
      </Heading>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map(user => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Container>
  )
}
