/**
 * PRASANTH BABU - NFC Digital Business Card
 * Interactive Handlers: Copy to clipboard, Toast alerts, Card clicks, VCF contacts
 */

function handleCardClick(url) {
  triggerHaptic();
  window.location.href = url;
}

function copyText(event, text, successMsg) {
  if (event) {
    event.stopPropagation();
  }

  // Modern Clipboard API with fallback
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
      triggerHaptic();
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(successMsg);
    triggerHaptic();
  } catch (err) {
    showToast('Failed to copy');
  }
  document.body.removeChild(textarea);
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  if (toastTimer) {
    clearTimeout(toastTimer);
  }

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

function triggerHaptic() {
  if ('vibrate' in navigator) {
    try {
      navigator.vibrate(20);
    } catch (e) {
      // Ignore vibration errors if unsupported
    }
  }
}

// Enable keyboard accessibility on role="button" elements
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.contact-card[role="button"]');
  cards.forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
});
