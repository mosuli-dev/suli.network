let draggable = document.getElementsByClassName("window");

let initalX = 0, initalY = 0;
let offsetX = 0, offsetY = 0;
let topZIndex = 1;
let activeDrag = null;

// Resize tracking
let activeResize = null;
let initialWidth = 0, initialHeight = 0;

// Initialize dragging for each window
for (let item of draggable) {
  // Get the header element (first child) for drag handle
  const header = item.querySelector('div');
  if (header) {
    
    // Mouse down - start dragging
    header.addEventListener('mousedown', (e) => {
      activeDrag = item;
      
      // Get current position
      const rect = item.getBoundingClientRect();
      initalX = e.clientX;
      initalY = e.clientY;
      
      // Calculate offset between mouse and element
      offsetX = initalX - rect.left;
      offsetY = initalY - rect.top;
      
      // Fix all windows to their current position when drag starts
      for (let window of draggable) {
        const windowRect = window.getBoundingClientRect();
        window.style.position = 'fixed';
        window.style.left = windowRect.left + 'px';
        window.style.top = windowRect.top + 'px';
      }
      
      // Bring window to front
      topZIndex++;
      item.style.zIndex = topZIndex;
    });
  }
}

// Initialize resizing for each window
for (let item of draggable) {
  const resizeHandle = item.querySelector('.resize-handle');
  if (resizeHandle) {
    resizeHandle.addEventListener('mousedown', (e) => {
      e.preventDefault();
      activeResize = item;
      initalX = e.clientX;
      initalY = e.clientY;
      initialWidth = item.offsetWidth;
      initialHeight = item.offsetHeight;
      
      // Bring window to front
      topZIndex++;
      item.style.zIndex = topZIndex;
    });
  }
}

// Mouse move - drag the element
document.addEventListener('mousemove', (e) => {
  if (activeDrag) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    
    activeDrag.style.left = x + 'px';
    activeDrag.style.top = y + 'px';
  }
  
  // Handle resizing
  if (activeResize) {
    const deltaX = e.clientX - initalX;
    const deltaY = e.clientY - initalY;
    
    const minWidth = 150;
    const minHeight = 100;
    
    const newWidth = Math.max(minWidth, initialWidth + deltaX);
    const newHeight = Math.max(minHeight, initialHeight + deltaY);
    
    activeResize.style.width = newWidth + 'px';
    activeResize.style.height = newHeight + 'px';
  }
});

// Mouse up - stop dragging
document.addEventListener('mouseup', () => {
  if (activeDrag) {
    activeDrag = null;
  }
  if (activeResize) {
    activeResize = null;
  }
});


// Window Resizing Functionality
let resizable = document.getElementsByClassName("resize-handle");