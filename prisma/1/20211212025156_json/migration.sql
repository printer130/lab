/*
  Warnings:

  - You are about to drop the `json` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'BIOCHEMICAL', 'RECEPTIONIST');

-- DropTable
DROP TABLE "json";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "Role" NOT NULL DEFAULT E'RECEPTIONIST',
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" VARCHAR(255),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullName" VARCHAR(35) NOT NULL,
    "ci" INTEGER NOT NULL,
    "nit" INTEGER NOT NULL,
    "birth" TIMESTAMP(3) NOT NULL DEFAULT '2020-03-19 14:21:00 +02:00',
    "phone" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "doctor" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receipt" (
    "id" INTEGER NOT NULL,
    "json" JSONB NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Receipt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_ci_key" ON "Order"("ci");

-- CreateIndex
CREATE UNIQUE INDEX "Order_nit_key" ON "Order"("nit");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
