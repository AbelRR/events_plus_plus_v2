/*
  Warnings:

  - You are about to drop the column `inventoryId` on the `InventoryItem` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `InventoryItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "InventoryItem" DROP CONSTRAINT "InventoryItem_inventoryId_fkey";

-- DropForeignKey
ALTER TABLE "InventoryItem" DROP CONSTRAINT "InventoryItem_orderId_fkey";

-- AlterTable
ALTER TABLE "InventoryItem" DROP COLUMN "inventoryId",
DROP COLUMN "orderId";

-- CreateTable
CREATE TABLE "_BusinessInventoryToInventoryItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_InventoryItemToOrder" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BusinessInventoryToInventoryItem_AB_unique" ON "_BusinessInventoryToInventoryItem"("A", "B");

-- CreateIndex
CREATE INDEX "_BusinessInventoryToInventoryItem_B_index" ON "_BusinessInventoryToInventoryItem"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_InventoryItemToOrder_AB_unique" ON "_InventoryItemToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_InventoryItemToOrder_B_index" ON "_InventoryItemToOrder"("B");

-- AddForeignKey
ALTER TABLE "_BusinessInventoryToInventoryItem" ADD FOREIGN KEY ("A") REFERENCES "BusinessInventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BusinessInventoryToInventoryItem" ADD FOREIGN KEY ("B") REFERENCES "InventoryItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InventoryItemToOrder" ADD FOREIGN KEY ("A") REFERENCES "InventoryItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InventoryItemToOrder" ADD FOREIGN KEY ("B") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
