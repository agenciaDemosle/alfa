declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>
  }
}

export const trackEvent = (event: string, data?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data,
    })
  }
}

export const trackNavClick = (navItem: string, location: string) => {
  trackEvent('nav_click', {
    nav_item: navItem,
    location,
  })
}

export const trackContactSubmit = () => {
  trackEvent('contact_submit')
}
