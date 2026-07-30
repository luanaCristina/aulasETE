/**
 * ETE Pernambuco — Motor de Slides Interativo
 * slides.js — Navegação, teclado, fullscreen, sidebar
 * Profª Luana Cristina | 2026.2
 * 
 * Zero dependências. Funciona com file:// protocol.
 */

(function () {
  'use strict';

  let currentSlide = 0;
  let slides = [];
  let sidebar = null;
  let progressBar = null;
  let progressText = null;

  // ===== INICIALIZAÇÃO =====
  function init() {
    slides = Array.from(document.querySelectorAll('.slide'));
    sidebar = document.querySelector('.sidebar');
    progressBar = document.querySelector('.progress-bar');
    progressText = document.querySelector('.progress-text');

    if (slides.length === 0) return;

    // Verificar hash na URL para slide inicial
    const hash = window.location.hash.replace('#', '');
    if (hash && !isNaN(hash)) {
      currentSlide = Math.min(parseInt(hash) - 1, slides.length - 1);
    }

    buildSidebar();
    showSlide(currentSlide);
    bindEvents();
  }

  // ===== NAVEGAÇÃO =====
  function showSlide(index) {
    if (index < 0 || index >= slides.length) return;

    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev');
      if (i < index) slide.classList.add('prev');
    });

    slides[index].classList.add('active');
    currentSlide = index;

    updateProgress();
    updateSidebar();
    window.location.hash = index + 1;
  }

  function nextSlide() {
    if (currentSlide < slides.length - 1) showSlide(currentSlide + 1);
  }

  function prevSlide() {
    if (currentSlide > 0) showSlide(currentSlide - 1);
  }

  function goToSlide(index) {
    showSlide(index);
    closeSidebar();
  }

  // ===== PROGRESS =====
  function updateProgress() {
    const percent = ((currentSlide + 1) / slides.length) * 100;
    if (progressBar) progressBar.style.width = percent + '%';
    if (progressText) progressText.textContent = (currentSlide + 1) + ' / ' + slides.length;
  }

  // ===== SIDEBAR =====
  function buildSidebar() {
    if (!sidebar) return;
    const nav = sidebar.querySelector('.sidebar-nav');
    if (!nav) return;

    nav.innerHTML = '';
    slides.forEach((slide, i) => {
      const title = slide.dataset.title || 'Slide ' + (i + 1);
      const btn = document.createElement('button');
      btn.className = 'sidebar-item';
      btn.textContent = (i + 1) + '. ' + title;
      btn.addEventListener('click', () => goToSlide(i));
      nav.appendChild(btn);
    });
  }

  function updateSidebar() {
    if (!sidebar) return;
    const items = sidebar.querySelectorAll('.sidebar-item');
    items.forEach((item, i) => {
      item.classList.toggle('active', i === currentSlide);
    });
  }

  function toggleSidebar() {
    if (sidebar) sidebar.classList.toggle('open');
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
  }

  // ===== FULLSCREEN =====
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Fullscreen não disponível:', err);
      });
    } else {
      document.exitFullscreen();
    }
  }

  // ===== EVENTOS DE TECLADO =====
  function bindEvents() {
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          showSlide(0);
          break;
        case 'End':
          e.preventDefault();
          showSlide(slides.length - 1);
          break;
        case 'Escape':
          if (sidebar && sidebar.classList.contains('open')) {
            closeSidebar();
          }
          break;
        case 'f':
        case 'F':
          if (!e.ctrlKey && !e.metaKey) toggleFullscreen();
          break;
        case 'm':
        case 'M':
          if (!e.ctrlKey && !e.metaKey) toggleSidebar();
          break;
      }
    });

    // Click fora do sidebar fecha
    document.addEventListener('click', (e) => {
      if (sidebar && sidebar.classList.contains('open') && !sidebar.contains(e.target)) {
        const menuBtn = document.querySelector('.btn-menu');
        if (!menuBtn || !menuBtn.contains(e.target)) {
          closeSidebar();
        }
      }
    });

    // Touch/swipe para mobile
    let touchStartX = 0;
    document.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 60) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
    }, { passive: true });
  }

  // ===== CODE TABS =====
  function initCodeTabs() {
    document.querySelectorAll('.code-tabs').forEach(tabGroup => {
      const tabs = tabGroup.querySelectorAll('.code-tab');
      const panels = tabGroup.parentElement.querySelectorAll('.code-panel');

      tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          panels.forEach(p => p.classList.remove('active'));
          tab.classList.add('active');
          if (panels[i]) panels[i].classList.add('active');
        });
      });
    });
  }

  // ===== EXPOSIÇÃO GLOBAL (para botões no HTML) =====
  window.Slides = {
    next: nextSlide,
    prev: prevSlide,
    goTo: goToSlide,
    toggleFullscreen: toggleFullscreen,
    toggleSidebar: toggleSidebar,
    goHome: function() {
      // Navigate to the portal index (2 levels up from disciplinas/)
      const currentPath = window.location.pathname;
      if (currentPath.includes('/disciplinas/')) {
        window.location.href = '../../../index.html';
      } else if (currentPath.includes('/portal/')) {
        window.location.href = '../../index.html';
      } else {
        window.location.href = './index.html';
      }
    }
  };

  // ===== AUTO-INIT =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { init(); initCodeTabs(); });
  } else {
    init();
    initCodeTabs();
  }
})();
