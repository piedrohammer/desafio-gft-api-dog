/*
  Warnings:

  - You are about to drop the column `codAtendimeto` on the `atendimentos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[codAtendimento]` on the table `atendimentos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codAtendimento` to the `atendimentos` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `atendimentos_codAtendimeto_key` ON `atendimentos`;

-- AlterTable
ALTER TABLE `atendimentos` DROP COLUMN `codAtendimeto`,
    ADD COLUMN `codAtendimento` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `atendimentos_codAtendimento_key` ON `atendimentos`(`codAtendimento`);
