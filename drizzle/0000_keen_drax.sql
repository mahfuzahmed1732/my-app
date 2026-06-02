CREATE TABLE "menus" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"href" text NOT NULL,
	"parent_id" text,
	"order" integer NOT NULL
);
