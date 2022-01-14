/*
  Warnings:

  - You are about to drop the `CategoriesOnPosts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'BIOCHEMICAL', 'RECEPTIONIST');

-- DropForeignKey
ALTER TABLE "CategoriesOnPosts" DROP CONSTRAINT "CategoriesOnPosts_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnPosts" DROP CONSTRAINT "CategoriesOnPosts_postId_fkey";

-- DropTable
DROP TABLE "CategoriesOnPosts";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Lab" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Lab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "Role" NOT NULL DEFAULT E'RECEPTIONIST',
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" VARCHAR(255),
    "labId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullName" VARCHAR(35) NOT NULL,
    "ci" INTEGER NOT NULL,
    "nit" INTEGER NOT NULL,
    "birth" TIMESTAMP(3) NOT NULL,
    "phone" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "doctor" TEXT NOT NULL,
    "authorEmail" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receipt" (
    "cuiid" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "json" JSON NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saldo" INTEGER NOT NULL,
    "itotal" INTEGER NOT NULL DEFAULT 0,
    "total" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "labName" TEXT,
    "ownerCi" INTEGER,
    "indebtList" JSONB[]
);

-- CreateIndex
CREATE UNIQUE INDEX "Lab_name_key" ON "Lab"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Order_ci_key" ON "Order"("ci");

-- CreateIndex
CREATE UNIQUE INDEX "Receipt_cuiid_key" ON "Receipt"("cuiid");

-- CreateIndex
CREATE INDEX "receipt_lab_owner" ON "Receipt"("labName", "ownerCi");
