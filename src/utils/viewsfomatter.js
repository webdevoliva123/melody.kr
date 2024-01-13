function formatViewsCount(viewsCount) {
    if (viewsCount < 1000) {
        return viewsCount.toString();
    } else if (viewsCount < 1000000) {
        return (Math.floor(viewsCount / 1000)).toLocaleString() + 'k';
    } else {
        return (Math.floor(viewsCount / 1000000)).toLocaleString() + 'M';
    }
}

export default formatViewsCount