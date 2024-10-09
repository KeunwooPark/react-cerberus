import { describe, expect, it } from '@jest/globals';
import { CerberusStyle } from '@react-cerberus/elements';
import numbersToPixels from '../numbersToPixels';

describe('numbersToPixels', () => {
  it('should convert numeric values to pixel strings', () => {
    // Arrange
    const style: CerberusStyle = {
      fontSize: 16,
      fontWeight: 500,
      borderWidth: 2,
      borderStyle: 'solid',
    };
    const expected = {
      fontSize: '16px',
      // font weight does not have units
      fontWeight: '500',
      borderWidth: '2px',
      borderStyle: 'solid',
    };

    // Act
    const result = numbersToPixels(style);

    // Assert
    expect(result).toEqual(expected);
  });

  it("should not convert 'fontWeight' and 'zIndex' to pixel strings", () => {
    // Arrange
    const style: CerberusStyle = {
      fontSize: 16,
      fontWeight: 500,
      borderWidth: 2,
      borderStyle: 'solid',
      zIndex: 100,
    };
    const expected = {
      fontSize: '16px',
      // font weight does not have units
      fontWeight: '500',
      borderWidth: '2px',
      borderStyle: 'solid',
      zIndex: '100',
    };

    // Act
    const result = numbersToPixels(style);

    // Assert
    expect(result).toEqual(expected);
  });
});
