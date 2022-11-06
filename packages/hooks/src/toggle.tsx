import {useMemo, useState} from "react"

type Toggle = [
  boolean,
  {
    toggle: () => void
    toTrue: () => void
    toFalse: () => void
    reset: () => void
  }
]
const useToggle = (initialState: boolean = false): Toggle => {
  const [state, setState] = useState(initialState)
  const handlers = useMemo(() => {
    return {
      toggle: () => {
        setState((prev) => !prev)
      },
      toTrue: () => {
        setState(true)
      },
      toFalse: () => {
        setState(false)
      },
      reset: () => {
        setState(initialState)
      },
    }
  }, [initialState])

  return [state, handlers]
}

export {useToggle}
