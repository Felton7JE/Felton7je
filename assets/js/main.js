(function(){
  // Vertical Timeline - by CodyHouse.co
	function VerticalTimeline( element ) {
		this.element = element;
		this.blocks = this.element.getElementsByClassName("cd-timeline__block");
		this.images = this.element.getElementsByClassName("cd-timeline__img");
		this.contents = this.element.getElementsByClassName("cd-timeline__content");
		this.offset = 0.8;
		this.hideBlocks();
	};

	VerticalTimeline.prototype.hideBlocks = function() {
		if ( !"classList" in document.documentElement ) {
			return; // no animation on older browsers
		}
		//hide timeline blocks which are outside the viewport
		var self = this;
		for( var i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
					self.images[i].classList.add("cd-timeline__img--hidden"); 
					self.contents[i].classList.add("cd-timeline__content--hidden"); 
				}
			})(i);
		}
	};

	VerticalTimeline.prototype.showBlocks = function() {
		if ( ! "classList" in document.documentElement ) {
			return;
		}
		var self = this;
		for( var i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.contents[i].classList.contains("cd-timeline__content--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
					// add bounce-in animation
					self.images[i].classList.add("cd-timeline__img--bounce-in");
					self.contents[i].classList.add("cd-timeline__content--bounce-in");
					self.images[i].classList.remove("cd-timeline__img--hidden");
					self.contents[i].classList.remove("cd-timeline__content--hidden");
				}
			})(i);
		}
	};

	var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
		verticalTimelinesArray = [],
		scrolling = false;
	if( verticalTimelines.length > 0 ) {
		for( var i = 0; i < verticalTimelines.length; i++) {
			(function(i){
				verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
			})(i);
		}

		//show timeline blocks on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
			}
		});
	}

	function checkTimelineScroll() {
		verticalTimelinesArray.forEach(function(timeline){
			timeline.showBlocks();
		});
		scrolling = false;
	};

  function toggleNavbar() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('open');
  }

  // Fecha o menu mobile ao clicar em um link do menu
  function closeNavbarOnLinkClick() {
    const menu = document.getElementById('navbarMenu');
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
    }
  }

  // Fecha o menu mobile ao clicar fora dele (em mobile)
  function closeNavbarOnOutsideClick(e) {
    const menu = document.getElementById('navbarMenu');
    const toggleBtn = document.querySelector('.navbar-toggle');
    if (
      menu.classList.contains('open') &&
      !menu.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      menu.classList.remove('open');
    }
  }

  // --- Navbar Highlight on Scroll ---
  // Mapeamento das seções e links
  const sectionMap = [
    { class: 'portfolio-section', navIndex: 0 },
    { class: 'my-projects-section', navIndex: 1 },
    { class: 'blog', navIndex: 2 },
    { class: 'specialization', navIndex: 3 },
    { class: 'contact-section', navIndex: 3 } // fallback para contato
  ];
  const navLinks = document.querySelectorAll('.navbar-menu li a');

  function getSectionTop(sectionClass) {
    const el = document.querySelector('.' + sectionClass);
    if (!el) return Infinity;
    return el.getBoundingClientRect().top;
  }

  function highlightNavbarOnScroll() {
    let activeIdx = 0;
    let minDist = Infinity;
    sectionMap.forEach((s, idx) => {
      const top = getSectionTop(s.class);
      if (top < window.innerHeight/2 && Math.abs(top) < minDist) {
        minDist = Math.abs(top);
        activeIdx = s.navIndex;
      }
    });
    navLinks.forEach((link, i) => {
      if (i === activeIdx) {
        link.classList.add('active-section');
      } else {
        link.classList.remove('active-section');
      }
    });
  }

  window.addEventListener('scroll', highlightNavbarOnScroll);
  window.addEventListener('DOMContentLoaded', function() {
    highlightNavbarOnScroll();

    // Adiciona evento para fechar o menu ao clicar em um link
    document.querySelectorAll('.navbar-menu li a').forEach(link => {
      link.addEventListener('click', closeNavbarOnLinkClick);
    });

    // Adiciona evento para fechar o menu ao clicar fora dele (mobile)
    document.addEventListener('click', closeNavbarOnOutsideClick);
  });

  // Expor funções para o escopo global
  window.toggleNavbar = toggleNavbar;

  // Adiciona scrollToSection ao escopo global
  window.scrollToSection = function(sectionClass) {
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

})();