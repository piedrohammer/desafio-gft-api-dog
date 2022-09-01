/*
  Warnings:

  - You are about to alter the column `idade` on the `clientes` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[codAtendimeto]` on the table `atendimentos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[carteirinha]` on the table `cachorros` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `clientes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `vet` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `vet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codAtendimeto` to the `atendimentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cartaoVacinaDog` to the `cachorros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carteirinha` to the `cachorros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `vet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `vet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `vet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `atendimentos` ADD COLUMN `codAtendimeto` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `cachorros` ADD COLUMN `cartaoVacinaDog` VARCHAR(191) NOT NULL,
    ADD COLUMN `carteirinha` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `clientes` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `senha` VARCHAR(191) NOT NULL,
    MODIFY `idade` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `vet` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `senha` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `CartaoVacina` (
    `id` VARCHAR(191) NOT NULL,
    `codcartao` VARCHAR(191) NOT NULL,
    `cinomose` VARCHAR(191) NOT NULL,
    `parvovirose` VARCHAR(191) NOT NULL,
    `leptospirose` VARCHAR(191) NOT NULL,
    `antirrabica` VARCHAR(191) NOT NULL,
    `leishmaniose` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CartaoVacina_codcartao_key`(`codcartao`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `atendimentos_codAtendimeto_key` ON `atendimentos`(`codAtendimeto`);

-- CreateIndex
CREATE UNIQUE INDEX `cachorros_carteirinha_key` ON `cachorros`(`carteirinha`);

-- CreateIndex
CREATE UNIQUE INDEX `clientes_email_key` ON `clientes`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `vet_username_key` ON `vet`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `vet_email_key` ON `vet`(`email`);

-- AddForeignKey
ALTER TABLE `cachorros` ADD CONSTRAINT `cachorros_cartaoVacinaDog_fkey` FOREIGN KEY (`cartaoVacinaDog`) REFERENCES `CartaoVacina`(`codcartao`) ON DELETE RESTRICT ON UPDATE CASCADE;
