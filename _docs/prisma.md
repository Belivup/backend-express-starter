
    npm install prisma --save-dev 
    npm install @prisma/client

    npx prisma
    npx prisma init

Prisma.mjs

    import { PrismaClient } from '@prisma/client' 
    export const prisma = new PrismaClient()

Prisma Schema

    datasource db {
        provider = "mongodb"
        url      = env("DATABASE_URL")
    }

    model User {
        id      String   @id @default(auto()) @map("_id") @db.ObjectId
        email   String
        name    String?
    }
