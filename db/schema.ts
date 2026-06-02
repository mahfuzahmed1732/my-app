import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const menus = pgTable("menus", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(), 

  title: text("title").notNull(),

  href: text("href").notNull(),

  parentId: integer("parent_id"),

  order: integer("order").default(0),
});