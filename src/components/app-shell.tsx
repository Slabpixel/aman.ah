'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Navbar from '@/components/navbar'
import Preloader from '@/components/preloader'
import { useRevealGate } from '@/providers/reveal-provider'

gsap.registerPlugin(useGSAP)

export default function AppShell({ children }: { children: React.ReactNode }) {
    const scopeRef = useRef<HTMLDivElement | null>(null)
    const { isPreloaderDone } = useRevealGate()

    useGSAP(
        () => {
            if (!isPreloaderDone) {
                gsap.set('[data-navbar]', { autoAlpha: 0, y: -24 })
                return
            }

            gsap.fromTo(
                '[data-navbar]',
                { autoAlpha: 0, y: -24 },
                { autoAlpha: 1, y: 0, duration: 0.65, ease: 'power3.out' },
            )
        },
        { scope: scopeRef, dependencies: [isPreloaderDone], revertOnUpdate: true },
    )

    return (
        <div ref={scopeRef}>
            <Preloader />
            <Navbar />
            {children}
        </div>
    )
}
