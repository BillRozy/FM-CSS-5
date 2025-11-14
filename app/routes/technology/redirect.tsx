import React from "react";
import { ClientLoaderFunctionArgs, redirect } from "react-router";

export async function clientLoader({ request }: ClientLoaderFunctionArgs) {
  throw redirect("/technology/launch_vehicle");
}

export default function loader() {
  return redirect("/technology/launch_vehicle");
}
