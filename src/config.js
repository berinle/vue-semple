const isDevelopment = import.meta.env.MODE === 'development';

// Helper function to get backend URL in production
function getProductionBackendUrl() {
  const currentUrl = window.location.href;
  // Extract the CF domain (everything after the first dot)
  const cfDomain = currentUrl.split('.').slice(1).join('.');
  // Construct backend URL by replacing frontend with backend in the subdomain
  return currentUrl.replace('vue-sample-frontend', 'vue-sample-backend');
}

export const config = {
  apiBaseUrl: isDevelopment 
    ? 'http://localhost:3001'
    : getProductionBackendUrl().replace(/\/$/, '') // Remove trailing slash if present
}; 