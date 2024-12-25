import axios from "axios";

const documents = [
  {
    id: 1,
    title: "show running queries",
    text: `SELECT pid, now() - pg_stat_activity.query_start AS duration, query, state
FROM pg_stat_activity
ORDER BY duration DESC;`,
    categories: ["postgres"],
  },
  {
    id: 2,
    title: "create inverted keyword index",
    text: `CREATE EXTENSION pg_trgm;
CREATE INDEX trgm_title ON table USING gin (title gin_trgm_ops);`,
    categories: ["postgres"],
  },
];

type Document = {
  id: number;
  title: string;
  text: string;
  categories: string[];
}[];

export async function fetchDocuments() {
  return documents;
  // const response = await axios.get<Document>(
  //   "https://aaa4.s3.us-west-1.amazonaws.com/snippets.json"
  // );
  // return response.data;
}
