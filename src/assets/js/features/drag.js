let draggable = document.getElementsByClassName("window");

let initalX = 0, initalY = 0;
let offsetX = 0, offsetY = 0;
let activeDrag = null;

// Initialize dragging for each window
for (let item of draggable) {
  // Set position to absolute to allow repositioning
  if (item.style.position !== 'absolute' && item.style.position !== 'fixed') {
    item.style.position = 'relative';
  }

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
      
      // Bring window to front
      item.style.zIndex = 10000;
    });
  }
}

// Mouse move - drag the element
document.addEventListener('mousemove', (e) => {
  if (activeDrag) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    
    activeDrag.style.position = 'fixed';
    activeDrag.style.left = x + 'px';
    activeDrag.style.top = y + 'px';
  }
});

// Mouse up - stop dragging
document.addEventListener('mouseup', () => {
  if (activeDrag) {
    activeDrag.style.zIndex = 'auto';
    activeDrag = null;
  }
});