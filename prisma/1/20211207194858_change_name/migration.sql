/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "name",
ADD COLUMN     "fullname" VARCHAR(256);

CREATE INDEX "users.fullname_index" ON users USING gin(to_tsvector('english', fullname));
