import { routes } from "@/config/routes";
import Link from "next/link";

export function Footer() {
  return <footer className="
  p-6 
  bg-white dark:bg-gray-800 
 text-gray-700 dark:text-gray-300
  border-t border-gray-200 dark:border-gray-700
  text-center
  ">
    <Link href={routes.v1.cms.href}>Go to Admin area</Link>
    <p className="">© 2023 E-commerce</p>
  </footer>
}