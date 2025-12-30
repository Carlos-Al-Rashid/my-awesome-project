/**
 * Example test for my-awesome-project
 */

import { describe, it, expect } from 'vitest';
import { main } from '../src/index';

describe('my-awesome-project', () => {
  it('should run main function', () => {
    expect(() => main()).not.toThrow();
  });

  it('should pass basic test', () => {
    expect(1 + 1).toBe(2);
  });
});
