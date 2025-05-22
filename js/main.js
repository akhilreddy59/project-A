document.addEventListener('DOMContentLoaded', function() {
  // Set copyright year
  document.getElementById('copyright-year').textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  
  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', function() {
      navMobile.classList.toggle('open');
      
      // Animate menu icon
      const menuBars = menuToggle.querySelectorAll('.menu-bar');
      if (navMobile.classList.contains('open')) {
        menuBars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        menuBars[1].style.opacity = '0';
        menuBars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        menuBars[0].style.transform = 'none';
        menuBars[1].style.opacity = '1';
        menuBars[2].style.transform = 'none';
      }
    });
  }
  
  // Search functionality
  const searchToggle = document.querySelector('.search-toggle');
  const searchOverlay = document.querySelector('.search-overlay');
  const searchClose = document.querySelector('.search-close');
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');
  
  if (searchToggle && searchOverlay && searchClose) {
    searchToggle.addEventListener('click', function() {
      searchOverlay.classList.add('open');
      setTimeout(() => {
        searchInput.focus();
      }, 100);
    });
    
    searchClose.addEventListener('click', function() {
      searchOverlay.classList.remove('open');
    });
    
    // Close search on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && searchOverlay.classList.contains('open')) {
        searchOverlay.classList.remove('open');
      }
    });
    
    // Close search when clicking outside
    searchOverlay.addEventListener('click', function(e) {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('open');
      }
    });
  }
  
  // Search functionality
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }
      
      // Create a flat array of all resources
      let allResourcesFlat = [];
      for (const categoryId in allResources) {
        allResourcesFlat = allResourcesFlat.concat(
          allResources[categoryId].map(resource => ({
            ...resource,
            categoryId
          }))
        );
      }
      
      // Search through resources
      const filteredResources = allResourcesFlat.filter(resource => 
        resource.title.toLowerCase().includes(query) || 
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query))
      );
      
      // Display results
      if (filteredResources.length === 0) {
        searchResults.innerHTML = '<p class="no-results">No resources found. Try a different search term.</p>';
      } else {
        searchResults.innerHTML = filteredResources.map(resource => `
          <div class="search-result-item">
            <div class="search-result-icon">
              <i class="${resource.icon}"></i>
            </div>
            <div class="search-result-content">
              <h3>${resource.title}</h3>
              <p>${resource.description}</p>
              <div class="search-result-tags">
                ${resource.tags.map(tag => `<span class="resource-tag">${tag}</span>`).join('')}
              </div>
            </div>
            <a href="${resource.link}" target="_blank" class="search-result-link">
              <i class="fa-solid fa-external-link-alt"></i>
            </a>
          </div>
        `).join('');
      }
    });
  }
  
  // Load categories on home page
  const categoriesContainer = document.getElementById('categories-container');
  if (categoriesContainer) {
    categoriesContainer.innerHTML = categories.map(category => `
      <a href="category.html?id=${category.id}" class="category-card" style="background-color: ${category.color}20;">
        <div class="category-content">
          <h3 class="category-title">${category.title}</h3>
          <p class="category-description">${category.description}</p>
        </div>
        <div class="category-count">${category.count} resources</div>
        <i class="${category.icon} category-icon" style="color: ${category.color};"></i>
      </a>
    `).join('');
  }
  
  // Load featured resources on home page
  const featuredResourcesContainer = document.getElementById('featured-resources');
  if (featuredResourcesContainer) {
    featuredResourcesContainer.innerHTML = featuredResources.map(resource => `
      <div class="resource-card">
        <div class="resource-inner">
          <div class="resource-front" style="background-color: var(--card-bg);">
            <div>
              <i class="${resource.icon} resource-icon" style="color: var(--primary-500);"></i>
              <h3 class="resource-title">${resource.title}</h3>
              <p class="resource-description">${resource.description.substring(0, 100)}${resource.description.length > 100 ? '...' : ''}</p>
            </div>
            <div class="resource-tags">
              <span class="resource-tag">${resource.category}</span>
              ${resource.tags.slice(0, 2).map(tag => `<span class="resource-tag">${tag}</span>`).join('')}
            </div>
          </div>
          <div class="resource-back" style="background-color: var(--card-bg);">
            <div>
              <h3 class="resource-title">${resource.title}</h3>
              <p class="resource-description">${resource.description}</p>
            </div>
            <a href="${resource.link}" target="_blank" class="resource-link">
              Visit Resource <i class="fa-solid fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  // Load recent updates on home page
  const recentUpdatesContainer = document.getElementById('recent-updates');
  if (recentUpdatesContainer) {
    recentUpdatesContainer.innerHTML = updates.slice(0, 3).map((update, index) => `
      <div class="update-item">
        <div class="update-dot"></div>
        <div class="update-content-inner">
          <div class="update-date">${formatDate(update.date)}</div>
          <h3 class="update-title">${update.title}</h3>
          <div class="update-content">${update.content}</div>
          <div class="update-tags">
            <span class="update-tag" style="background-color: ${getTypeColor(update.type)}20; color: ${getTypeColor(update.type)};">
              ${update.type.charAt(0).toUpperCase() + update.type.slice(1)}
            </span>
            ${update.tags.map(tag => `<span class="update-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }
});

// Helper functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date);
}

function getTypeColor(type) {
  const colors = {
    announcement: '#3B82F6', // primary blue
    resource: '#8B5CF6',     // secondary purple
    event: '#EF4444',        // red
    tip: '#10B981'           // emerald
  };
  
  return colors[type] || '#6B7280'; // default: neutral-500
}