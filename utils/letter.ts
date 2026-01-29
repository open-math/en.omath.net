import { type Random } from '@erudit-js/prose/elements/problem/rng';

export function getRandomLatinLetter(random: Random, casing: 'lower' | 'upper' | 'any' = 'any'): string {
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letters = casing === 'lower' ? lowerLetters : casing === 'upper' ? upperLetters : lowerLetters + upperLetters;
    return random.arrayElement(letters.split(''))!;
}
