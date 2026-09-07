import Link from "next/link";

function Header() {
    return (
        <header className="border-b border-[#2E3350] py-4 mb-6">
            <div className="max-w-2xl mx-auto px-6 align-center">
                <Link href="/">
                    <h1 className="font-serif italic text-2xl">Taller 2</h1>
                </Link>
            </div>
        </header>
    );
}

export default Header;