export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-muted border-t-primary rounded-full animate-spin"></div>
                <p className="text-lg font-medium text-primary animate-pulse">Loading Zrotax...</p>
            </div>
        </div>
    );
}
