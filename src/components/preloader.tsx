'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { useRevealGate } from '@/providers/reveal-provider'

gsap.registerPlugin(useGSAP, SplitText)

export default function Preloader() {
    const pathname = usePathname()
    const rootRef = useRef<HTMLDivElement | null>(null)
    const { setIsPreloaderDone } = useRevealGate()

    useGSAP(
        () => {
            setIsPreloaderDone(false)

            const splitText = new SplitText('[data-preloader-text]', {
                type: 'chars',
            })

            const tl = gsap.timeline({
                defaults: { ease: 'power3.out' },
                onComplete: () => {
                    setIsPreloaderDone(true)
                },
            })

            tl
                .set('[data-preloader-overlay]', {
                    autoAlpha: 1,
                    pointerEvents: 'auto',
                })
                .to('[data-preloader-logo]', {
                    autoAlpha: 1,
                    scale: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    duration: 1,
                })
                .to(
                    '[data-preloader-text]',
                    {
                        width: 'auto',
                        duration: 0.5,
                    },
                    
                ).from(splitText.chars, {
                    x: 16,
                    autoAlpha: 0,
                    stagger: 0.1,  
                    duration: 0.5,
                    ease: 'power4.inOut',
                }, '<-0.1')
                .to('[data-preloader-container]', {
                    autoAlpha: 0,
                    scale: 2,
                    filter: 'blur(10px)',
                    ease: 'power4.inOut',
                    duration: 0.5,
                })
                .to('[data-preloader-overlay]', {
                    autoAlpha: 0,
                    duration: 0.25,
                    ease: 'power4.inOut',
                })
                .set('[data-preloader-overlay]', { pointerEvents: 'none' })
        },
        { scope: rootRef, dependencies: [pathname], revertOnUpdate: true },
    )

    return (
        <div ref={rootRef}>
            <div
                data-preloader-overlay
                className="bg-background fixed inset-0 z-200 flex items-center justify-center"
            >
                <div data-preloader-container className='flex items-center justify-center'>
                    <Image
                        data-preloader-logo
                        src="/icon.svg"
                        alt="Aman.ah"
                        width={210}
                        height={62}
                        priority
                        className="h-auto w-auto max-w-[52vw] blur-xs scale-200"
                    />
                    <div data-preloader-text className='overflow-hidden w-0'>
                        <p className="pl-6 text-5xl font-bold text-nowrap">
                            aman.ah
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
