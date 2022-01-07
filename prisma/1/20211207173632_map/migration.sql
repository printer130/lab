/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Category";

-- CreateTable
CREATE TABLE "categories" (
    "category_id" SERIAL NOT NULL,
    "name" VARCHAR(256),

    CONSTRAINT "categories_pkey" PRIMARY KEY ("category_id")
);
