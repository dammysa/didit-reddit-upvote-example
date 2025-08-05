import { db } from "@/db";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const userId = params.id;

  const res = await db.query(`SELECTname FROM users WHERE id = $1`, [userId]); //Was trying to make a const of rows not res and that was the issue.

  const user = res.rows[0];
  console.log(res);

  return {
    title: user.title ? `${user.name}'s Profile` : "User Profile",
    description: "Post by ",
  };
}
