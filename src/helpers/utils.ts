export default function getDisplayName(WrappedComponent: {
    displayName?: string;
    name?: string;
}): string {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export const getCurrentYear = () => {
    const today = new Date();
    return today.getFullYear();
};

export const getMovieIDFromPathname = (history: any): string => {
    return history.location.pathname.split('/').slice(-1)[0];
};
