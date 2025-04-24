// Responsive JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const createMobileNav = () => {
        const nav = document.querySelector('nav');
        const navUl = nav.querySelector('ul');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('div');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
        
        // Insert button before the nav list
        nav.insertBefore(mobileMenuBtn, navUl);
        
        // Add toggle functionality
        mobileMenuBtn.addEventListener('click', function() {
            navUl.classList.toggle('show');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navUl.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navUl.classList.remove('show');
                mobileMenuBtn.classList.remove('active');
            });
        });
    };
    
    // Only create mobile nav for smaller screens
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            // Check if mobile nav already exists
            if (!document.querySelector('.mobile-menu-btn')) {
                createMobileNav();
            }
        }
    };
    
    // Initial check
    handleResize();
    
    // Listen for window resize
    window.addEventListener('resize', handleResize);
    
    // Add CSS for mobile navigation
    const addMobileStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            .mobile-menu-btn {
                display: none;
                cursor: pointer;
                padding: 10px;
            }
            
            @media (max-width: 768px) {
                .mobile-menu-btn {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 30px;
                    height: 20px;
                }
                
                .mobile-menu-btn span {
                    height: 3px;
                    width: 100%;
                    background-color: white;
                    border-radius: 3px;
                    transition: all 0.3s ease;
                }
                
                .mobile-menu-btn.active span:nth-child(1) {
                    transform: translateY(8px) rotate(45deg);
                }
                
                .mobile-menu-btn.active span:nth-child(2) {
                    opacity: 0;
                }
                
                .mobile-menu-btn.active span:nth-child(3) {
                    transform: translateY(-8px) rotate(-45deg);
                }
                
                nav ul {
                    display: none;
                    flex-direction: column;
                    width: 100%;
                    text-align: center;
                }
                
                nav ul.show {
                    display: flex;
                }
                
                nav .container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
            }
        `;
        document.head.appendChild(style);
    };
    
    // Add mobile styles
    addMobileStyles();
});
