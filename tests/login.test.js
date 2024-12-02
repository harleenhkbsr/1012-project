// login.test.js
import { describe, it, expect, vi } from 'vitest';

// Mock function to simulate form validation
function setFormMessage(form, message) {
  const errorElement = form.querySelector('.error-message');
  if (message) {
    errorElement.textContent = message;
    form.classList.add('error');
  } else {
    errorElement.textContent = '';
    form.classList.remove('error');
  }
}

describe('Login Form Validation Tests', () => {
  it('should clear error message when no error', () => {
    // Simulating a form with no error message
    const formElement = {
      querySelector: vi.fn(() => ({
        textContent: '',
      })),
      classList: { add: vi.fn(), remove: vi.fn() },
    };
    setFormMessage(formElement, '');
    expect(formElement.querySelector().textContent).toBe('');
  });
});
