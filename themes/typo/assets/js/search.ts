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
  {
    id: 3,
    title: "PuppyPi ROS getting started notes",
    text: `
# Buy one here -> https://linkcuts.com/hretydwt

ROS stands for Robot Operating System (https://ros.org/)

# ssh into a puppypi
# First buy a 2G usb wifi dongle.
# https://www.amazon.com/gp/product/B0CZ82RM5L/ runs on Linux.
# Connect to puppy pi wifi HW-49C2178C
ssh pi@192.168.149.1 (password: raspberry)

# Example commands can be ran after login
# without changing directories

# Advanced servo demo
rosrun puppy_advanced_functions self_balancing_demo.py

# Camera code
rosrun puppy_advanced_functions face_detect_demo.py

# Walk demo
rosrun puppy_control puppy_demo.py

# Find all other demos by running
cd ~/puppy_pi/src
# @TODO list packages with ros commands.`,
    categories: ["python", "ros", "puppypi"],
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
