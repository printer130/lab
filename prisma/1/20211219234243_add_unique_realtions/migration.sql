/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Lab` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ci]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nit]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[labName,id,ownerCI]` on the table `Receipt` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Lab_name_key";

-- DropIndex
DROP INDEX "Order_ci_key";

-- DropIndex
DROP INDEX "Order_id_key";

-- DropIndex
DROP INDEX "Order_nit_key";

-- DropIndex
DROP INDEX "Receipt_labName_id_ownerCI_key";

-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Lab_name_key" ON "Lab"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_ci_key" ON "Order"("ci");

-- CreateIndex
CREATE UNIQUE INDEX "Order_nit_key" ON "Order"("nit");

-- CreateIndex
CREATE UNIQUE INDEX "Receipt_labName_id_ownerCI_key" ON "Receipt"("labName", "id", "ownerCI");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
