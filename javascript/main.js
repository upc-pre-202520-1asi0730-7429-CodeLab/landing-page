/**
 * Hostel Manager JavaScript
 * 
 * Este archivo contiene las funcionalidades interactivas de la aplicación Hostel Manager.
 * Incluye manejadores de eventos, animaciones y utilidades para la interacción del usuario.
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Referencias a elementos del DOM
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');
  const ctaRegisterBtn = document.getElementById('cta-register-btn');
  
  // Configuración de animaciones al hacer scroll
  setupScrollAnimations();
  
  // Inicializar eventos de búsqueda
  initializeSearch();
  
  // Inicializar eventos de autenticación
  initializeAuthEvents();
  
  // Hacer responsive el menú en dispositivos móviles
  setupMobileMenu();
});

/**
 * Configura las animaciones basadas en scroll para elementos que
 * deberían animarse cuando entran en el viewport
 */
function setupScrollAnimations() {
  // Seleccionar todos los elementos que deberían animarse
  const animatedElements = document.querySelectorAll('.option-card, .benefit-card');
  
  // Agregar la clase para la animación inicial
  animatedElements.forEach(element => {
    element.classList.add('scroll-animation');
  });
  
  // Función para verificar si un elemento está en el viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  // Función para verificar y animar elementos visibles
  function checkVisibility() {
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }
  
  // Verificar visibilidad inicial
  checkVisibility();
  
  // Escuchar eventos de scroll para animar elementos cuando sean visibles
  window.addEventListener('scroll', checkVisibility);
}

/**
 * Inicializa la funcionalidad de búsqueda
 */
function initializeSearch() {
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', function() {
      performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch(searchInput.value);
      }
    });
  }
}

/**
 * Realiza una búsqueda con el término proporcionado
 * @param {string} searchTerm - El término de búsqueda
 */
function performSearch(searchTerm) {
  if (!searchTerm.trim()) {
    showNotification('Por favor, introduce un término de búsqueda');
    return;
  }
  
  // Aquí normalmente se haría una petición a un backend
  // Por ahora, simplemente mostraremos una notificación
  showNotification(`Buscando: ${searchTerm}`);
  
  // Simulación de búsqueda (para demo)
  console.log(`Búsqueda realizada: ${searchTerm}`);
}

/**
 * Inicializa los eventos de autenticación (login/registro)
 */
function initializeAuthEvents() {
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');
  const ctaRegisterBtn = document.getElementById('cta-register-btn');
  
  if (loginBtn) {
    loginBtn.addEventListener('click', function() {
      // Aquí se abriría un modal de login o se redigiría a una página
      showNotification('Función de inicio de sesión');
    });
  }
  
  if (registerBtn) {
    registerBtn.addEventListener('click', function() {
      // Aquí se abriría un modal de registro o se redigiría a una página
      showNotification('Función de registro');
    });
  }
  
  if (ctaRegisterBtn) {
    ctaRegisterBtn.addEventListener('click', function() {
      // Similar a registerBtn pero desde el CTA principal
      showNotification('Función de registro desde CTA');
    });
  }
}

/**
 * Configura el menú móvil para dispositivos con pantallas pequeñas
 */
function setupMobileMenu() {
  // Crear botón de menú móvil si no existe
  const header = document.querySelector('header');
  const navLinks = document.querySelector('.flex.items-center.gap-9');
  
  if (header && navLinks && window.innerWidth <= 768) {
    // Crear el botón de menú hamburguesa si no existe
    if (!document.querySelector('.mobile-menu-btn')) {
      const menuBtn = document.createElement('button');
      menuBtn.className = 'mobile-menu-btn';
      menuBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
      
      // Convertir los enlaces de navegación en un menú móvil
      const mobileMenu = document.createElement('div');
      mobileMenu.className = 'mobile-menu';
      mobileMenu.innerHTML = navLinks.innerHTML;
      
      // Agregar elementos al DOM
      header.appendChild(menuBtn);
      header.appendChild(mobileMenu);
      
      // Manejar la apertura/cierre del menú
      menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
      });
    }
  }
}

/**
 * Muestra una notificación temporal al usuario
 * @param {string} message - El mensaje a mostrar
 * @param {number} duration - Duración en milisegundos (predeterminado: 3000ms)
 */
function showNotification(message, duration = 3000) {
  // Verificar si ya existe una notificación y eliminarla
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Crear elemento de notificación
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  
  // Agregar al DOM
  document.body.appendChild(notification);
  
  // Mostrar con animación
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Ocultar después del tiempo especificado
  setTimeout(() => {
    notification.classList.remove('show');
    
    // Eliminar del DOM después de la animación
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, duration);
}

/**
 * Desplazamiento suave al hacer clic en enlaces de navegación
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Ajuste para el header
        behavior: 'smooth'
      });
    }
  });
});