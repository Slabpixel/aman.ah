'use client'

import PlayStore from "../../../public/playstore.svg";
import AppStore from "../../../public/appstore.svg";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRevealGate } from "@/providers/reveal-provider";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
    const scopeRef = useRef<HTMLElement | null>(null);
    const { isPreloaderDone } = useRevealGate();

    useGSAP(
        () => {
            const revealTargets = [
                "[data-hero-title]",
                "[data-hero-stores]",
                "[data-hero-phone]",
                "[data-hero-pills]",
            ];

            gsap.set(revealTargets, { autoAlpha: 0 });
            gsap.set("[data-hero-gradient]", { filter: "blur(50px)" });
            gsap.set("[data-hero-gradient-text]", { xPercent: -100 });

            if (!isPreloaderDone) return;

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                "[data-hero-phone]",
                { autoAlpha: 1, scale: 1.2, y: 100 },
                {
                    autoAlpha: 1,
                    duration: 0.5,
                },
            )
            .to(
                "[data-hero-phone]",
                {
                    y: -100,
                    scale: 1.2,
                    duration: 1,
                },
                "<",
            )
            .to(
                "[data-hero-phone]",
                {
                    scale: 1,
                    y: 0,
                    duration: 0.75,
                },
                "-=0.1",
            )
            .to(
                "[data-hero-gradient]",
                {
                    filter: "blur(0px)",
                    duration: 2,
                },
                "<",
            ).to(
                "[data-hero-gradient-text]",
                {
                    xPercent: 0,
                    duration: 1.5,
                    ease: "circ.inOut",
                },
                "0.5",
            )
            .fromTo(
                "[data-hero-title]",
                { autoAlpha: 0, y: 24, },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.7,
                },
                ">-0.5",
            )
                .fromTo(
                    "[data-hero-stores]",
                    { autoAlpha: 0, scale: 0, transformOrigin: "top" },
                    {
                        autoAlpha: 1,
                        scale: 1,
                        duration: 0.75,
                    },
                    "-=1.2",
                )
                
                .fromTo(
                    "[data-hero-pills]",
                    { 
                        scale: 0,
                        autoAlpha: 0,
                    },
                    {
                        scale: 1,
                        autoAlpha: 1,
                        duration: 0.75,
                    },
                    "-=0.75",
                );
        },
        { scope: scopeRef, dependencies: [isPreloaderDone], revertOnUpdate: true },
    );

    return (
        <section ref={scopeRef} className="relative flex flex-col justify-between bg-background min-h-210 h-dvh max-h-250 px-5 lg:px-17.5 overflow-hidden">
            <div className="relative mx-auto bg-background w-full max-w-325 border-x border-border px-4 lg:px-16 xl:px-17.5  py-30">
                <Image src="/grid-bg.svg" alt="Grid Background" fill />
                <div className="relative z-2 flex flex-col items-center gap-6">
                    <h1 data-hero-title className="relative text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5rem] tracking-[-0.04em] text-center bg-linear-to-r from-30% from-foreground to-foreground/60 bg-clip-text text-transparent">
                        Where Every Cent
                        <br />
                        <span className="text-foreground">
                            Has a Signature
                        </span>
                    </h1>
                    <div data-hero-stores className="flex items-center gap-2.5">
                        <Link className="hover:scale-105 transition-all duration-300 ease-in-out active:scale-90" href="https://play.google.com/" target="_blank">
                            <PlayStore />
                        </Link>
                        <Link className="hover:scale-105 transition-all duration-300 ease-in-out active:scale-90" href="https://apps.apple.com/" target="_blank">
                            <AppStore />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 flex grow justify-stretch items-end">
                <div className="relative w-full h-full flex flex-col justify-end items-center">
                    <Image data-hero-gradient src="/hero-gradient.png" alt="Hero Gradient" width={2000} height={100} className="absolute max-md:hidden h-1/2 object-cover object-top min-w-500 mx-auto" />
                    <Image data-hero-gradient src="/hero-gradient-alt.png" alt="Hero Gradient" width={768} height={100} className="absolute md:hidden h-3/5 object-cover object-top min-w-3xl mx-auto" />
                    <Image data-hero-accent src="/hero-accent.svg" alt="Hero Accent" width={1440} height={100} className="absolute h-1/2 object-cover object-top mx-auto w-full" />
                    <span data-hero-gradient-text className="absolute h-1/2 w-full mx-auto object-contain flex justify-center items-center pt-20">
                        <svg className="min-w-370" width="1439" height="385" viewBox="0 0 1439 385" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_4879_11675" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="-1" y="0" width="1440" height="385">
                                <rect x="-1" width="1440" height="385" fill="url(#paint0_linear_4879_11675)" />
                            </mask>
                            <g mask="url(#mask0_4879_11675)">
                                <g opacity="0.2">
                                    <path d="M1200.7 328.381V55H1241.82V161.852H1242.76C1247.94 150.232 1255.77 141.264 1266.25 134.949C1276.86 128.508 1289.62 125.287 1304.52 125.287C1318.8 125.287 1331.17 128.634 1341.66 135.328C1352.27 141.896 1360.48 151.179 1366.29 163.178C1372.22 175.176 1375.19 189.196 1375.19 205.236V328.381H1334.08V213.004C1334.08 196.458 1330.1 183.576 1322.14 174.355C1314.19 165.135 1303.01 160.525 1288.61 160.525C1279.26 160.525 1271.05 162.736 1263.98 167.156C1257.03 171.577 1251.6 177.702 1247.69 185.533C1243.77 193.364 1241.82 202.521 1241.82 213.004V328.381H1200.7Z" fill="white" />
                                    <path d="M1072.05 331.98C1058.79 331.98 1047.17 329.454 1037.19 324.402C1027.21 319.35 1019.45 312.277 1013.89 303.184C1008.33 294.09 1005.55 283.607 1005.55 271.734V271.355C1005.55 259.736 1008.46 249.758 1014.27 241.422C1020.08 232.96 1028.48 226.266 1039.46 221.34C1050.58 216.414 1063.97 213.509 1079.63 212.625L1155.03 208.078V236.875L1085.12 241.232C1072.87 241.99 1063.4 244.958 1056.7 250.137C1050.14 255.189 1046.85 261.946 1046.85 270.408V270.787C1046.85 279.502 1050.14 286.385 1056.7 291.438C1063.4 296.49 1072.24 299.016 1083.23 299.016C1092.83 299.016 1101.42 297.058 1108.99 293.143C1116.7 289.227 1122.76 283.859 1127.18 277.039C1131.6 270.092 1133.81 262.325 1133.81 253.736V194.438C1133.81 183.449 1130.4 174.861 1123.58 168.672C1116.76 162.357 1106.97 159.199 1094.22 159.199C1082.47 159.199 1073 161.725 1065.8 166.777C1058.73 171.829 1054.3 178.334 1052.54 186.291L1052.16 187.996H1013.51L1013.7 185.912C1014.71 174.419 1018.56 164.125 1025.26 155.031C1031.95 145.811 1041.23 138.549 1053.11 133.244C1064.98 127.939 1079.06 125.287 1095.35 125.287C1111.65 125.287 1125.73 128.003 1137.6 133.434C1149.47 138.865 1158.69 146.506 1165.26 156.357C1171.83 166.209 1175.11 177.766 1175.11 191.027V328.381H1133.81V296.932H1133.05C1129.14 304.131 1124.09 310.383 1117.9 315.688C1111.71 320.866 1104.7 324.908 1096.87 327.812C1089.16 330.591 1080.89 331.98 1072.05 331.98Z" fill="white" />
                                    <path d="M965.184 331.223C958.111 331.223 952.174 328.823 947.375 324.023C942.576 319.224 940.176 313.288 940.176 306.215C940.176 299.268 942.576 293.395 947.375 288.596C952.174 283.796 958.111 281.396 965.184 281.396C972.13 281.396 978.003 283.796 982.803 288.596C987.602 293.395 990.002 299.268 990.002 306.215C990.002 313.288 987.602 319.224 982.803 324.023C978.003 328.823 972.13 331.223 965.184 331.223Z" fill="white" />
                                    <path d="M745.782 328.381V129.076H787.083V159.199H787.84C793.145 149.095 800.913 140.949 811.143 134.76C821.374 128.445 834.004 125.287 849.034 125.287C870.884 125.287 887.808 131.918 899.807 145.18C911.806 158.315 917.805 176.376 917.805 199.363V328.381H876.694V207.32C876.694 192.29 873.157 180.734 866.084 172.65C859.138 164.567 848.592 160.525 834.446 160.525C824.847 160.525 816.448 162.673 809.249 166.967C802.176 171.261 796.681 177.26 792.766 184.965C788.977 192.669 787.083 201.763 787.083 212.246V328.381H745.782Z" fill="white" />
                                    <path d="M618.833 331.98C605.571 331.98 593.951 329.454 583.974 324.402C573.996 319.35 566.228 312.277 560.671 303.184C555.114 294.09 552.335 283.607 552.335 271.734V271.355C552.335 259.736 555.24 249.758 561.05 241.422C566.86 232.96 575.259 226.266 586.247 221.34C597.362 216.414 610.75 213.509 626.411 212.625L701.813 208.078V236.875L631.905 241.232C619.654 241.99 610.181 244.958 603.487 250.137C596.92 255.189 593.636 261.946 593.636 270.408V270.787C593.636 279.502 596.92 286.385 603.487 291.438C610.181 296.49 619.022 299.016 630.011 299.016C639.61 299.016 648.198 297.058 655.776 293.143C663.481 289.227 669.543 283.859 673.964 277.039C678.384 270.092 680.595 262.325 680.595 253.736V194.438C680.595 183.449 677.185 174.861 670.364 168.672C663.544 162.357 653.756 159.199 640.999 159.199C629.253 159.199 619.78 161.725 612.581 166.777C605.508 171.829 601.088 178.334 599.319 186.291L598.94 187.996H560.292L560.481 185.912C561.492 174.419 565.344 164.125 572.038 155.031C578.732 145.811 588.015 138.549 599.888 133.244C611.76 127.939 625.843 125.287 642.136 125.287C658.429 125.287 672.511 128.003 684.384 133.434C696.256 138.865 705.476 146.506 712.044 156.357C718.612 166.209 721.895 177.766 721.895 191.027V328.381H680.595V296.932H679.837C675.922 304.131 670.869 310.383 664.681 315.688C658.492 320.866 651.482 324.908 643.651 327.812C635.947 330.591 627.674 331.98 618.833 331.98Z" fill="white" />
                                    <path d="M255.447 328.381V129.076H296.748V159.957H297.505C301.8 149.474 308.809 141.075 318.535 134.76C328.26 128.445 339.627 125.287 352.636 125.287C361.73 125.287 369.94 126.803 377.265 129.834C384.717 132.865 391.095 137.349 396.4 143.285C401.705 149.095 405.62 156.168 408.146 164.504H409.093C412.503 156.421 417.24 149.474 423.302 143.664C429.491 137.728 436.627 133.181 444.71 130.023C452.92 126.866 461.761 125.287 471.234 125.287C484.369 125.287 495.8 128.066 505.525 133.623C515.25 139.054 522.828 146.695 528.259 156.547C533.69 166.398 536.406 177.955 536.406 191.217V328.381H495.105V201.258C495.105 192.543 493.589 185.154 490.558 179.092C487.653 173.029 483.359 168.419 477.675 165.262C472.118 162.104 465.235 160.525 457.025 160.525C448.942 160.525 441.805 162.357 435.617 166.02C429.554 169.682 424.755 174.798 421.218 181.365C417.808 187.933 416.103 195.385 416.103 203.721V328.381H375.749V198.227C375.749 190.522 374.171 183.891 371.013 178.334C367.982 172.65 363.688 168.293 358.13 165.262C352.573 162.104 345.879 160.525 338.048 160.525C330.091 160.525 322.955 162.483 316.64 166.398C310.451 170.188 305.589 175.429 302.052 182.123C298.516 188.817 296.748 196.521 296.748 205.236V328.381H255.447Z" fill="white" />
                                    <path d="M128.498 331.98C115.236 331.98 103.617 329.454 93.6387 324.402C83.6608 319.35 75.8932 312.277 70.3359 303.184C64.7786 294.09 62 283.607 62 271.734V271.355C62 259.736 64.9049 249.758 70.7148 241.422C76.5247 232.96 84.9238 226.266 95.9121 221.34C107.027 216.414 120.415 213.509 136.076 212.625L211.479 208.078V236.875L141.57 241.232C129.319 241.99 119.846 244.958 113.152 250.137C106.585 255.189 103.301 261.946 103.301 270.408V270.787C103.301 279.502 106.585 286.385 113.152 291.438C119.846 296.49 128.688 299.016 139.676 299.016C149.275 299.016 157.863 297.058 165.441 293.143C173.146 289.227 179.208 283.859 183.629 277.039C188.049 270.092 190.26 262.325 190.26 253.736V194.438C190.26 183.449 186.85 174.861 180.029 168.672C173.209 162.357 163.421 159.199 150.664 159.199C138.918 159.199 129.445 161.725 122.246 166.777C115.173 171.829 110.753 178.334 108.984 186.291L108.605 187.996H69.957L70.1465 185.912C71.1569 174.419 75.0091 164.125 81.7031 155.031C88.3971 145.811 97.6803 138.549 109.553 133.244C121.425 127.939 135.508 125.287 151.801 125.287C168.094 125.287 182.176 128.003 194.049 133.434C205.921 138.865 215.141 146.506 221.709 156.357C228.277 166.209 231.561 177.766 231.561 191.027V328.381H190.26V296.932H189.502C185.587 304.131 180.535 310.383 174.346 315.688C168.157 320.866 161.147 324.908 153.316 327.812C145.612 330.591 137.339 331.98 128.498 331.98Z" fill="white" />
                                </g>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_4879_11675" x1="719" y1="0" x2="719" y2="348.906" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#D9D9D9" />
                                    <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </span>
                    <img
                        src="/hero-phone-alt.png"
                        alt="Hero Phone"
                        className="absolute object-contain origin-bottom mb-10 w-[90%] max-w-80 md:hidden"
                        data-hero-phone
                    />
                    <img
                        src="/hero-phone.png"
                        alt="Hero Phone"
                        className="absolute hidden object-contain w-full max-w-lg md:block md:w-[50vh]"
                        data-hero-phone
                    />
                    <div className="flex px-4 max-sm:flex-col gap-1.75 md:gap-3 items-center pb-11 lg:pb-20 text-sm lg:text-base">
                        <div data-hero-pills className="flex origin-bottom-right items-center gap-2 py-1.5 pl-1.5 pr-2 md:py-2 md:pl-2.5 md:pr-3 bg-background/10 backdrop-blur-xs rounded-md">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="18" height="18" rx="6" fill="white" />
                                <path d="M4.5 5H5H13H13.5V5.5V8.89062C13.2344 8.65625 12.875 8.5 12.5 8.5V6H5.5V8.5C5.10938 8.5 4.76562 8.65625 4.5 8.89062V5.5V5ZM4.5 10C4.5 9.65625 4.6875 9.32812 5 9.14062C5.29688 8.96875 5.6875 8.96875 6 9.14062C6.29688 9.32812 6.5 9.65625 6.5 10C6.5 10.3594 6.29688 10.6875 6 10.875C5.6875 11.0469 5.29688 11.0469 5 10.875C4.6875 10.6875 4.5 10.3594 4.5 10ZM8 10C8 9.65625 8.1875 9.32812 8.5 9.14062C8.79688 8.96875 9.1875 8.96875 9.5 9.14062C9.79688 9.32812 10 9.65625 10 10C10 10.3594 9.79688 10.6875 9.5 10.875C9.1875 11.0469 8.79688 11.0469 8.5 10.875C8.1875 10.6875 8 10.3594 8 10ZM12.5 9C12.8438 9 13.1719 9.20312 13.3594 9.5C13.5312 9.8125 13.5312 10.2031 13.3594 10.5C13.1719 10.8125 12.8438 11 12.5 11C12.1406 11 11.8125 10.8125 11.625 10.5C11.4531 10.2031 11.4531 9.8125 11.625 9.5C11.8125 9.20312 12.1406 9 12.5 9ZM10.5 13H7.5L8 11.5H10L10.5 13ZM4.5 11.5H6.5L7 13H4L4.5 11.5ZM14 13H11L11.5 11.5H13.5L14 13Z" fill="#101010" />
                            </svg>
                            <span className="text-background tracking-[-0.02em]">
                                Transaction Monitoring
                            </span>
                        </div>
                        <div data-hero-pills className="flex origin-bottom items-center gap-2 py-1.5 pl-1.5 pr-2 md:py-2 md:pl-2.5 md:pr-3 bg-background/10 backdrop-blur-xs rounded-md">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="18" height="18" rx="6" fill="white" />
                                <path d="M6.04688 6.3125C6.76562 5.51562 7.82812 5 9 5C11.2031 5 13 6.79688 13 9C13 11.2188 11.2031 13 9 13C8.14062 13 7.35938 12.7344 6.70312 12.2969L7.28125 11.4688C7.76562 11.8125 8.35938 12 9 12C10.6562 12 12 10.6562 12 9C12 7.34375 10.6562 6 9 6C8.09375 6 7.29688 6.39062 6.75 7.01562L7.75 8H5V5.25L6.04688 6.3125ZM9.375 7H9.35938V7.375V8.84375L10.25 9.73438L10.5156 10L10 10.5312L9.73438 10.2656L8.73438 9.26562L8.625 9.15625V9V7.375V7H9.375Z" fill="#101010" />
                            </svg>

                            <span className="text-background tracking-[-0.02em]">
                                Audit Trail & Logging
                            </span>
                        </div>
                        <div data-hero-pills className="flex origin-bottom-left items-center gap-2 py-1.5 pl-1.5 pr-2 md:py-2 md:pl-2.5 md:pr-3 bg-background/10 backdrop-blur-xs rounded-md">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="18" height="18" rx="6" fill="white" />
                                <path d="M10.375 5.875L10 6.25L11.75 8L12.125 7.625L13 8.5L10.75 10.75L9.875 9.875L10.25 9.5L8.5 7.75L8.125 8.125L7.25 7.25L9.5 5L10.375 5.875ZM8.34375 10.3594L8.625 10.625L6.25 13L5 11.75L7.375 9.375L7.64062 9.65625L8.65625 8.625L9.375 9.34375L8.34375 10.3594Z" fill="#101010" />
                            </svg>

                            <span className="text-background tracking-[-0.02em]">
                                Governance, Risk & Compliance
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}