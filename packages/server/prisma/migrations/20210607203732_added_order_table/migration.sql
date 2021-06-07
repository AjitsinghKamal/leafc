/*
  Warnings:

  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CartItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Cart.email_unique";

-- DropIndex
DROP INDEX "CartItem.email_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cart";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CartItem";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("createdAt", "email", "id", "updatedAt") SELECT "createdAt", "email", "id", "updatedAt" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
CREATE UNIQUE INDEX "Order.email_unique" ON "Order"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
