const boardData = {
    "boardMembers": [
        {
            "id": 1,
            "name": "Michael Chen",
            "title": "Head of Psychology",
            "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            "socialMedia": {
                "linkedin": "https://linkedin.com/in/michaelchen",
                "twitter": "https://twitter.com/michaelchen",
                "instagram": "https://instagram.com/michaelchen"
            }
        },
        {
            "id": 2,
            "name": "David Thompson",
            "title": "Content Director",
            "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            "socialMedia": {
                "linkedin": "https://linkedin.com/in/davidthompson",
                "twitter": "https://twitter.com/davidthompson",
                "instagram": "https://instagram.com/davidthompson"
            }
        },
        {
            "id": 3,
            "name": "Michael Chen",
            "title": "Head of Psychology",
            "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            "socialMedia": {
                "linkedin": "https://linkedin.com/in/michaelchen",
                "twitter": "https://twitter.com/michaelchen",
                "instagram": "https://instagram.com/michaelchen"
            }
        },
        {
            "id": 4,
            "name": "David Thompson",
            "title": "Content Director",
            "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            "socialMedia": {
                "linkedin": "https://linkedin.com/in/davidthompson",
                "twitter": "https://twitter.com/davidthompson",
                "instagram": "https://instagram.com/davidthompson"
            }
        }
    ]
};

function getSocialIcon(platform) {
    const icons = {
        linkedin: 'fab fa-linkedin-in',
        twitter: 'fab fa-twitter',
        instagram: 'fab fa-instagram',
        facebook: 'fab fa-facebook-f',
        discord: 'fab fa-discord'
    };
    return icons[platform] || 'fas fa-link';
}

function createBoardMember(member) {
    const socialLinks = Object.entries(member.socialMedia)
        .map(([platform, url]) => `
      <a href="${url}" class="social-link" target="_blank" rel="noopener noreferrer">
        <i class="${getSocialIcon(platform)}"></i>
      </a>
    `).join('');

    return `
    <div class="board-member" data-member-id="${member.id}">
      <div class="member-circle">
        <img src="${member.image}" alt="${member.name}" class="member-image">
      </div>
      <div class="member-name">${member.name}</div>
      <div class="member-details">
        <h3>${member.name}</h3>
        <div class="member-title">${member.title}</div>
        <div class="social-links">
          ${socialLinks}
        </div>
      </div>
    </div>
  `;
}

function loadBoardMembers() {
    const container = document.getElementById('boardContainer');
    if (!container) {
        console.error('Board container not found');
        return;
    }

    container.innerHTML = boardData.boardMembers
        .map(member => createBoardMember(member))
        .join('');
}

document.addEventListener('DOMContentLoaded', function () {
    loadBoardMembers();

    const body = document.querySelector('body');
    body.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        document.documentElement.style.setProperty('--x', `${x}px`);
        document.documentElement.style.setProperty('--y', `${y}px`);
    });

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const text = this.textContent.trim();
            if (text.includes('Therapist')) {
                console.log('Booking therapist...');
            } else if (text.includes('Articles')) {
                console.log('Exploring articles...');
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // New JavaScript for Hamburger Menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close nav menu when a link is clicked (optional, but good for UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const activeMembers = document.querySelectorAll('.board-member:hover');
        activeMembers.forEach(member => {
            member.blur();
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const bookButton = document.querySelector('.book-therapist-btn');

    if (bookButton) {
        bookButton.addEventListener('click', () => {
            console.log('Book a therapist button clicked!');
            // In a real application, you might redirect to a booking page or open a modal here.
            // window.location.href = 'https://example.com/book-therapist';
        });
    }
});