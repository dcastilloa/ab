#!/usr/bin/env python3
"""
Demo script for working with the string "abcdef"
This script demonstrates various operations and use cases.
"""

def main():
    # The string we're working with
    text = "abcdef"
    
    print("=== ABCDEF Demonstration ===\n")
    
    # Basic string operations
    print(f"Original string: {text}")
    print(f"Length: {len(text)}")
    print(f"Uppercase: {text.upper()}")
    print(f"Reversed: {text[::-1]}")
    
    # Character analysis
    print(f"\nCharacter breakdown:")
    for i, char in enumerate(text):
        print(f"  Position {i}: '{char}' (ASCII: {ord(char)})")
    
    # Hex representation
    hex_values = [hex(ord(char)) for char in text]
    print(f"\nHex values: {hex_values}")
    
    # As a hex string (common use case)
    if all(c in '0123456789abcdefABCDEF' for c in text):
        try:
            as_int = int(text, 16)
            print(f"\nAs hexadecimal number: {as_int} (decimal)")
            print(f"Binary representation: {bin(as_int)}")
        except ValueError:
            print(f"\nNot a valid hexadecimal string")
    
    # Pattern matching and analysis
    print(f"\nPattern analysis:")
    print(f"  Is alphabetical sequence: {text == 'abcdef'}")
    print(f"  Contains only letters: {text.isalpha()}")
    print(f"  All lowercase: {text.islower()}")
    
    # Transformations
    print(f"\nTransformations:")
    caesar_cipher = ''.join(chr((ord(char) - ord('a') + 3) % 26 + ord('a')) for char in text if char.isalpha())
    print(f"  Caesar cipher (+3): {caesar_cipher}")
    
    # Split into pairs (useful for hex processing)
    pairs = [text[i:i+2] for i in range(0, len(text), 2)]
    print(f"  Split into pairs: {pairs}")

if __name__ == "__main__":
    main()