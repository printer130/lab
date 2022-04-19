/*
  Warnings:

  - You are about to drop the column `cel` on the `Lab` table. All the data in the column will be lost.
  - You are about to drop the column `tel` on the `Lab` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Lab` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ci]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Lab_name_key";

-- DropIndex
DROP INDEX "Order_ci_key";

-- DropIndex
DROP INDEX "receipt_lab_owner";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Lab" DROP COLUMN "cel",
DROP COLUMN "tel",
ADD COLUMN     "cel0" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "cel1" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "cel2" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "cel3" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "tel0" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "tel1" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "tel2" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "tel3" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Lab_name_key" ON "Lab"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Order_ci_key" ON "Order"("ci");

-- CreateIndex
CREATE INDEX "receipt_lab_owner" ON "Receipts"("labName", "ownerCi");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
