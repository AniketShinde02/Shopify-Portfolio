/**
 * Component Loader - Loads header and footer components
 * Usage: Add data-component="header" or data-component="footer" to any element
 */

(function () {
    'use strict';

    // Component paths
    const COMPONENTS = {
        header: 'components/header.html',
        footer: 'components/footer.html'
    };

    /**
     * Load a component into an element
     */
    async function loadComponent(element, componentName) {
        try {
            const response = await fetch(COMPONENTS[componentName]);
            if (!response.ok) {
                throw new Error(`Failed to load ${componentName}: ${response.status}`);
            }
            const html = await response.text();
            element.innerHTML = html;

            // Execute any scripts in the loaded component
            const scripts = element.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                if (script.src) {
                    newScript.src = script.src;
                } else {
                    newScript.textContent = script.textContent;
                }
                document.body.appendChild(newScript);
                script.remove();
            });

            // Re-initialize Lucide icons after component load
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        } catch (error) {
            console.error(`Error loading component ${componentName}:`, error);
        }
    }

    /**
     * Initialize all components on page load
     */
    function initComponents() {
        const componentElements = document.querySelectorAll('[data-component]');
        componentElements.forEach(element => {
            const componentName = element.getAttribute('data-component');
            if (COMPONENTS[componentName]) {
                loadComponent(element, componentName);
            }
        });
    }

    // Load components when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initComponents);
    } else {
        initComponents();
    }
})();
