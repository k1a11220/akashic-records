import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });

export async function getAllRecords() {
  let records = {};
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
  if (!databaseId) throw new Error("No database ID");
  const response = await notion.databases.retrieve({ database_id: databaseId });
  records = response;
  return records;
}
