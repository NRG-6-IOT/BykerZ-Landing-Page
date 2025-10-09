(function() {
  const translations = {
    en: {
      'nav-features': 'Features',
      'nav-about': 'About Us',
      'nav-project': 'Our Project',
      'nav-team': 'Team',
      'hero-title': 'Your Motorcycle, <span class="text-primary">Smarter</span>.',
      'hero-subtitle': 'Connect your bike to the digital world for enhanced safety, performance, and peace of mind.',
      'btn-start': 'Start',
      'btn-explore': 'Explore <span class="material-icons ml-2">arrow_downward</span>',
      'features-title': 'Features',
      'features-desc': 'Everything you need to stay connected and safe on the road.',
      'feature1-title': 'Real-Time Monitoring',
      'feature1-desc': 'Track fuel, engine temp, tire pressure, and more, all from your phone.',
      'feature2-title': 'Preventive Alerts',
      'feature2-desc': 'Get notified before a small issue becomes a big problem for you and your mechanic.',
      'feature3-title': 'Service History',
      'feature3-desc': 'Keep a digital log of all repairs, services, and expenses in one place.',
      'feature4-title': 'Mechanic Connection',
      'feature4-desc': 'Share live data with your trusted mechanic for faster, more accurate diagnostics.',
      'feature5-title': 'Health Reports',
      'feature5-desc': 'Automatically generate vehicle health reports to track performance over time.',
      'feature6-title': 'Enhanced Security',
      'feature6-desc': 'Anticipate failures and ride with confidence knowing your bike is being watched.',
      'about-title': 'Our Mission and Vision',
      'mission-title': 'Mission',
      'mission-text': 'Transform motorcycle management by combining IoT technology and data analytics to deliver safety, efficiency, and confidence to owners and mechanics.',
      'vision-title': 'Vision',
      'vision-text': 'To be the leading smart mobility platform that revolutionizes preventive maintenance and connectivity in the two-wheel ecosystem.',
      'project-title': 'Our Project',
      'team-title': 'Meet the Team',
      'cta-title': 'Upgrade your bike to the next level.',
      'cta-text': 'Join the BykerZ community and experience the future of motorcycling.',
      'btn-get-started': '<span class="material-icons ml-2">two_wheeler</span>\n                            Get Started',
      'btn-contact-sales': '<span class="material-icons ml-2">contact_support</span>\n                            Contact Sales',
      'footer-features': 'Features',
      'footer-about': 'About Us',
      'footer-team': 'Team',
      'footer-terms': 'Terms of Service'
    },
    es: {
      'nav-features': 'Características',
      'nav-about': 'Sobre Nosotros',
      'nav-project': 'Nuestro Proyecto',
      'nav-team': 'Equipo',
      'hero-title': 'Tu motocicleta, <span class="text-primary">más inteligente</span>.',
      'hero-subtitle': 'Conecta tu moto al mundo digital para mayor seguridad, rendimiento y tranquilidad.',
      'btn-start': 'Comenzar',
      'btn-explore': 'Explorar <span class="material-icons ml-2">arrow_downward</span>',
      'features-title': 'Características',
      'features-desc': 'Todo lo que necesitas para mantenerte conectado y seguro en la carretera.',
      'feature1-title': 'Monitoreo en tiempo real',
      'feature1-desc': 'Controla combustible, temperatura del motor, presión de llantas y más, todo desde tu teléfono.',
      'feature2-title': 'Alertas preventivas',
      'feature2-desc': 'Recibe notificaciones antes de que un pequeño problema se convierta en uno mayor para ti y tu mecánico.',
      'feature3-title': 'Historial de servicios',
      'feature3-desc': 'Lleva un registro digital de reparaciones, servicios y gastos en un solo lugar.',
      'feature4-title': 'Conexión con el mecánico',
      'feature4-desc': 'Comparte datos en vivo con tu mecánico de confianza para diagnósticos más rápidos y precisos.',
      'feature5-title': 'Reportes de salud',
      'feature5-desc': 'Genera automáticamente reportes de salud del vehículo para seguir el rendimiento en el tiempo.',
      'feature6-title': 'Seguridad mejorada',
      'feature6-desc': 'Anticipa fallas y conduce con confianza sabiendo que tu moto está siendo monitoreada.',
      'about-title': 'Nuestra Misión y Visión',
      'mission-title': 'Misión',
      'mission-text': 'Transformar la gestión de motocicletas combinando tecnología IoT y análisis de datos para ofrecer seguridad, eficiencia y confianza a propietarios y mecánicos.',
      'vision-title': 'Visión',
      'vision-text': 'Ser la plataforma líder en movilidad inteligente que revolucione el mantenimiento preventivo y la conexión en el ecosistema de vehículos de dos ruedas.',
      'project-title': 'Nuestro Proyecto',
      'team-title': 'Conoce al Equipo',
      'cta-title': 'Lleva tu moto al siguiente nivel.',
      'cta-text': 'Únete a la comunidad BykerZ y experimenta el futuro del motociclismo.',
      'btn-get-started': '<span class="material-icons ml-2">two_wheeler</span>\n                            Comenzar',
      'btn-contact-sales': '<span class="material-icons ml-2">contact_support</span>\n                            Contactar Ventas',
      'footer-features': 'Características',
      'footer-about': 'Sobre Nosotros',
      'footer-team': 'Equipo',
      'footer-terms': 'Términos del Servicio'
    }
  };

  const htmlKeys = new Set(['hero-title','btn-explore','btn-get-started','btn-contact-sales']);

  function setLanguage(lang) {
    const dict = translations[lang] || translations.en;
    Object.keys(dict).forEach(function(id){
      const el = document.getElementById(id);
      if (!el) return;
      if (htmlKeys.has(id)) {
        el.innerHTML = dict[id];
      } else {
        el.textContent = dict[id];
      }
    });
    document.documentElement.setAttribute('lang', lang);
    const select = document.getElementById('language-select');
    if (select) select.value = lang;
    try { localStorage.setItem('lang', lang); } catch(e) {}
  }

  function detectLang() {
    try {
      const saved = localStorage.getItem('lang');
      if (saved) return saved;
    } catch(e) {}
    const nav = (navigator.language || '').toLowerCase();
    return nav.startsWith('es') ? 'es' : 'en';
  }

  document.addEventListener('DOMContentLoaded', function(){
    const lang = detectLang();
    setLanguage(lang);
    const select = document.getElementById('language-select');
    if (select) {
      select.addEventListener('change', function(e){ setLanguage(e.target.value); });
    }
  });
})();

