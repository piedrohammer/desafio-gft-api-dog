/*
  Warnings:

  - You are about to drop the column `clienteId` on the `cachorros` table. All the data in the column will be lost.
  - The primary key for the `cartaovacina` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `clientes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `usernameCliente` to the `cachorros` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cachorros` DROP FOREIGN KEY `cachorros_clienteId_fkey`;

-- AlterTable
ALTER TABLE `cachorros` DROP COLUMN `clienteId`,
    ADD COLUMN `usernameCliente` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `cartaovacina` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`codcartao`);

-- AlterTable
ALTER TABLE `clientes` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`username`);

-- AddForeignKey
ALTER TABLE `cachorros` ADD CONSTRAINT `cachorros_usernameCliente_fkey` FOREIGN KEY (`usernameCliente`) REFERENCES `clientes`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
