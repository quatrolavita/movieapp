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

export const calculatePageCount = (totalAmount: string): number | undefined => {
    try {
        const temp = +totalAmount;
        return Math.floor(temp / 20);
    } catch (e) {
        console.error('Error', e);
    }
};
