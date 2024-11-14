// components/Header.js
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-teal-500 text-white px-4">
            <div className="flex h-16 items-center justify-between">
                <h1 className="text-lg font-semibold">CMS Admin</h1>
                <nav className="flex space-x-4">
                    <Link href="/" passHref className="px-2 hover:text-teal-200">
                        Posts
                    </Link>
                    <Link href="/pages" passHref className="px-2 hover:text-teal-200">
                        Pages
                    </Link>
                    <Link href="/plugins" passHref className="px-2 hover:text-teal-200">
                        Plugins
                    </Link>
                </nav>
            </div>
        </header>
    );
}
