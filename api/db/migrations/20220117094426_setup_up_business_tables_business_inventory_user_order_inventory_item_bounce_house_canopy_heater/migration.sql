-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'DRIVER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Item" AS ENUM ('CHAIR', 'TABLE', 'BOUNCE_HOUSE', 'CANOPY', 'HEATER');

-- CreateTable
CREATE TABLE "BusinessInventory" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "BusinessInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "role" "Role" NOT NULL DEFAULT E'CLIENT',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "deliveryDateTime" TIMESTAMP(3) NOT NULL,
    "returnDateTime" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "rentPrice" INTEGER NOT NULL,
    "depositAmount" INTEGER NOT NULL,
    "notes" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryItem" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "inventoryId" INTEGER NOT NULL,
    "itemType" "Item" NOT NULL,
    "chairs" INTEGER,
    "tables" INTEGER,
    "bounceHouseId" INTEGER,
    "canopyId" INTEGER,
    "heaterId" INTEGER,

    CONSTRAINT "InventoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BounceHouse" (
    "id" SERIAL NOT NULL,
    "itemType" "Item" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "BounceHouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Canopy" (
    "id" SERIAL NOT NULL,
    "itemType" "Item" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Canopy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Heater" (
    "id" SERIAL NOT NULL,
    "itemType" "Item" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Heater_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "BusinessInventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_bounceHouseId_fkey" FOREIGN KEY ("bounceHouseId") REFERENCES "BounceHouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_canopyId_fkey" FOREIGN KEY ("canopyId") REFERENCES "Canopy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_heaterId_fkey" FOREIGN KEY ("heaterId") REFERENCES "Heater"("id") ON DELETE SET NULL ON UPDATE CASCADE;
