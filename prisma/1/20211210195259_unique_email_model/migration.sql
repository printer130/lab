-- DropIndex
DROP INDEX "Order_authorId_key";

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "birth" SET DEFAULT '2020-03-19 14:21:00 +02:00';
