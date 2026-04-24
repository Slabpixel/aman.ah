import Link from "next/link";
import Image from "next/image";
import PlayStore from "../../../public/playstore.svg";
import AppStore from "../../../public/appstore.svg";

export default function CtaSection() {
  return (
    <section className="relative flex flex-col justify-between bg-background h-225 px-5 lg:px-17.5 overflow-hidden">
      <div className="relative mx-auto bg-background w-full max-w-325 border-x border-border px-4 lg:px-16 xl:px-17.5  py-16">
        <Image src="/grid-bg.svg" alt="Grid Background" fill />
        <div className="relative text-center flex flex-col items-center gap-6">
          <h2 className="text-[clamp(3rem,8vw,5rem)] tracking-[-0.03em]">
            Stop Hiding
            <br />
            Start Winning.
          </h2>
          <div className="flex items-center gap-2.5 mb-3">
            <Link className="hover:scale-105 transition-all duration-300 ease-in-out active:scale-90" href="https://play.google.com/" target="_blank">
              <PlayStore />
            </Link>
            <Link className="hover:scale-105 transition-all duration-300 ease-in-out active:scale-90" href="https://apps.apple.com/" target="_blank">
              <AppStore />
            </Link>
          </div>
          <div className="flex max-md:flex-col md:w-full md:items-center md:justify-center gap-5">
            <div className="flex gap-2.5 shrink-0">
              <div className="aspect-square size-9 rounded bg-[#F1F1F1] flex items-center justify-center">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4.57031L8.125 0L16.25 4.57031V6.09375H0V4.57031ZM4.0625 7.10938V13.2031H5.33203V7.10938H7.36328V13.2031H8.88672V7.10938H10.918V13.2031H12.1875V7.10938H14.2188V13.2031L16.25 14.7266V16.25H0V14.7266L2.03125 13.2031V7.10938H4.0625Z" fill="#101010" />
                </svg>

              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex gap-0.5">
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#9CDA5D" />
                  </svg>
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#9CDA5D" />
                  </svg>
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#9CDA5D" />
                  </svg>
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#9CDA5D" />
                  </svg>
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#CCCCCC" />
                  </svg>

                </div>
                <p className="inline-flex gap-1.5 text-foreground text-xs leading-[1.2] text-nowrap tracking-[-0.02em]">
                  <span className="text-foreground/70">From</span>
                  Institutional Standard
                </p>
              </div>
            </div>
            <div className="flex gap-2.5 shrink-0">
              <div className="aspect-square size-9 rounded bg-[#F1F1F1] flex items-center justify-center">
                <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2505 9.45801C13.6157 10.3149 12.981 11.2036 12.6953 12.1875H7.61719C7.2998 11.2036 6.66504 10.3149 6.03027 9.45801C5.87158 9.23584 5.71289 9.01367 5.5542 8.7915C4.91943 7.87109 4.57031 6.79199 4.57031 5.58594C4.57031 2.50732 7.0459 0 10.1562 0C13.2349 0 15.7422 2.50732 15.7422 5.58594C15.7422 6.79199 15.3613 7.87109 14.7266 8.7915C14.5679 9.01367 14.4092 9.23584 14.2505 9.45801ZM7.61719 16.25V13.2031H12.6953V16.25H7.61719ZM10.1562 3.04688V2.03125C8.18848 2.03125 6.60156 3.6499 6.60156 5.58594H7.61719C7.61719 4.18945 8.72803 3.04688 10.1562 3.04688ZM2.76123 0.507812L2.95166 0.634766L3.71338 1.14258L4.34814 1.58691L3.49121 2.85645L2.85645 2.41211L2.09473 1.9043L1.9043 1.77734L1.26953 1.36475L2.12646 0.0952148L2.76123 0.507812ZM18.3765 1.77734L18.186 1.9043L17.4243 2.41211L16.7896 2.85645L15.9326 1.58691L16.5674 1.14258L17.3291 0.634766L17.5195 0.507812L18.1543 0.0952148L19.0112 1.36475L18.3765 1.77734ZM0.761719 5.07812H2.28516H3.04688V6.60156H2.28516H0.761719H0V5.07812H0.761719ZM18.0273 5.07812H19.5508H20.3125V6.60156H19.5508H18.0273H17.2656V5.07812H18.0273ZM3.71338 10.5371L2.95166 11.0449L2.76123 11.1719L2.12646 11.6162L1.26953 10.3467L1.9043 9.90234L2.09473 9.77539L2.85645 9.26758L3.49121 8.85498L4.34814 10.1245L3.71338 10.5371ZM17.4243 9.29932L18.186 9.80713L18.3765 9.93408L19.0112 10.3467L18.1543 11.6162L17.5195 11.1719L17.3291 11.0449L16.5674 10.5371L15.9326 10.1245L16.7896 8.85498L17.4243 9.29932Z" fill="#101010" />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex gap-0.5">
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#9CDA5D" />
                  </svg>
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#9CDA5D" />
                  </svg>
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#9CDA5D" />
                  </svg>
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#9CDA5D" />
                  </svg>
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#CCCCCC" />
                  </svg>

                </div>
                <p className="inline-flex gap-1.5 text-foreground text-xs leading-[1.2] flex-nowrap tracking-[-0.02em]">
                  <span className="text-foreground/70">From</span>
                  Corporate Breakthrough
                </p>
              </div>
            </div>
            <div className="flex gap-2.5 shrink-0">
              <div className="aspect-square size-9 rounded bg-[#F1F1F1] flex items-center justify-center">
                <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.10938 0V5.07812H12.1875V16.25H0V0H7.10938ZM8.125 0L12.1875 4.0625H8.125V0ZM2.53906 2.03125H2.03125V3.04688H2.53906H4.57031H5.07812V2.03125H4.57031H2.53906ZM2.53906 4.0625H2.03125V5.07812H2.53906H4.57031H5.07812V4.0625H4.57031H2.53906ZM4.31641 9.64844H3.93555L3.80859 10.0293L3.17383 12.1875H2.53906H2.03125V13.2031H2.53906H3.55469H3.90381L4.03076 12.854L4.57031 11.0767L5.07812 12.854L5.20508 13.2031H5.58594H5.83984H6.12549L6.28418 12.9492L6.6333 12.1875H7.0459L7.39502 12.9492L7.55371 13.2031H7.87109H9.64844H10.1562V12.1875H9.64844H8.15674L7.80762 11.4575L7.64893 11.2036H7.36328H6.34766H6.03027L5.87158 11.4575L5.77637 11.6479L5.30029 10.0293L5.17334 9.64844H4.82422H4.31641Z" fill="#101010" />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex gap-0.5">
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#9CDA5D" />
                  </svg>
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#9CDA5D" />
                  </svg>
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#9CDA5D" />
                  </svg>
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#9CDA5D" />
                  </svg>
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.13293 0L9.73388 3.9201L14.2659 5.18237L11.3414 8.8674L11.5413 13.5676L7.13293 11.925L2.72455 13.5676L2.92451 8.8674L1.04904e-05 5.18237L4.53199 3.9201L7.13293 0Z" fill="#CCCCCC" />
                  </svg>

                </div>
                <p className="inline-flex gap-1.5 text-foreground text-xs leading-[1.2] flex-nowrap text-nowrap tracking-[-0.02em]">
                  <span className="text-foreground/70">From</span>
                  Auditor’s View
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className="absolute inset-0 flex grow justify-stretch items-end">
        <div className="relative w-full h-full flex flex-col justify-end items-center">
          <Image src="/hero-gradient.png" alt="Hero Gradient" width={2000} height={100} className="absolute max-md:hidden h-1/2 object-cover object-top min-w-500 mx-auto" />
          <Image src="/hero-gradient-alt.png" alt="Hero Gradient" width={768} height={100} className="absolute md:hidden h-1/2 object-cover object-top min-w-3xl mx-auto" />
          <Image src="/hero-accent.svg" alt="Hero Accent" width={1440} height={100} className="absolute h-1/2 object-cover object-top mx-auto w-full" />
          <Image src="/cards.svg" alt="Cards" width={1162} height={328} className="absolute min-h-80 object-cover" />
        </div>
      </div>
    </section>
  );
}
