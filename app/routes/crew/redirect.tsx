import React from "react";
import { ClientLoaderFunctionArgs, redirect } from "react-router";

export async function clientLoader({ request }: ClientLoaderFunctionArgs) {
  throw redirect("/crew/commander");
}

export default function loader() {
  return redirect("/crew/commander");
}
