import { describe, expect, it } from '@jest/globals';
import { CerberusStyle } from '@peekaby/react-cerberus/core';
import { styleToCSS } from '../styleToCSS';

describe('styleToCSS', () => {
  it('should return CSS string', () => {
    // Arrange
    const style: CerberusStyle = {
      fontSize: 16,
      borderWidth: 2,
      borderStyle: 'solid',
    };
    const expected =
      'font-size: 16px;\nborder-width: 2px;\nborder-style: solid;';

    // Act
    const result = styleToCSS(style);

    // Assert
    expect(result).toBe(expected);
  });

  it('should support multiple font families', () => {
    // Arrange
    const style: CerberusStyle = {
      fontFamily: "Arial, 'sans-serif'",
    };
    const expected = "font-family: Arial, 'sans-serif';";

    // Act
    const result = styleToCSS(style);

    // Assert
    expect(result).toBe(expected);
  });
});
