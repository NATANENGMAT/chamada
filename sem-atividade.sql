-- Ampliar os valores permitidos sem alterar registros existentes.
BEGIN;
ALTER TABLE public.registros DROP CONSTRAINT registros_entrega_check;
ALTER TABLE public.registros ADD CONSTRAINT registros_entrega_check
  CHECK (entrega IN ('dia', 'atr', 'nao', 'sem'));
COMMIT;
