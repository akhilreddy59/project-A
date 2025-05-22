document.addEventListener('DOMContentLoaded', function() {
  // Get category ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('id');
  
  if (!categoryId) {
    window.location.href = 'index.html';
    return;
  }
  
  // Find category from data
  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) {
    window.location.href = 'index.html';
    return;
  }
  
  // Update page title and description
  document.title = `${category.title} | Resource Hub`;
  document.getElementById('category-title').textContent = category.title;
  document.getElementById('category-description').textContent = category.description;
  
  // Get resources for this category
  const resources = allResources[categoryId] || [];
  
  // Display resources
  const resourcesContainer = document.getElementById('resources-container');
  
  if (resources.length === 0) {
    resourcesContainer.innerHTML = `
      <div class="no-resources">
        <p>No resources found in this category yet.</p>
        <a href="index.html" class="view-all-btn">Back to Home</a>
      </div>
    `;
  } else {
    resourcesContainer.innerHTML = resources.map(resource => `
      <div class="resource-card">
        <div class="resource-inner">
          <div class="resource-front" style="background-color: var(--card-bg);">
            <div>
              <i class="${resource.icon} resource-icon" style="color: ${category.color};"></i>
              <h3 class="resource-title">${resource.title}</h3>
              <p class="resource-description">${resource.description.substring(0, 100)}${resource.description.length > 100 ? '...' : ''}</p>
            </div>
            <div class="resource-tags">
              ${resource.tags.map(tag => `<span class="resource-tag">${tag}</span>`).join('')}
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
});