import { useEffect, useRef } from 'react'

export function useTimeout (callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (delay === null) return

    const id = setTimeout(() => { savedCallback.current() }, delay)

    return () => { clearTimeout(id) }
  }, [delay])
}
