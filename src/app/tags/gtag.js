// lib/gtag.js
export const GA_MEASUREMENT_ID = "G-2MB3E5Q5K8";

// Standard pageview tracking
export const pageview = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
