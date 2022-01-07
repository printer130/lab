/*
  Warnings:

  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post_in_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `posts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "post_in_categories" DROP CONSTRAINT "post_in_categories_category_id_fkey";

-- DropForeignKey
ALTER TABLE "post_in_categories" DROP CONSTRAINT "post_in_categories_post_id_fkey";

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "post_in_categories";

-- DropTable
DROP TABLE "posts";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(256),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "users_name_index" ON users USING gin(to_tsvector('english', name));
