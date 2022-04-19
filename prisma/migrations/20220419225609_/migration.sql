-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'BIOCHEMICAL', 'RECEPTIONIST');

-- CreateTable
CREATE TABLE "Lab" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "image" TEXT DEFAULT E'',
    "address" TEXT,

    CONSTRAINT "Lab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "ci" TEXT DEFAULT E'',
    "password" VARCHAR(255),
    "phone" INTEGER,
    "role" "Role" NOT NULL DEFAULT E'RECEPTIONIST',
    "labId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullName" VARCHAR(70) NOT NULL,
    "ci" TEXT NOT NULL,
    "nit" INTEGER NOT NULL,
    "birth" TIMESTAMP(3) NOT NULL,
    "phone" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "doctor" TEXT NOT NULL,
    "authorEmail" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receipts" (
    "cuiid" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "json" JSON NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saldo" DECIMAL(10,2),
    "itotal" INTEGER NOT NULL DEFAULT 0,
    "total" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "labName" TEXT,
    "ownerCi" TEXT,
    "indebtList" JSONB[],

    CONSTRAINT "Receipts_pkey" PRIMARY KEY ("cuiid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lab_name_key" ON "Lab"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Order_ci_key" ON "Order"("ci");

-- CreateIndex
CREATE INDEX "receipt_lab_owner" ON "Receipts"("labName", "ownerCi");
