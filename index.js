// SMALL SCREEN NAV BAR DESIGN
const menuToggle = document.getElementById('menuToggle');
    const hamburger = document.getElementById('hamburger');
    const menuDropdown = document.getElementById('menuDropdown');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Toggle menu
    menuToggle.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuDropdown.classList.toggle('active');
    });

    // Close menu when clicking on a menu item
    menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
    e.preventDefault();
    hamburger.classList.remove('active');
    menuDropdown.classList.remove('active');
    console.log('Navigating to:', link.getAttribute('href'));
    });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-toggle') && !e.target.closest('.menu-dropdown')) {
    hamburger.classList.remove('active');
    menuDropdown.classList.remove('active');
    }
    });

    

    // IMAGE CARD DESIGN START/////////////////////////////

const imgDiv = document.querySelector("#myImage1 img");

imgDiv.addEventListener("mouseover", ()=>{
  imgDiv.style.opacity = "0";

  setTimeout(()=>{
    imgDiv.src =   imgDiv.src = "images/stock image22.webp";
    imgDiv.style.opacity ="1";
  }, 300);
})

imgDiv.addEventListener("mouseout", ()=>{
    imgDiv.style.opacity =  "0";
    setTimeout(()=>{
        imgDiv.src = "images/stock image23.webp";
        imgDiv.style.opacity = "1";
    },300)
})


const imgDif = document.querySelector("#myImage2 img");

imgDif.addEventListener("mouseover", ()=>{
  imgDif.style.opacity = "0";

  setTimeout(()=>{
    imgDif.src =   imgDif.src = "images/stock image19.webp";
    imgDif.style.opacity ="1";
  }, 300);
})

imgDif.addEventListener("mouseout", ()=>{
    imgDif.style.opacity =  "0";
    setTimeout(()=>{
        imgDif.src = "images/stock image20.webp";
        imgDif.style.opacity = "1";
    },300)
})

const imgDig = document.querySelector("#myImage3 img");

imgDig.addEventListener("mouseover", ()=>{
  imgDig.style.opacity = "0";

  setTimeout(()=>{
    imgDig.src =   imgDig.src = "images/stock image2.jpg";
    imgDig.style.opacity ="1";
  }, 300);
})

imgDig.addEventListener("mouseout", ()=>{
    imgDig.style.opacity =  "0";
    setTimeout(()=>{
        imgDig.src = "images/stock image3.webp";
        imgDig.style.opacity = "1";
    },300)
})


const imgDis = document.querySelector("#myImage4 img");

imgDis.addEventListener("mouseover", ()=>{
  imgDis.style.opacity = "0";

  setTimeout(()=>{
    imgDis.src =   imgDis.src = "images/stock image 4.webp";
    imgDis.style.opacity ="1";
  }, 300);
})

imgDis.addEventListener("mouseout", ()=>{
    imgDis.style.opacity =  "0";
    setTimeout(()=>{
        imgDis.src = "images/stock image21.webp";
        imgDis.style.opacity = "1";
    },300)
})

const imgdir = document.querySelector("#myImage5 img");

imgdir.addEventListener("mouseover", ()=>{
  imgdir.style.opacity = "0";

  setTimeout(()=>{
    imgdir.src =   imgdir.src = "images/stock image16.webp";
    imgdir.style.opacity ="1";
  }, 300);
})

imgdir.addEventListener("mouseout", ()=>{
    imgdir.style.opacity =  "0";
    setTimeout(()=>{
        imgdir.src = "images/stock image15.webp";
        imgdir.style.opacity = "1";
    },300)
})
const imgDid = document.querySelector("#myImage6 img");

imgDid.addEventListener("mouseover", ()=>{
  imgDid.style.opacity = "0";

  setTimeout(()=>{
    imgDid.src =   imgDid.src = "images/stock image17.webp";
    imgDid.style.opacity ="1";
  }, 300);
})

