export const calculateRoundPrice = (price: number, margin: number) => {
    return Math.round(price * margin);
}

export const formatPrice = (price: number) => {
    return `${Math.round(price / 1000)}k`;
}