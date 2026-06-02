ALTER TABLE "menus" ALTER COLUMN "id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "menus" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (sequence name "menus_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1);--> statement-breakpoint
ALTER TABLE "menus" ALTER COLUMN "parent_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "menus" ALTER COLUMN "order" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "menus" ALTER COLUMN "order" DROP NOT NULL;