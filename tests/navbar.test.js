// navbar.test.js
import { describe, it, expect, vi } from 'vitest';

// Mock function to simulate scroll event on the navbar
function handleNavbarScroll() {
  const navElement = document.querySelector('nav');
  if (window.scrollY > 0) {
    navElement.classList.add('navbar-scrolled');
  } else {
    navElement.classList.remove('navbar-scrolled');
  }
}

describe('Navbar Scroll Tests', () => {
  it('should add navbar-scrolled class when window is scrolled', () => {
    // Simulate scroll position
    global.window.scrollY = 100;  // Scrolling down
    document.body.innerHTML = '<nav></nav>'; // Mock HTML
    const navElement = document.querySelector('nav');
    
    handleNavbarScroll();
    
    expect(navElement.classList.contains('navbar-scrolled')).toBe(true);
  });

  it('should remove navbar-scrolled class when window is at the top', () => {
    // Simulate scroll position at the top
    global.window.scrollY = 0;
    document.body.innerHTML = '<nav></nav>'; // Mock HTML
    const navElement = document.querySelector('nav');
    
    handleNavbarScroll();
    
    expect(navElement.classList.contains('navbar-scrolled')).toBe(false);
  });
});
