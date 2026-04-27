'use client'

import { createContext, useContext, useMemo, useState } from 'react'

interface RevealGateContextValue {
    isPreloaderDone: boolean
    setIsPreloaderDone: (value: boolean) => void
}

const RevealGateContext = createContext<RevealGateContextValue | null>(null)

export function RevealProvider({ children }: { children: React.ReactNode }) {
    const [isPreloaderDone, setIsPreloaderDone] = useState(false)

    const value = useMemo(
        () => ({ isPreloaderDone, setIsPreloaderDone }),
        [isPreloaderDone],
    )

    return (
        <RevealGateContext.Provider value={value}>
            {children}
        </RevealGateContext.Provider>
    )
}

export function useRevealGate() {
    const context = useContext(RevealGateContext)

    if (!context) {
        throw new Error('useRevealGate must be used within RevealProvider')
    }

    return context
}
