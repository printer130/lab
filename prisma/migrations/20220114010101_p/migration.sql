/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Lab` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ci]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cuiid]` on the table `Receipt` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Lab_name_key";

-- DropIndex
DROP INDEX "Order_ci_key";

-- DropIndex
DROP INDEX "Receipt_cuiid_key";

-- DropIndex
DROP INDEX "receipt_lab_owner";

-- DropIndex
DROP INDEX "User_email_key";

-- CreateIndex
CREATE UNIQUE INDEX "Lab_name_key" ON "Lab"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Order_ci_key" ON "Order"("ci");

-- CreateIndex
CREATE UNIQUE INDEX "Receipt_cuiid_key" ON "Receipt"("cuiid");

-- CreateIndex
CREATE INDEX "receipt_lab_owner" ON "Receipt"("labName", "ownerCi");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