imgDid.addEventListener("mouseout", ()=>{
    imgDid.style.opacity =  "0";
    setTimeout(()=>{
        imgDid.src = "images/stock image18.webp";
        imgDid.style.opacity = "1";
    },300)
})
const imgDio = document.querySelector("#myImage7 img");

imgDio.addEventListener("mouseover", ()=>{
  imgDio.style.opacity = "0";

  setTimeout(()=>{
    imgDio.src =   imgDio.src = "images/stock image13.webp";
    imgDio.style.opacity ="1";
  }, 300);
})

imgDio.addEventListener("mouseout", ()=>{
    imgDio.style.opacity =  "0";
    setTimeout(()=>{
        imgDio.src = "images/stock image14.webp";
        imgDio.style.opacity = "1";
    },300)
})
const imgCio = document.querySelector("#myImage8 img");

imgCio.addEventListener("mouseover", ()=>{
  imgCio.style.opacity = "0";

  setTimeout(()=>{
    imgCio.src =   imgCio.src = "images/stock image24.webp";
    imgCio.style.opacity ="1";
  }, 300);
})

imgCio.addEventListener("mouseout", ()=>{
    imgCio.style.opacity =  "0";
    setTimeout(()=>{
        imgCio.src = "images/stock image25.webp";
        imgCio.style.opacity = "1";
    },300)
})
const imgkio = document.querySelector("#myImage9 img");

imgkio.addEventListener("mouseover", ()=>{
  imgkio.style.opacity = "0";

  setTimeout(()=>{
    imgkio.src =   imgkio.src = "images/stock image11.webp";
    imgkio.style.opacity ="1";
  }, 300);
})

imgkio.addEventListener("mouseout", ()=>{
    imgkio.style.opacity =  "0";
    setTimeout(()=>{
        imgkio.src = "images/stock image12.webp";
        imgkio.style.opacity = "1";
    },300)
})
const imgfio = document.querySelector("#myImage10 img");

imgfio.addEventListener("mouseover", ()=>{
  imgfio.style.opacity = "0";

  setTimeout(()=>{
    imgfio.src =   imgfio.src = "images/stock image 5.webp";
    imgfio.style.opacity ="1";
  }, 300);
})

imgfio.addEventListener("mouseout", ()=>{
    imgfio.style.opacity =  "0";
    setTimeout(()=>{
        imgfio.src = "images/stock image 6.webp";
        imgfio.style.opacity = "1";
    },300)
})
const imgSio = document.querySelector("#myImage11 img");

imgSio.addEventListener("mouseover", ()=>{
  imgSio.style.opacity = "0";

  setTimeout(()=>{
    imgSio.src =   imgSio.src = "images/change image1.jpg";
    imgSio.style.opacity ="1";
  }, 300);
})

imgSio.addEventListener("mouseout", ()=>{
    imgSio.style.opacity =  "0";
    setTimeout(()=>{
        imgSio.src = "images/newboz.webp";
        imgSio.style.opacity = "1";
    },300)
})
const imgKik = document.querySelector("#myImage12 img");

imgKik.addEventListener("mouseover", ()=>{
  imgKik.style.opacity = "0";

  setTimeout(()=>{
    imgKik.src =   imgKik.src = "images/stock image 7.webp";
    imgKik.style.opacity ="1";
  }, 300);
})

imgKik.addEventListener("mouseout", ()=>{
    imgKik.style.opacity =  "0";
    setTimeout(()=>{
        imgKik.src = "images/stock image26.webp";
        imgKik.style.opacity = "1";
    },300)
})


// SMALL SCREEN IMAGE CARD///////////////////////////////

