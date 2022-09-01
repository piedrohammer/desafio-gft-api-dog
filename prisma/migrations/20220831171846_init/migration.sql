/*
  Warnings:

  - You are about to drop the column `cachorroId` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `atendimentos` table. All the data in the column will be lost.
  - You are about to drop the column `vetId` on the `atendimentos` table. All the data in the column will be lost.
  - Added the required column `cachorroCarteirinha` to the `atendimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horario` to the `atendimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vetUsername` to the `atendimentos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `atendimentos` DROP FOREIGN KEY `atendimentos_cachorroId_fkey`;

-- DropForeignKey
ALTER TABLE `atendimentos` DROP FOREIGN KEY `atendimentos_vetId_fkey`;

-- AlterTable
ALTER TABLE `atendimentos` DROP COLUMN `cachorroId`,
    DROP COLUMN `data`,
    DROP COLUMN `vetId`,
    ADD COLUMN `cachorroCarteirinha` VARCHAR(191) NOT NULL,
    ADD COLUMN `horario` DATETIME(3) NOT NULL,
    ADD COLUMN `vetUsername` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `atendimentos` ADD CONSTRAINT `atendimentos_cachorroCarteirinha_fkey` FOREIGN KEY (`cachorroCarteirinha`) REFERENCES `cachorros`(`carteirinha`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `atendimentos` ADD CONSTRAINT `atendimentos_vetUsername_fkey` FOREIGN KEY (`vetUsername`) REFERENCES `vet`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
