/*
  Warnings:

  - A unique constraint covering the columns `[nit]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[authorId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "birth" SET DEFAULT '2020-03-19 14:21:00 +02:00';

-- CreateIndex
CREATE UNIQUE INDEX "Order_nit_key" ON "Order"("nit");

-- CreateIndex
CREATE UNIQUE INDEX "Order_authorId_key" ON "Order"("authorId");
