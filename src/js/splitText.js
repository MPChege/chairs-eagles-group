// Simple SplitType implementation
export class SplitType {
  constructor(element, options = {}) {
    this.element = typeof element === 'string' ? document.querySelector(element) : element;
    this.options = {
      types: 'words',
      tagName: 'span',
      ...options
    };
    
    if (this.element) {
      this.split();
    }
  }

  split() {
    const text = this.element.textContent;
    this.element.innerHTML = '';

    if (this.options.types.includes('lines')) {
      this.lines = this.splitIntoLines(text);
    }
    
    if (this.options.types.includes('words')) {
      this.words = this.splitIntoWords(text);
    }
    
    if (this.options.types.includes('chars')) {
      this.chars = this.splitIntoChars(text);
    }
  }

  splitIntoLines(text) {
    const lines = [];
    const lineElements = this.element.querySelectorAll('br') || [];
    
    if (lineElements.length === 0) {
      // Split by line breaks in text or create single line
      const textLines = text.split('\n').filter(line => line.trim());
      textLines.forEach((lineText, index) => {
        const lineDiv = document.createElement('div');
        lineDiv.style.display = 'block';
        lineDiv.style.overflow = 'hidden';
        
        const words = lineText.trim().split(/\s+/);
        words.forEach((word, wordIndex) => {
          const span = document.createElement(this.options.tagName);
          span.textContent = word;
          span.style.display = 'inline-block';
          lineDiv.appendChild(span);
          if (wordIndex < words.length - 1) {
            lineDiv.appendChild(document.createTextNode(' '));
          }
        });
        
        this.element.appendChild(lineDiv);
        lines.push(Array.from(lineDiv.querySelectorAll(this.options.tagName)));
      });
    }
    
    return lines.flat();
  }

  splitIntoWords(text) {
    const words = text.trim().split(/\s+/);
    const wordElements = [];
    
    words.forEach((word, index) => {
      const span = document.createElement(this.options.tagName);
      span.textContent = word;
      span.style.display = 'inline-block';
      span.style.overflow = 'hidden';
      this.element.appendChild(span);
      if (index < words.length - 1) {
        this.element.appendChild(document.createTextNode(' '));
      }
      wordElements.push(span);
    });
    
    return wordElements;
  }

  splitIntoChars(text) {
    const chars = text.split('');
    const charElements = [];
    
    chars.forEach(char => {
      const span = document.createElement(this.options.tagName);
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      this.element.appendChild(span);
      charElements.push(span);
    });
    
    return charElements;
  }
}

