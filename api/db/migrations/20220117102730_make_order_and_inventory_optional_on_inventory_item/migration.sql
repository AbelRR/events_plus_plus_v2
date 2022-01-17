-- DropForeignKey
ALTER TABLE "InventoryItem" DROP CONSTRAINT "InventoryItem_inventoryId_fkey";

-- DropForeignKey
ALTER TABLE "InventoryItem" DROP CONSTRAINT "InventoryItem_orderId_fkey";

-- AlterTable
ALTER TABLE "InventoryItem" ALTER COLUMN "orderId" DROP NOT NULL,
ALTER COLUMN "inventoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "BusinessInventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
