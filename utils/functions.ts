export default function getFlexBasis (squadLength: number) {
    if(squadLength === 1 || squadLength === 2) return '100';
    if(squadLength > 1 && squadLength <= 4) return '50';
    if(squadLength > 4) return '33.33333333';
};