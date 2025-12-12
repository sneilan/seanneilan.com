export interface Template {
  name: string;
  equations: string[];
}

export const templates: Template[] = [
  {
    name: 'Quadratic Formula',
    equations: ['x = (-b plus.minus sqrt(b^2 - 4 a c)) / (2 a)'],
  },
  {
    name: 'Pythagorean Theorem',
    equations: ['a^2 + b^2 = c^2'],
  },
  {
    name: "Euler's Identity",
    equations: ['e^(i pi) + 1 = 0'],
  },
  {
    name: 'Derivative Definition',
    equations: ["f'(x) = lim_(h -> 0) (f(x + h) - f(x)) / h"],
  },
  {
    name: 'Integration by Parts',
    equations: ['integral u thin d v = u v - integral v thin d u'],
  },
  {
    name: 'Taylor Series',
    equations: ['f(x) = sum_(n=0)^infinity (f^((n))(a)) / n! (x - a)^n'],
  },
  {
    name: 'Matrix Multiplication',
    equations: [
      'mat(a, b; c, d) dot mat(e, f; g, h) = mat(a e + b g, a f + b h; c e + d g, c f + d h)',
    ],
  },
  {
    name: 'Gaussian Integral',
    equations: ['integral_(-infinity)^infinity e^(-x^2) d x = sqrt(pi)'],
  },
];
