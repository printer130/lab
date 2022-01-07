/*
  Warnings:

  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_authorId_fkey";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "json" (
    "id" SERIAL NOT NULL,
    "name" TEXT DEFAULT E'hola',
    "extendedPetsData" JSONB,

    CONSTRAINT "json_pkey" PRIMARY KEY ("id")
);
