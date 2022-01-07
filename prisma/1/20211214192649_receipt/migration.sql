/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Receipt` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `indebt` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saldo` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Receipt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE "receipt_id_seq";
ALTER TABLE "Receipt" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "indebt" INTEGER NOT NULL,
ADD COLUMN     "saldo" INTEGER NOT NULL,
ADD COLUMN     "total" INTEGER NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('receipt_id_seq'),
ALTER COLUMN "json" DROP NOT NULL;
ALTER SEQUENCE "receipt_id_seq" OWNED BY "Receipt"."id";

-- CreateIndex
CREATE UNIQUE INDEX "Receipt_id_key" ON "Receipt"("id");
