import { test, expect } from 'vitest';
import { localizeDate } from '.';

test('localizeDate', () => {
  const date = new Date('2024-12-17T12:00:00');
  const expected = '2024년 12월 17일';

  const result = localizeDate(date);

  expect(result).toEqual(expected);
});
