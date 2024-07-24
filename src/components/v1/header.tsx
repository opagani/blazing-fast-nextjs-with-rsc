import { routes } from "@/config/routes";
import Link from "next/link";

export function Header() {
    return (
        <header className="flex items-center bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <h1 className=" p-6 text-2xl font-bold text-gray-900 dark:text-gray-200">
                Newline Commerce
            </h1>
            <nav className="px-6 py-4 
            bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700
             flex-grow">
                <ul className="flex space-x-4">
                    <li>
                        <Link className="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                            href={routes.v1.home.href}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                            href={routes.v1.products.href}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link className="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                            href={routes.v1.preorder.href}>
                            Preorder
                        </Link>
                    </li>
                </ul>
            </nav>
            {/*
            This is an example of Partial Prerendering:
            we put a dynamic component into a static page,
            and the page stays static!
            However this doesn't work yet in Next 14.0,
            eventhough it is documented (https://nextjs.org/learn/dashboard-app/partial-prerendering)
            <div className="p-6">
                Hello <UserInfo />!
            </div>
            */}
        </header>
    )
}