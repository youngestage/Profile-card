function ProfileImage() {
    try {
        return (
            <div className="flex justify-center">
                <img 
                    src="/image/profile.png"
                    alt="Profile"
                    className="profile-image"
                    data-testid="profilePicture"
                    width="150"
                    height="150"
                />
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
