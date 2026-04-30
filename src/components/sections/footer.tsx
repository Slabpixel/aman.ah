"use client"

import Link from "next/link"
import Container from "./container"
import Image from "next/image"
import StaggerText from "@/components/stagger-text"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function Footer() {
    const scopeRef = useRef<HTMLElement | null>(null)

    useGSAP(
        () => {
            const brandWrap = scopeRef.current?.querySelector<HTMLElement>("[data-footer-brand-wrap]")
            const brandText = scopeRef.current?.querySelector<HTMLElement>("[data-footer-brand-text]")
            const gridWrap = scopeRef.current?.querySelector<HTMLElement>("[data-footer-grid-wrap]")
            const gridImage = scopeRef.current?.querySelector<HTMLElement>("[data-footer-grid-image]")
            if (!brandWrap || !brandText) return

            const split = new SplitText(brandText, { type: "chars" })

            gsap.set(brandWrap, { x: 24, autoAlpha: 0 })
            gsap.set(split.chars, { x: 32, autoAlpha: 0 })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: brandWrap,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            })

            tl.to(brandWrap, {
                x: 0,
                autoAlpha: 1,
                duration: 0.7,
                ease: "power3.out",
            }).to(split.chars, {
                x: 0,
                autoAlpha: 1,
                duration: 0.75,
                ease: "power2.out",
                stagger: 0.1,
            }, "-=0.55")

            if (gridWrap && gridImage) {
                gsap.fromTo(
                    gridImage,
                    { xPercent: -10 },
                    {
                        xPercent: 10,
                        ease: "none",
                        scrollTrigger: {
                            trigger: gridWrap,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    },
                )
            }

            return () => split.revert()
        },
        { scope: scopeRef, revertOnUpdate: true },
    )

    return (
        <footer ref={scopeRef} className="relative flex flex-col gap-8 h-256 lg:h-192">
            <Container className="border-b py-0 md:py-0 px-0 md:px-0 lg:px-0 xl:px-0">
                <div className="lg:grid flex flex-col-reverse lg:flex-row lg:grid-cols-2 h-full">
                    <div className="flex flex-col">
                        <div data-footer-grid-wrap className="relative max-lg:min-h-80 max-lg:border-t border-border grow overflow-hidden">
                            <Image data-footer-grid-image src="/grid-bg.svg" alt="Aman.ah" width={900} height={900} className="absolute inset-0 object-top w-full h-full object-cover" />
                        </div>
                        <div className="p-3 border-t border-border flex justify-between">
                            <div className="flex gap-2">
                                <Link href="/">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.753 7.15864H18.7561L14.4115 12.1239L19.5178 18.8947H15.5117L12.3802 14.804L8.79731 18.8947H6.79427L11.4492 13.5909L6.54036 7.15864H10.6311L13.4805 10.9108L16.753 7.15864ZM16.0477 17.7099H17.1762L10.0386 8.28711H8.85373L16.0477 17.7099Z" fill="#101010" />
                                    </svg>
                                </Link>
                                <Link href="/">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9989 9.78234C14.8045 9.78234 16.2433 11.2493 16.2433 13.0267C16.2433 14.8322 14.7763 16.2711 12.9989 16.2711C11.1934 16.2711 9.75456 14.804 9.75456 13.0267C9.75456 11.2211 11.2216 9.78234 12.9989 9.78234ZM12.9989 10.9108C11.814 10.939 10.883 11.87 10.883 13.0267C10.9112 14.2116 11.8422 15.1426 12.9989 15.1426C14.1838 15.1144 15.1148 14.1834 15.1148 13.0267C15.0866 11.8418 14.1556 10.9108 12.9989 10.9108ZM15.6226 9.64128C15.6226 10.0645 15.9612 10.403 16.3843 10.403C16.8075 10.403 17.146 10.0645 17.146 9.64128C17.146 9.2181 16.8075 8.90777 16.3843 8.90777C15.9612 8.90777 15.6226 9.2181 15.6226 9.64128ZM19.2901 10.4312C19.3466 11.475 19.3466 14.5783 19.2901 15.6222C19.2337 16.6378 19.008 17.5406 18.2745 18.2741C17.5128 19.0358 16.6382 19.2615 15.6226 19.2897C14.5788 19.3743 11.4473 19.3743 10.4034 19.2897C9.3878 19.2615 8.48503 19.0076 7.75152 18.2741C7.01801 17.5406 6.7641 16.6378 6.73589 15.6222C6.67947 14.5783 6.67947 11.4468 6.73589 10.403C6.79232 9.41558 7.01801 8.5128 7.75152 7.7793C8.48503 7.01758 9.3878 6.79188 10.4034 6.73546C11.4473 6.67904 14.5788 6.67904 15.6226 6.73546C16.6382 6.79188 17.5128 7.01758 18.2745 7.7793C19.008 8.5128 19.2337 9.41558 19.2901 10.4312ZM17.936 16.7507C18.2745 15.9325 18.1899 13.9577 18.1899 13.0267C18.1899 12.0957 18.2745 10.1209 17.936 9.30273C17.7103 8.7385 17.2871 8.31532 16.7229 8.08963C15.9047 7.7793 13.9299 7.83572 12.9989 7.83572C12.0961 7.83572 10.1213 7.7793 9.27496 8.08963C8.73893 8.31532 8.28754 8.7385 8.09006 9.30273C7.75152 10.1209 7.83615 12.0957 7.83615 13.0267C7.83615 13.9577 7.75152 15.9325 8.09006 16.7507C8.31575 17.3149 8.73893 17.7381 9.27496 17.9638C10.1213 18.2741 12.0961 18.2177 12.9989 18.2177C13.9299 18.2177 15.9047 18.2741 16.7229 17.9638C17.2871 17.7381 17.7103 17.3149 17.936 16.7507Z" fill="#101010" />
                                    </svg>
                                </Link>
                                <Link href="/">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.2231 13.0267C20.2231 16.7224 17.4583 19.7693 13.8754 20.1925V15.2272H15.822L16.2452 13.0267H13.8754V12.2368C13.8754 11.0801 14.3268 10.6287 15.5117 10.6287C15.8785 10.6287 16.1888 10.6287 16.3581 10.6569V8.65386C16.0195 8.56923 15.2296 8.48459 14.7782 8.48459C12.3802 8.48459 11.2517 9.61306 11.2517 12.0675V13.0267H9.75651V15.2272H11.2517V20.0514C8.12022 19.2615 5.77865 16.4121 5.77865 13.0267C5.77865 9.04883 9.023 5.80447 13.0009 5.80447C16.9787 5.80447 20.2231 9.04883 20.2231 13.0267Z" fill="#101010" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="flex gap-2 items-center">
                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3" cy="3" r="3" fill="#005FFB" />
                                </svg>
                                <p className="text-sm leading-[1.4] tracking-[-0.02em]">Monitored by the Data Center.</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-l border-border flex flex-col">
                        <div className="p-6 min-h-42 lg:min-h-69 lg:p-7.5 grow flex gap-6 items-end">
                            <div data-footer-brand-wrap className="flex gap-4 md:gap-6 items-end">
                                <Image src="/icon.svg" alt="Aman.ah" width={56} height={56} />
                                <span data-footer-brand-text className="text-7xl md:text-[6.25rem] leading-none -mb-1 md:-mb-2.5 tracking-[-0.02em]">
                                    aman.ah
                                </span>
                            </div>
                        </div>
                        <div className="border-t grid grid-cols-2 gap-4 border-border p-6 min-h-42 lg:p-7.5 lg:flex flex-wrap justify-between">
                            <div className="flex flex-col gap-6">
                                <p className="text-[1.0625rem] font-bold leading-[1.2]">Product</p>
                                <div className="flex flex-col gap-1 leading-[1.6] tracking-[-0.02em] text-sm text-foreground/80">
                                    <Link href="/" className="group items-center flex gap-2">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="18" height="18" rx="6" fill="#F9F9F9" />
                                            <path d="M5.5 6.5C5.5 5.67188 6.17188 5 7 5H11.5H12H12.5V11H12V12H12.5V13H12H11.5H7C6.17188 13 5.5 12.3281 5.5 11.5V6.5ZM6.5 11.5C6.5 11.7812 6.71875 12 7 12H11V11H7C6.71875 11 6.5 11.2344 6.5 11.5ZM9.35938 9.4375C9.29688 9.5 9.26562 9.5 9.25 9.5C9.21875 9.5 9.1875 9.5 9.125 9.4375C9.0625 9.39062 9 9.28125 8.9375 9.14062C8.84375 8.92188 8.78125 8.60938 8.75 8.25H9.73438C9.71875 8.60938 9.64062 8.92188 9.54688 9.14062C9.48438 9.28125 9.42188 9.39062 9.35938 9.4375ZM10.0312 9.28125C10.1406 9 10.2188 8.64062 10.2344 8.25H10.7188C10.6406 8.6875 10.3906 9.0625 10.0312 9.28125ZM10.0312 6.73438C10.3906 6.95312 10.6562 7.32812 10.7188 7.75H10.2344C10.2188 7.375 10.1406 7.01562 10.0312 6.73438ZM11.25 8C11.25 7.29688 10.8594 6.64062 10.25 6.28125C9.625 5.92188 8.85938 5.92188 8.25 6.28125C7.625 6.64062 7.25 7.29688 7.25 8C7.25 8.71875 7.625 9.375 8.25 9.73438C8.85938 10.0938 9.625 10.0938 10.25 9.73438C10.8594 9.375 11.25 8.71875 11.25 8ZM7.76562 8.25H8.25C8.26562 8.64062 8.34375 9 8.45312 9.28125C8.09375 9.0625 7.82812 8.6875 7.76562 8.25ZM8.25 7.75H7.76562C7.84375 7.32812 8.09375 6.95312 8.45312 6.73438C8.34375 7.01562 8.26562 7.375 8.25 7.75ZM9.125 6.57812C9.1875 6.51562 9.21875 6.5 9.23438 6.5C9.26562 6.5 9.29688 6.51562 9.35938 6.57812C9.42188 6.625 9.48438 6.73438 9.54688 6.875C9.64062 7.09375 9.70312 7.40625 9.73438 7.75H8.75C8.76562 7.40625 8.84375 7.09375 8.9375 6.875C9 6.73438 9.0625 6.625 9.125 6.57812Z" fill="#101010" />
                                        </svg>
                                        <StaggerText text="Corporate Ledger" /></Link>
                                    <Link href="/" className="group items-center flex gap-2">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="18" height="18" rx="6" fill="#F9F9F9" />
                                            <path d="M9.5 5V7.5H12V13H6V5H9.5ZM10 5L12 7H10V5ZM7.25 6H7V6.5H7.25H8.25H8.5V6H8.25H7.25ZM7.25 7H7V7.5H7.25H8.25H8.5V7H8.25H7.25ZM8.125 9.75H7.9375L7.875 9.9375L7.5625 11H7.25H7V11.5H7.25H7.75H7.92188L7.98438 11.3281L8.25 10.4531L8.5 11.3281L8.5625 11.5H8.75H8.875H9.01562L9.09375 11.375L9.26562 11H9.46875L9.64062 11.375L9.71875 11.5H9.875H10.75H11V11H10.75H10.0156L9.84375 10.6406L9.76562 10.5156H9.625H9.125H8.96875L8.89062 10.6406L8.84375 10.7344L8.60938 9.9375L8.54688 9.75H8.375H8.125Z" fill="#101010" />
                                        </svg>
                                        <StaggerText text="Gov-Gateway" /></Link>
                                    <Link href="/" className="group items-center flex gap-2">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="18" height="18" rx="6" fill="#F9F9F9" />
                                            <path d="M4.75 5.23438L6.35938 6.48438C7.0625 5.92188 7.95312 5.5 9 5.5C11.4688 5.5 13.0312 7.84375 13.5 9C13.2812 9.54688 12.8281 10.3281 12.1875 11.0156L13.6875 12.1875L13.9844 12.4062L13.5312 13L13.2344 12.7812L4.29688 5.82812L4 5.59375L4.45312 5.01562L4.75 5.23438ZM7.46875 7.34375L8.875 8.4375L8.70312 7.53125C8.79688 7.51562 8.89062 7.5 9 7.5C9.82812 7.5 10.5 8.17188 10.5 9C10.5 9.21875 10.4531 9.42188 10.375 9.60938L10.9688 10.0781C11.1406 9.75 11.25 9.39062 11.25 9C11.25 7.76562 10.2344 6.75 9 6.75C8.40625 6.75 7.875 6.98438 7.46875 7.34375ZM10.9375 11.9844C10.375 12.2969 9.71875 12.5 9 12.5C6.51562 12.5 4.96875 10.1719 4.5 9C4.65625 8.60938 4.9375 8.09375 5.32812 7.5625L6.76562 8.6875C6.75 8.79688 6.75 8.90625 6.75 9C6.75 10.25 7.75 11.25 9 11.25C9.28125 11.25 9.5625 11.2031 9.82812 11.0938L10.9375 11.9844ZM9.0625 10.5C9.04688 10.5 9.01562 10.5 9 10.5C8.26562 10.5 7.65625 9.98438 7.51562 9.28125L9.0625 10.5Z" fill="#101010" />
                                        </svg>

                                        <StaggerText text="Automated Audit" /></Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <p className="text-[1.0625rem] font-bold leading-[1.2]">Governance</p>
                                <div className="flex flex-col gap-1 leading-[1.6] tracking-[-0.02em] text-sm text-foreground/80">
                                    <Link href="/" className="group"><StaggerText text="KPK Integration" /></Link>
                                    <Link href="/" className="group"><StaggerText text="PDN Data Sync" /></Link>
                                    <Link href="/" className="group"><StaggerText text="Security Protocols" /></Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <p className="text-[1.0625rem] font-bold leading-[1.2]">Resources</p>
                                <div className="flex flex-col gap-1 leading-[1.6] tracking-[-0.02em] text-sm text-foreground/80">
                                    <Link href="/" className="group"><StaggerText text="Transparency Report" /></Link>
                                    <Link href="/" className="group"><StaggerText text="Audit Whitepaper" /></Link>
                                    <Link href="/" className="group"><StaggerText text="Developer API" /></Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <p className="text-[1.0625rem] font-bold leading-[1.2]">Company</p>
                                <div className="flex flex-col gap-1 leading-[1.6] tracking-[-0.02em] text-sm text-foreground/80">
                                    <Link href="/" className="group"><StaggerText text="Our Mission" /></Link>
                                    <Link href="/" className="group"><StaggerText text="Security Lab" /></Link>
                                    <Link href="/" className="group"><StaggerText text="Careers" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="border-0 flex max-lg:flex-col max-lg:items-center justify-between gap-4 px-0 md:px-0 lg:px-0 xl:px-0 py-0 md:py-0 text-foreground/60 leading-normal tracking-[-0.02em] text-sm">
                <p>© 2025 aman.ah Technologies.</p>
                <div className="flex relative z-1 gap-4">
                    <Link href="/" className="group"><StaggerText text="Privacy Policy" /></Link>
                    <Link href="/" className="group"><StaggerText text="Terms of Service" /></Link>
                </div>
            </Container>
            <Image src="/gradient-bottom.svg" alt="Aman.ah" width={1440} height={200} className="w-full mx-auto absolute bottom-0 2xl:max-h-100" />
        </footer>
    )
}