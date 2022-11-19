import {useMemo, useState} from "react"

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState)
  const handlers = useMemo(
    () => ({
      toggle: () => {
        setState((p) => !p)
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
    }),
    [initialState]
  )

  return [state, handlers]
}

export {useToggle}
