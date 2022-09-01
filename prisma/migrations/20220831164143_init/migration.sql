/*
  Warnings:

  - The primary key for the `cartaovacina` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `clientes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `cartaovacina` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `clientes` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`id`);
