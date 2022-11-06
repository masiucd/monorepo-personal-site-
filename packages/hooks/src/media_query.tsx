import {useEffect, useState} from "react"

import {useMounted} from "./mounted"

const getMatches = (query: string, mounted: boolean): boolean => {
  if (mounted) {
    return window.matchMedia(query).matches
  }
  return false
}

function useMediaQuery(query: string): boolean {
  const mounted = useMounted()
  const [matches, setMatches] = useState(getMatches(query, mounted))

  useEffect(() => {
    const handleChange = () => {
      setMatches(getMatches(query, mounted))
    }
    const match = window.matchMedia(query)

    handleChange()
    match.addEventListener("change", handleChange)

    return () => {
      match.removeEventListener("change", handleChange)
    }
  }, [mounted, query])
  return matches
}

export {useMediaQuery}
