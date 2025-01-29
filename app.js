function App() {
    try {
        return (
            <div>
                <SpotlightEffect />
                <div className="profile-card glass-effect">
                    <ProfileImage />
                    <ProfileInfo />
                    <SocialLinks />
                    <UTCClock />
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
