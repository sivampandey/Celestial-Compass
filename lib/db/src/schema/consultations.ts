import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),

  name: varchar("name", { length: 100 }).notNull(),

  phone: varchar("phone", { length: 20 }).notNull(),

  email: varchar("email", { length: 100 }),

  category: varchar("category", { length: 100 }),

  message: text("message").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertConsultationSchema =
  createInsertSchema(consultations).omit({
    id: true,
    createdAt: true,
  });

export type InsertConsultation = z.infer<
  typeof insertConsultationSchema
>;

export type Consultation =
  typeof consultations.$inferSelect;