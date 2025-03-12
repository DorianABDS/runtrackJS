function createVerticalGradient() {
    const body = document.body;
    
    const topColor = '#3498db';
    const bottomColor = '#2c3e50';
    
    body.style.background = `linear-gradient(to bottom, ${topColor}, ${bottomColor})`;
  }
  
  document.addEventListener('DOMContentLoaded', createVerticalGradient);