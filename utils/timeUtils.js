function getCurrentUTCTime() {
    try {
        const now = new Date();
        return now.toUTCString();
    } catch (error) {
        reportError(error);
        return "Error loading time";
    }
}

function UTCClock({ onTimeUpdate }) {
    try {
        const [time, setTime] = React.useState(getCurrentUTCTime());

        React.useEffect(() => {
            const timer = setInterval(() => {
                setTime(getCurrentUTCTime());
                if (onTimeUpdate) {
                    onTimeUpdate(getCurrentUTCTime());
                }
            }, 1000);

            return () => clearInterval(timer);
        }, [onTimeUpdate]);

        return (
            <div className="text-sm text-gray-400 mt-6 tracking-wider" data-testid="currentTimeUTC">
                <i className="far fa-clock mr-2"></i>
                {time}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
