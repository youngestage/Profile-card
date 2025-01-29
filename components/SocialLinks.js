function SocialLinks() {
    try {
        return (
            <div className="social-links" data-testid="socialLinks">
                <a href="https://www.linkedin.com/in/youngestage/" className="social-icon text-white" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/youngestage" className="social-icon text-white" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://x.com/_youngestage" className="social-icon text-white" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
