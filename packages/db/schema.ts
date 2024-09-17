import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    email: text('email').notNull().unique(),
    createdAt: timestamp('create_at').defaultNow().notNull(),
});

export const files = pgTable('files', {
    id: serial('id').primaryKey(),
    userId: serial('user_id').references(() => users.id),
    filename: text('filename').notNull(),
    fileSize: text('file_size').notNull(),
    uploadDate: timestamp('upload_date').defaultNow().notNull(),
    fileType: text('file_type').notNull(),
    url: text('url').notNull()
});

export const notes = pgTable('notes', {
    id: serial('id').primaryKey(),
    userId: serial('user_id').references(() => users.id),
    title: text('title').notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()

});