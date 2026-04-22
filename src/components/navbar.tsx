import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-4 md:top-5 inset-x-0 z-99 px-4">
            <div className="mx-auto bg-foreground p-2 flex justify-between gap-10 w-full max-w-182.5 items-center rounded-md tracking-[-0.03em]">
                <Link href="/">
                    <Image src="/icon-frame.svg" alt="Aman.ah" width={40} height={40} />
                </Link>
                <div className="flex items-center text-background gap-6">
                    <Link className="flex items-center gap-2" href="/">
                        Product
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.57812 6.63281L5.03906 6.09375L0.539062 1.59375L0 1.05469L1.07812 0L1.59375 0.539062L5.57812 4.5L9.53906 0.539062L10.0781 0L11.1328 1.05469L10.5938 1.59375L6.09375 6.09375L5.57812 6.63281Z" fill="white" />
                        </svg>

                    </Link>
                    <Link href="/">
                        Developers
                    </Link>
                    <Link href="/">
                        Use Cases
                    </Link>
                    <Link href="/">
                        Company
                    </Link>
                </div>
                <Link href="/" className="text-foreground px-4 py-2.5 rounded-sm bg-background flex items-center gap-2.5">
                    Get Started
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="20" rx="10" fill="#101010" fillOpacity="0.1" />
                        <path d="M13.891 6.7719V11.3835C13.8766 11.7437 13.5884 12.032 13.2281 12.0464C12.8678 12.032 12.5796 11.7437 12.5652 11.3835L12.5796 8.34272L7.23304 13.6893C6.97364 13.9487 6.57013 13.9487 6.31073 13.6893C6.05133 13.4299 6.05133 13.0263 6.31073 12.7669L11.6573 7.4204L8.61651 7.43482C8.25623 7.4204 7.96801 7.13218 7.9536 6.7719C7.96801 6.41162 8.25623 6.1234 8.61651 6.10899H13.2281C13.5884 6.1234 13.8766 6.41162 13.891 6.7719Z" fill="#101010" />
                    </svg>
                </Link>
            </div>
        </nav>
    );
}