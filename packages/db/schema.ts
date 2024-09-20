import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const User = pgTable('user', {
    id: varchar('id', { length: 255 }).primaryKey(), // Kinde uses string IDs
    email: varchar('email', { length: 255 }).notNull().unique(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const File = pgTable('file', {
    id: text('id').primaryKey(), // Using UUID for file IDs
    UserId: varchar('User_id', { length: 255 }).notNull().references(() => User.id),
    filename: varchar('filename', { length: 255 }).notNull(),
    fileSize: text('file_size').notNull(),
    uploadDate: timestamp('upload_date').defaultNow().notNull(),
    fileType: varchar('file_type', { length: 100 }).notNull(),
    url: text('url').notNull()
});

export const Note = pgTable('note', {
    id: text('id').primaryKey(), // Using UUID for note IDs
    UserId: varchar('User_id', { length: 255 }).notNull().references(() => User.id),
    title: varchar('title', { length: 255 }).notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
});