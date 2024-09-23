import { useEffect, useState } from 'react'

interface HookState {
    width: number
    height: number
    scrollY: number
}
export const useResize = () => {
    const [windowSize, setWindowSize] = useState<HookState>()

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            scrollY: window.scrollY
        })

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                scrollY: window.scrollY
            })
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowSize
}
