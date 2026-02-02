export function getRandomLatinLetter(random: ProblemRandom, casing: 'lower' | 'upper' | 'any' = 'any'): string {
  const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
  const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letters = casing === 'lower' ? lowerLetters : casing === 'upper' ? upperLetters : lowerLetters + upperLetters;
  return random.arrayElement(letters.split(''))!;
}
