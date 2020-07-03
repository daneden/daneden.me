import ReactGA from "react-ga"

declare global {
  interface Window {
    GA_INITIALIZED: boolean
  }
}
export const initGA = (): void => {
  ReactGA.initialize("UA-122108242-1")
}
export const logPageView = (): void => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
export const logEvent = ({
  category,
  action,
  label,
  value,
  nonInteraction,
}: ReactGA.EventArgs): void => {
  if (category && action) {
    ReactGA.event({ category, action, label, value, nonInteraction })
  }
}
export const logException = (description = "", fatal = false): void => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
