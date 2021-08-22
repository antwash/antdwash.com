import { createUseStyles } from "react-jss"

const delay = 200
const longDelay = 400
const useTransitionStyles = createUseStyles(() => ({
  fadeAppear: {
    opacity: 0,
  },
  fadeAppearActive: {
    opacity: 1,
    transition: "opacity 0.6s cubic-bezier(0.7, 0, 0.84, 0)",
  },
  fadeDownAppear: {
    opacity: 0,
    transform: "translateY(-20px)",
    transition:
      "opacity 0.6s cubic-bezier(0.7, 0, 0.84, 0), transform 0.2s cubic-bezier(0.7, 0, 0.84, 0)",
  },
  fadeDownAppearActive: {
    opacity: 1,
    transform: "translateY(0)",
    transition:
      "opacity 0.6s cubic-bezier(0.7, 0, 0.84, 0), transform 0.2s cubic-bezier(0.7, 0, 0.84, 0)",
  },
}))

export { useTransitionStyles, delay, longDelay }
