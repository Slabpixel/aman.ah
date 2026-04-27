import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav data-navbar className="fixed top-4 md:top-5 inset-x-0 z-99 px-10 lg:px-4">
            <div className="mx-auto bg-foreground p-2 flex justify-between gap-10 w-full max-w-182.5 items-center rounded-md tracking-[-0.03em] overflow-hidden">
                <Link href="/" className="shrink-0">
                    <Image src="/icon-frame.svg" alt="Aman.ah" width={40} height={40} />
                </Link>
                <div className="flex max-md:hidden items-center text-background gap-6">
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
                <div className="flex gap-1.5">
                    <Link href="/" className="text-foreground px-2.5 md:px-4 py-2.5 rounded-sm bg-background flex items-center gap-2.5">
                        Get Started
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" rx="10" fill="#101010" fillOpacity="0.1" />
                            <path d="M13.891 6.7719V11.3835C13.8766 11.7437 13.5884 12.032 13.2281 12.0464C12.8678 12.032 12.5796 11.7437 12.5652 11.3835L12.5796 8.34272L7.23304 13.6893C6.97364 13.9487 6.57013 13.9487 6.31073 13.6893C6.05133 13.4299 6.05133 13.0263 6.31073 12.7669L11.6573 7.4204L8.61651 7.43482C8.25623 7.4204 7.96801 7.13218 7.9536 6.7719C7.96801 6.41162 8.25623 6.1234 8.61651 6.10899H13.2281C13.5884 6.1234 13.8766 6.41162 13.891 6.7719Z" fill="#101010" />
                        </svg>
                    </Link>
                    <button className="bg-background rounded-sm flex items-center justify-center cursor-pointer p-2.5 md:hidden">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="17.5405" height="17.5405" rx="8.77023" fill="#101010" fillOpacity="0.1" />
                            <path d="M4.76648 6.14014C4.76648 5.8184 5.01672 5.56817 5.33846 5.56817H12.2021C12.5238 5.56817 12.7741 5.8184 12.7741 6.14014C12.7741 6.46187 12.5238 6.71211 12.2021 6.71211H5.33846C5.01672 6.71211 4.76648 6.46187 4.76648 6.14014ZM4.76648 9C4.76648 8.67826 5.01672 8.42802 5.33846 8.42802H12.2021C12.5238 8.42802 12.7741 8.67826 12.7741 9C12.7741 9.32173 12.5238 9.57197 12.2021 9.57197H5.33846C5.01672 9.57197 4.76648 9.32173 4.76648 9ZM12.7741 11.8599C12.7741 12.1816 12.5238 12.4318 12.2021 12.4318H5.33846C5.01672 12.4318 4.76648 12.1816 4.76648 11.8599C4.76648 11.5381 5.01672 11.2879 5.33846 11.2879H12.2021C12.5238 11.2879 12.7741 11.5381 12.7741 11.8599Z" fill="#101010" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}