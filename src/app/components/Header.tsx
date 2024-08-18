import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';

export default function Header() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-white dark:border-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={logo} alt="Logo" width={100} height={50} />
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-0 md:dark:bg-gray-white dark:border-gray-700">
                        <li>
                            <Link href="/products" className="font-bold block py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Products</Link>
                        </li>
                        <li>
                            <Link href="/services" className="font-bold block py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black dark:bg-blue-600 md:dark:bg-transparent">Services</Link>
                        </li>
                        <li>
                            <Link href="/careers" className="font-bold block py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black dark:bg-blue-600 md:dark:bg-transparent">Careers</Link>
                        </li>
                        <li>
                            <Link href="/about" className="font-bold block py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black dark:bg-blue-600 md:dark:bg-transparent">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="font-bold block py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black dark:bg-blue-600 md:dark:bg-transparent">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
