export const VALIDATION_PATTERN = {
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  PASS_NUM: /\d/,
  PASS_UPPER: /[A-Z]/,
  PASS_LOWER: /[a-z]/,
  PASS_SPEC_CHAR: /[!?@#$%^&*]/,
} as const;
