import { redirect } from "react-router";
import type { ClientLoaderFunctionArgs } from "react-router";

export async function clientLoader({ request }: ClientLoaderFunctionArgs) {
  throw redirect("/destination/moon");
}

export default function loader() {
  return redirect("/destination/moon");
}
