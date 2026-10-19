// Faith Automation - Minimal JavaScript

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initClientsMarquee();
  initServices();
  initProjects();
  initContactForm();
});

// Navigation
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }
  
  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinksList = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinksList.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Clients Marquee
function initClientsMarquee() {
  const track = document.getElementById('clientsMarquee');
  if (!track) return;
  
  const clients = [
    'Hero Motors', 'Hanon Systems', 'Lumax', 'BorgWarner',
    'JRG Automotive', 'Munjal Showa', 'PPAP Automotive', 'NTN NEI',
    'Reckitt Benckiser', 'Sogefi', 'Takahata Precision', 'Kumi Supreme'
  ];
  
  const items = [...clients, ...clients].map(client => `
    <div class="client-badge">
      <span class="client-badge-dot"></span>
      <span>${client}</span>
    </div>
  `).join('');
  
  track.innerHTML = items;
}

// Services Data
const servicesData = [
  {
    icon: '⚙️',
    title: 'Turnkey Assembly Lines',
    description: 'Custom multi-station assembly lines with automated feeding and poka-yoke systems.',
    features: ['Multi-station setup', 'Auto-feeding', 'Poka-yoke', 'High throughput']
  },
  {
    icon: '🤖',
    title: 'Robotic Welding Cells',
    description: '6-axis robotic cells with precision welding fixtures and safety systems.',
    features: ['6-axis robots', 'MIG/Spot welding', 'Safety barriers', 'Auto clamping']
  },
  {
    icon: '🔬',
    title: 'Vision Inspection',
    description: 'AI-powered vision systems for defect detection and quality assurance.',
    features: ['Color detection', 'Surface defects', 'Part presence', 'Auto reject']
  },
  {
    icon: '💨',
    title: 'Leak Testing Rigs',
    description: 'Differential pressure testing for air, water, and hydrostatic leak detection.',
    features: ['ALT/WLT/HLT', 'Micron sensitivity', 'Data logging', 'Pass/fail sorting']
  },
  {
    icon: '🎯',
    title: 'Checking Fixtures',
    description: 'Precision fixtures and gauges for dimensional verification.',
    features: ['CMM verified', '±0.015mm tolerance', 'GR&R tested', 'Calibration cert']
  },
  {
    icon: '🏷️',
    title: 'Marking Systems',
    description: 'Laser and dot-peen marking for traceability and serialization.',
    features: ['2D DataMatrix', 'Laser engraving', 'QR codes', 'MES integration']
  }
];

function initServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  
  grid.innerHTML = servicesData.map(service => `
    <div class="service-card">
      <div class="service-icon">${service.icon}</div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-description">${service.description}</p>
      <ul class="service-features">
        ${service.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// Projects Data
const projectsData = [
  { id: 1, title: 'Robotic Welding Cell', category: 'robotic', client: 'JRG Automotive', image: 'assets/images/robotic-cell-yhb.jpg' },
  { id: 2, title: 'Assembly Line', category: 'assembly', client: 'Hanon Systems', image: 'assets/images/yfg-assembly-line.jpg' },
  { id: 3, title: 'Vision Inspection', category: 'testing', client: 'Lumax', image: 'assets/images/vision-inspection-garnish.jpg' },
  { id: 4, title: 'Checking Fixture', category: 'fixtures', client: 'Hero Motors', image: 'assets/images/mahindra-w501-checking-fixture.jpg' },
  { id: 5, title: 'Leak Test Machine', category: 'testing', client: 'BorgWarner', image: 'assets/images/t6-pipe-alt-leak-machine.jpg' },
  { id: 6, title: 'Shark Fin Assembly', category: 'assembly', client: 'Munjal Showa', image: 'assets/images/shark-fin-assembly-line.jpg' }
];

function initProjects() {
  const grid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  if (!grid) return;
  
  function renderProjects(filter = 'all') {
    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);
    
    grid.innerHTML = filtered.map(project => `
      <div class="project-card">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
        </div>
        <div class="project-content">
          <span class="project-category">${project.category}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-client">${project.client}</p>
        </div>
      </div>
    `).join('');
  }
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
  
  renderProjects();
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show success message
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.disabled = true;
    
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
