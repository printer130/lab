/*
  Warnings:

  - You are about to drop the column `authorId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Receipt` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[labName,id,ownerCI]` on the table `Receipt` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorEmail` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `labName` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerCI` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `labName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Receipt" DROP CONSTRAINT "Receipt_ownerId_fkey";

-- DropIndex
DROP INDEX "Receipt_id_key";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "authorId",
ADD COLUMN     "authorEmail" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Receipt" DROP COLUMN "ownerId",
ADD COLUMN     "labName" TEXT NOT NULL,
ADD COLUMN     "ownerCI" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "labName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Lab" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Lab_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lab_name_key" ON "Lab"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Receipt_labName_id_ownerCI_key" ON "Receipt"("labName", "id", "ownerCI");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_labName_fkey" FOREIGN KEY ("labName") REFERENCES "Lab"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_authorEmail_fkey" FOREIGN KEY ("authorEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_ownerCI_fkey" FOREIGN KEY ("ownerCI") REFERENCES "Order"("ci") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_labName_fkey" FOREIGN KEY ("labName") REFERENCES "Lab"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