if (window.innerWidth<= 768){
    let currentSlide = 0;
    const carousels = document.getElementById('carousels');
    const slidess = document.querySelectorAll('.carousel-items');
    const totalSlides = slidess.length;
    let autoPlayInterval;
    
    function updateCarousels (){
        carousels.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function moveSlides (){
        currentSlide++;
        if (currentSlide >= totalSlides){
            currentSlide = 0;
        }
        updateCarousels();
    }
    function autoplayy(){
        autoPlayInterval = setInterval(moveSlides, 4000);
    }
    
    updateCarousels();
    autoplayy();

    carousels.parentElement.addEventListener('touchstart', ()=>{
        clearInterval(autoPlayInterval);
    })

    carousels.parentElement.addEventListener('touchend', ()=>{
        autoplayy();
    })
}







// CAROUSEL START


const track = document.getElementById('carouselTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const cards = Array.from(document.querySelectorAll('.card'));
        
        let currentIndex = 0;
        let cardsPerView = window.innerWidth > 768 ? 3 : 1;
        let isAnimating = false;
        let autoScrollInterval;
        const autoScrollDelay = 3000; // 3 seconds
        
        function updateCardsPerView() {
            cardsPerView = window.innerWidth > 768 ? 3 : 1;
            updateCarousel(false);
        }
        
        function updateCarousel(animate = true) {
            if (animate && isAnimating) return;
            
            const cardWidth = cards[0].offsetWidth;
            const gap = window.innerWidth > 768 ? 20 : 0;
            const offset = currentIndex * (cardWidth + gap);
            
            if (animate) {
                isAnimating = true;
                
                // Add transitioning class to all cards
                cards.forEach(card => card.classList.add('transitioning'));
                
                // Animate the track movement
                track.style.transition = 'transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)';
                track.style.transform = `translateX(-${offset}px)`;
                
                // After movement starts, update center classes so transformations happen mid-scroll
                setTimeout(() => {
                    updateCenterCards();
                }, 50);
                
                // Reset animation flag after transition completes
                setTimeout(() => {
                    isAnimating = false;
                    cards.forEach(card => card.classList.remove('transitioning'));
                }, 600);
            } else {
                track.style.transition = 'none';
                track.style.transform = `translateX(-${offset}px)`;
                updateCenterCards();
            }
            
            // Update button states
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= cards.length - cardsPerView;
        }
        
        function updateCenterCards() {
            cards.forEach((card, idx) => {
                card.classList.remove('center');
                
                if (window.innerWidth > 768) {
                    // Desktop: middle card of the three visible cards
                    if (idx === currentIndex + 1) {
                        card.classList.add('center');
                    }
                } else {
                    // Mobile: the current card
                    if (idx === currentIndex) {
                        card.classList.add('center');
                    }
                }
            });
        }
        
        function startAutoScroll() {
            stopAutoScroll(); // Clear any existing interval
            autoScrollInterval = setInterval(() => {
                if (currentIndex < cards.length - cardsPerView) {
                    currentIndex++;
                } else {
                    currentIndex = 0; // Loop back to start
                }
                updateCarousel(true);
            }, autoScrollDelay);
        }
        
        function stopAutoScroll() {
            if (autoScrollInterval) {
                clearInterval(autoScrollInterval);
            }
        }
        
        function resetAutoScroll() {
            stopAutoScroll();
            startAutoScroll();
        }
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0 && !isAnimating) {
                currentIndex--;
                updateCarousel(true);
                resetAutoScroll(); // Reset auto-scroll timer on manual interaction
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - cardsPerView && !isAnimating) {
                currentIndex++;
                updateCarousel(true);
                resetAutoScroll(); // Reset auto-scroll timer on manual interaction
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        });
        
        // Pause auto-scroll on hover
        track.addEventListener('mouseenter', stopAutoScroll);
        track.addEventListener('mouseleave', startAutoScroll);
        
        window.addEventListener('resize', () => {
            updateCardsPerView();
        });
        
        // Initialize
        if (window.innerWidth > 768 && cards.length >= 3) {
            cards[1].classList.add('center');
        } else {
            cards[0].classList.add('center');
        }
        
        updateCarousel(false);
        
        // Start auto-scrolling
        startAutoScroll();

