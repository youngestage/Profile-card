function createSpotlight() {
    try {
        const spotlight = document.createElement('div');
        spotlight.className = 'spotlight';
        return spotlight;
    } catch (error) {
        reportError(error);
        return null;
    }
}

function updateSpotlightPosition(event, spotlight, card) {
    try {
        if (!spotlight || !card) return;
        
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        spotlight.style.left = `${x}px`;
        spotlight.style.top = `${y}px`;
    } catch (error) {
        reportError(error);
    }
}

function SpotlightEffect() {
    try {
        React.useEffect(() => {
            const profileCard = document.querySelector('.profile-card');
            if (!profileCard) return;

            const spotlight = createSpotlight();
            profileCard.appendChild(spotlight);
            
            const handleMouseMove = (event) => {
                updateSpotlightPosition(event, spotlight, profileCard);
            };
            
            const handleMouseEnter = () => {
                if (spotlight) {
                    spotlight.style.opacity = '1';
                }
                profileCard.classList.add('spotlight-hover');
            };
            
            const handleMouseLeave = () => {
                if (spotlight) {
                    spotlight.style.opacity = '0';
                }
                profileCard.classList.remove('spotlight-hover');
            };
            
            profileCard.addEventListener('mousemove', handleMouseMove);
            profileCard.addEventListener('mouseenter', handleMouseEnter);
            profileCard.addEventListener('mouseleave', handleMouseLeave);
            
            // Set initial state
            spotlight.style.opacity = '0';
            
            return () => {
                profileCard.removeEventListener('mousemove', handleMouseMove);
                profileCard.removeEventListener('mouseenter', handleMouseEnter);
                profileCard.removeEventListener('mouseleave', handleMouseLeave);
                if (spotlight && spotlight.parentNode) {
                    spotlight.parentNode.removeChild(spotlight);
                }
            };
        }, []);
        
        return null;
    } catch (error) {
        reportError(error);
        return null;
    }
}
