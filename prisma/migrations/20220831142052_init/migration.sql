-- AlterTable
ALTER TABLE `clientes` MODIFY `idade` VARCHAR(191) NOT NULL;

-- RenameIndex
ALTER TABLE `cartaovacina` RENAME INDEX `CartaoVacina_codcartao_key` TO `cartaoVacina_codcartao_key`;
