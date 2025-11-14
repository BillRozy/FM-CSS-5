import React from "react";
import { ClientLoaderFunctionArgs, redirect } from "react-router";

export async function clientLoader({ request }: ClientLoaderFunctionArgs) {
  throw redirect("/destination/moon");
}

export default function loader() {
  return redirect("/destination/moon");
}
