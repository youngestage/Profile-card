function ProfileInfo() {
    try {
        return (
            <div className="text-center text-white">
                <h1 className="text-3xl font-bold mb-2 tracking-wide" data-testid="fullName">
                   Young Leslie
                </h1>
                <h2 className="text-lg text-gray-300 mb-4 tracking-wider" data-testid="jobTitle">
                     Frontend Developer
                </h2>
                <p className="text-sm mb-4 text-gray-400 leading-relaxed" data-testid="shortBio">
                Dedicated to crafting intuitive and responsive web experiences. 
                Skilled in HTML, CSS, JavaScript, React, and TypeScript, with a 
                keen eye for design and usability. 
                Enthusiastic about climate tech, sustainable 
                solutions, and user-centric design.
                </p>
                <p className="text-sm mb-2 text-gray-300" data-testid="currentLocation">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    Ibadan, Nigeria
                </p>
                <a 
                    href="mailto:youngleslie.ik@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                    data-testid="emailAddress"
                >
                    <i className="fas fa-envelope mr-2"></i>
                    youngleslie.ik@gmail.com
                </a>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
