import { getAllRecords } from "@/hooks/getRecords";

export default function Home() {
  return (
    console.log(getAllRecords()),
    (
      <div>
        <h1>Notion API</h1>
      </div>
    )
  );
}
