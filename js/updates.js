document.addEventListener('DOMContentLoaded', function() {
  // Get updates container
  const updatesContainer = document.getElementById('updates-container');
  
  if (!updatesContainer) return;
  
  // Filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  let currentFilter = 'all';
  
  // Display updates with filter
  function displayUpdates(filter = 'all') {
    const filteredUpdates = filter === 'all' 
      ? updates 
      : updates.filter(update => update.type === filter);
    
    if (filteredUpdates.length === 0) {
      updatesContainer.innerHTML = `
        <div class="no-updates">
          <p>No updates found for this filter.</p>
        </div>
      `;
    } else {
      updatesContainer.innerHTML = filteredUpdates.map((update, index) => `
        <div class="update-item">
          <div class="update-dot" style="background-color: ${getTypeColor(update.type)};"></div>
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
  }
  
  // Initial display
  displayUpdates();
  
  // Filter functionality
  if (filterButtons) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Update filter and display
        currentFilter = filter;
        displayUpdates(filter);
      });
    });
  }
});