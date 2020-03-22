import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  const data = await db.foo.findMany({
    select: {
      id: true,
      a: {
        select: {
          id: true,
          b: {
            select: {
              id: true
            }
          }
        }
      }
    }
  });
  console.log(data);
}

main();
