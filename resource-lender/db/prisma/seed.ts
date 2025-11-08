import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
  await prisma.user.create({ data: { email: 'alice@example.com', name: 'Alice' } })
  await prisma.user.create({ data: { email: 'bob@example.com', name: 'Bob' } })
  console.log('Seeded users')
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
