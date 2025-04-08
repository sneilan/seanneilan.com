import axios from "axios";

type Document = {
  id: number;
  title: string;
  code: string;
  tags: string[];
}[];

export async function fetchDocuments() {
  const response = await axios.get<Document>(
    "https://aaa4.s3.us-west-1.amazonaws.com/snippets.json",
    {
      params: {
        t: new Date().getTime()
      }
    }
  );
  return response.data;
}
