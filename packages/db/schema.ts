import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const User = pgTable('user', {
    id: serial('id').primaryKey(),
    email: text('email').notNull().unique(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const File = pgTable('file', {
    id: serial('id').primaryKey(),
    UserId: serial('User_id').references(() => User.id),
    filename: text('filename').notNull(),
    fileSize: text('file_size').notNull(),
    uploadDate: timestamp('upload_date').defaultNow().notNull(),
    fileType: text('file_type').notNull(),
    url: text('url').notNull()
});

export const Note = pgTable('note', {
    id: serial('id').primaryKey(),
    UserId: serial('User_id').references(() => User.id),
    title: text('title').notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()

});