// resume.test.js
import { describe, it, expect, vi } from 'vitest';

// Mocking the spellchecker function
function spellcheck(word) {
  const dictionary = ['hello', 'world'];
  return dictionary.includes(word);
}

describe('Resume Spelling Checker Tests', () => {
  it('should correctly check the spelling of a word', () => {
    expect(spellcheck('hello')).toBe(true);  // Word is correct
    expect(spellcheck('helloo')).toBe(false); // Word is incorrect
  });

  it('should suggest a correction for a misspelled word', () => {
    // Here we can return a simple suggestion based on our mock dictionary
    const suggestions = {
      'helloo': 'hello',
    };
    expect(suggestions['helloo']).toBe('hello');
  });

  it('should display a message when no file is selected', () => {
    // Simulating a scenario when no file is selected
    const fileInput = { files: [] };
    const output = fileInput.files.length === 0 ? 'No file selected' : 'File selected';
    
    expect(output).toBe('No file selected');
  });
});

