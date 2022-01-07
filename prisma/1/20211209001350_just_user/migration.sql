/*
  Warnings:

  - You are about to drop the column `usrId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_authorId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "usrId";

-- DropTable
DROP TABLE "order";
