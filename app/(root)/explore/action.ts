'use server';

import { db } from "@/database/drizzle";
import { books } from "@/database/schema";

export const getBooks = async () => {
  return await db.select().from(books);
};
