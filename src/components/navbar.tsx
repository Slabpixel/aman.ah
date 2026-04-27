"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import StaggerText from "@/components/stagger-text";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuScopeRef = useRef<HTMLDivElement | null>(null);
    const navRef = useRef<HTMLElement | null>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useGSAP(
        () => {
            tlRef.current = gsap
                .timeline({ paused: true, defaults: { ease: "power3.out" } })
                .set("[data-mobile-nav-wrap]", { display: "block" })
                .set("[data-mobile-nav-menu]", { xPercent: 0 })
                .fromTo("[data-mobile-nav-overlay]", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35 }, 0)
                .fromTo(
                    "[data-mobile-nav-panel]",
                    { xPercent: 110 },
                    { xPercent: 0, stagger: 0.08, duration: 0.55, ease: "power4.out" },
                    0,
                )
                .fromTo(
                    "[data-mobile-nav-link]",
                    { yPercent: 125, rotate: 8, autoAlpha: 0 },
                    { yPercent: 0, rotate: 0, autoAlpha: 1, stagger: 0.05, duration: 0.5 },
                    0.4,
                )
                .fromTo(
                    "[data-mobile-nav-social]",
                    { y: 14, autoAlpha: 0 },
                    { y: 0, autoAlpha: 1, stagger: 0.05, duration: 0.4 },
                    0.58,
                );

            gsap.set("[data-mobile-nav-wrap]", { display: "none" });
        },
        { scope: menuScopeRef },
    );

    useEffect(() => {
        const timeline = tlRef.current;
        if (!timeline) return;

        if (isMenuOpen) {
            timeline.play(0);
            document.body.style.overflow = "hidden";
            return;
        }

        gsap.to("[data-mobile-nav-overlay]", {
            autoAlpha: 0,
            duration: 0.22,
            ease: "power2.out",
        });
        gsap.to("[data-mobile-nav-menu]", {
            xPercent: 110,
            duration: 0.32,
            ease: "power3.inOut",
            onComplete: () => {
                gsap.set("[data-mobile-nav-wrap]", { display: "none" });
            },
        });
        document.body.style.overflow = "";
    }, [isMenuOpen]);

    useEffect(() => {
        const onEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("keydown", onEscape);
        return () => {
            window.removeEventListener("keydown", onEscape);
            document.body.style.overflow = "";
        };
    }, []);

    useEffect(() => {
        const navbar = navRef.current;
        if (!navbar) return;

        let lastY = window.scrollY;
        let isHidden = false;

        const onScroll = () => {
            if (isMenuOpen) return;

            const currentY = window.scrollY;
            const delta = currentY - lastY;

            if (currentY <= 24) {
                if (isHidden) {
                    gsap.to(navbar, { yPercent: 0, autoAlpha: 1, duration: 0.3, ease: "power2.out" });
                    isHidden = false;
                }
                lastY = currentY;
                return;
            }

            if (delta > 6 && currentY > 80 && !isHidden) {
                gsap.to(navbar, { yPercent: -140, autoAlpha: 0, duration: 0.28, ease: "power2.out" });
                isHidden = true;
            } else if (delta < -6 && isHidden) {
                gsap.to(navbar, { yPercent: 0, autoAlpha: 1, duration: 0.32, ease: "power2.out" });
                isHidden = false;
            }

            lastY = currentY;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [isMenuOpen]);

    const menuItems = [
        { label: "Product", href: "/" },
        { label: "Developers", href: "/" },
        { label: "Use Cases", href: "/" },
        { label: "Company", href: "/" },
    ];

    const socialItems = [
        { label: "Instagram", href: "/" },
        { label: "LinkedIn", href: "/" },
        { label: "X/Twitter", href: "/" },
    ];

    return (
        <div ref={menuScopeRef}>
            <nav ref={navRef} data-navbar className="fixed top-4 md:top-5 inset-x-0 z-99 px-10 lg:px-4">
                <div className="mx-auto bg-foreground p-2 flex justify-between gap-10 w-full max-w-182.5 items-center rounded-md tracking-[-0.03em] overflow-visible">
                    <Link href="/" className="shrink-0">
                        <Image src="/icon-frame.svg" alt="Aman.ah" width={40} height={40} />
                    </Link>
                    <div className="flex max-md:hidden items-center text-background gap-6">
                        <div className="group relative">
                            <Link className="group flex items-center gap-2" href="/">
                                <StaggerText text="Product" />
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.57812 6.63281L5.03906 6.09375L0.539062 1.59375L0 1.05469L1.07812 0L1.59375 0.539062L5.57812 4.5L9.53906 0.539062L10.0781 0L11.1328 1.05469L10.5938 1.59375L6.09375 6.09375L5.57812 6.63281Z" fill="white" />
                                </svg>
                            </Link>
                            <div className="pointer-events-none absolute left-0 top-full pt-3 opacity-0 translate-y-1 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="min-w-44 rounded-md border border-border bg-background p-2 text-foreground shadow-lg">
                                    <Link href="/" className="group block rounded-sm px-3 py-2 hover:bg-foreground/5">
                                        <StaggerText text="Features" />
                                    </Link>
                                    <Link href="/" className="group block rounded-sm px-3 py-2 hover:bg-foreground/5">
                                        <StaggerText text="Security" />
                                    </Link>
                                    <Link href="/" className="group block rounded-sm px-3 py-2 hover:bg-foreground/5">
                                        <StaggerText text="Integrations" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link href="/" className="group">
                            <StaggerText text="Developers" />
                        </Link>
                        <Link href="/" className="group">
                            <StaggerText text="Use Cases" />
                        </Link>
                        <Link href="/" className="group">
                            <StaggerText text="Company" />
                        </Link>
                    </div>
                    <div className="flex gap-1.5">
                        <Link href="/" className="group text-foreground px-2.5 md:px-4 py-2.5 rounded-sm bg-background flex items-center gap-2.5">
                            <StaggerText text="Get Started" />
                            <svg className="group-hover:rotate-45 transition-transform duration-200" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20" height="20" rx="10" fill="#101010" fillOpacity="0.1" />
                                <path d="M13.891 6.7719V11.3835C13.8766 11.7437 13.5884 12.032 13.2281 12.0464C12.8678 12.032 12.5796 11.7437 12.5652 11.3835L12.5796 8.34272L7.23304 13.6893C6.97364 13.9487 6.57013 13.9487 6.31073 13.6893C6.05133 13.4299 6.05133 13.0263 6.31073 12.7669L11.6573 7.4204L8.61651 7.43482C8.25623 7.4204 7.96801 7.13218 7.9536 6.7719C7.96801 6.41162 8.25623 6.1234 8.61651 6.10899H13.2281C13.5884 6.1234 13.8766 6.41162 13.891 6.7719Z" fill="#101010" />
                            </svg>
                        </Link>
                        <button
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-nav-menu"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="group bg-background rounded-sm flex items-center justify-center cursor-pointer p-2.5 md:hidden"
                        >
                            <svg className="transition-transform duration-300 group-hover:rotate-45" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="17.5405" height="17.5405" rx="8.77023" fill="#101010" fillOpacity="0.1" />
                                <path d="M4.76648 6.14014C4.76648 5.8184 5.01672 5.56817 5.33846 5.56817H12.2021C12.5238 5.56817 12.7741 5.8184 12.7741 6.14014C12.7741 6.46187 12.5238 6.71211 12.2021 6.71211H5.33846C5.01672 6.71211 4.76648 6.46187 4.76648 6.14014ZM4.76648 9C4.76648 8.67826 5.01672 8.42802 5.33846 8.42802H12.2021C12.5238 8.42802 12.7741 8.67826 12.7741 9C12.7741 9.32173 12.5238 9.57197 12.2021 9.57197H5.33846C5.01672 9.57197 4.76648 9.32173 4.76648 9ZM12.7741 11.8599C12.7741 12.1816 12.5238 12.4318 12.2021 12.4318H5.33846C5.01672 12.4318 4.76648 12.1816 4.76648 11.8599C4.76648 11.5381 5.01672 11.2879 5.33846 11.2879H12.2021C12.5238 11.2879 12.7741 11.5381 12.7741 11.8599Z" fill="#101010" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <div
                id="mobile-nav-menu"
                data-mobile-nav-wrap
                className="fixed inset-0 z-120 md:hidden"
                aria-hidden={!isMenuOpen}
            >
                <button
                    onClick={() => setIsMenuOpen(false)}
                    data-mobile-nav-overlay
                    className="absolute inset-0 bg-foreground/45 cursor-pointer"
                    aria-label="Close menu overlay"
                />

                <aside
                    data-mobile-nav-menu
                    className="relative ml-auto h-full w-full max-w-sm overflow-y-auto"
                >
                    <div data-mobile-nav-panel className="absolute inset-0 rounded-l-md  bg-secondary" />
                    <div data-mobile-nav-panel className="absolute inset-0 rounded-l-md  bg-primary" />
                    <div data-mobile-nav-panel className="absolute inset-0 rounded-l-md bg-background border-l border-border" />

                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute right-6 top-6 z-20 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
                        aria-label="Close menu"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33325 3.3335L12.6666 12.6668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M12.6667 3.3335L3.33333 12.6668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>

                    <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-8 pt-24">
                        <div className="space-y-2">
                            {menuItems.map((item, idx) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    data-mobile-nav-link
                                    onClick={() => setIsMenuOpen(false)}
                                    className="group flex items-start justify-between border-b border-border/80 py-4 text-foreground"
                                >
                                    <span className="text-3xl leading-none tracking-[-0.04em]">
                                        <StaggerText text={item.label} />
                                    </span>
                                    <span className="pt-1 text-xs tracking-[0.08em] text-foreground/50">
                                        {(idx + 1).toString().padStart(2, "0")}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        <div className="space-y-3">
                            <p data-mobile-nav-social className="text-sm tracking-[0.02em] text-foreground/50">
                                Socials
                            </p>
                            <div className="flex flex-wrap gap-x-5 gap-y-2">
                                {socialItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        data-mobile-nav-social
                                        onClick={() => setIsMenuOpen(false)}
                                        className="group text-sm text-foreground/80 hover:text-foreground"
                                    >
                                        <StaggerText text={item.label} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}