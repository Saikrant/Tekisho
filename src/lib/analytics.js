/**
 * Track a CTA conversion event in Google Analytics 4.
 * Uses typeof guard instead of optional chaining for react-snap/Puppeteer compatibility.
 */
export function trackCTA(label) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      event_category: 'CTA',
      event_label: label || 'Book a Strategy Call',
      value: 1,
    })
  }
}
