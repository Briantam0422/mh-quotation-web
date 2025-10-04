export const calculateRoundPrice = (price: number, margin: number) => {
    return Math.round(price * margin);
}

export const formatPrice = (price: number) => {
    return Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 0 })
    .format(price)
    .toLowerCase();
}