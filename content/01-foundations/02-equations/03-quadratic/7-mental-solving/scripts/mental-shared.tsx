import { gcd, isPerfectSquare, simplifyFraction } from '@open-math/shared/utils';
import { formatTrinomial, fractionLatex } from '../../4-quadratic-formula/scripts/quadratic-shared';

export { formatTrinomial, fractionLatex };

/** Reduce A, B, C by their GCD and ensure A > 0. */
export function reduceCoefficients(A: number, B: number, C: number): [number, number, number] {
  const g = gcd(gcd(Math.abs(A), Math.abs(B)), Math.abs(C));
  A /= g;
  B /= g;
  C /= g;
  if (A < 0) {
    A = -A;
    B = -B;
    C = -C;
  }
  return [A, B, C];
}

/** Check whether Ax²+Bx+C=0 is solvable by the zero-sum method. */
export function isZeroSumSolvable(A: number, B: number, C: number): 'plus' | 'minus' | false {
  if (A + B + C === 0) return 'plus';
  if (A - B + C === 0) return 'minus';
  return false;
}

/** Check whether Ax²+Bx+C=0 can be packed into a perfect square (Kx±T)²=0. */
export function isPerfectSquareSolvable(
  A: number,
  B: number,
  C: number,
): { K: number; T: number; minus: boolean } | false {
  if (A <= 0 || C < 0) return false;
  if (!isPerfectSquare(A) || !isPerfectSquare(C)) return false;
  const K = Math.round(Math.sqrt(A));
  const T = Math.round(Math.sqrt(C));
  if (Math.abs(B) !== 2 * K * T) return false;
  return { K, T, minus: B < 0 };
}

/**
 * Check whether the monic equation x²+Bx+C=0 factors over the integers.
 * Returns [t, k] such that t+k=B and t*k=C, or false.
 */
export function findIntegerFactors(B: number, C: number): [number, number] | false {
  const absC = Math.abs(C);
  for (let i = 1; i * i <= absC; i++) {
    if (absC % i !== 0) continue;
    const j = absC / i;
    for (const [t, k] of [
      [i, j],
      [-i, -j],
      [i, -j],
      [-i, j],
    ]) {
      if (t + k === B && t * k === C) return [t, k];
    }
  }

  if (C === 0 && B !== 0) return [0, B];
  return false;
}

/** Format a RootsCheck-compatible value for a fraction n/d. */
export function rootCheckValue(n: number, d: number): number | string {
  const [sn, sd] = simplifyFraction(n, d);
  return sd === 1 ? sn : `${sn}/${sd}`;
}

/** Format a root as LaTeX for answers. */
export function rootLatex(n: number, d: number): string {
  const [sn, sd] = simplifyFraction(n, d);
  return sd === 1 ? `${sn}` : fractionLatex(sn, sd);
}
