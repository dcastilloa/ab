#!/usr/bin/env python3
"""
Alphabet Sequence Handler
Working with the sequence: abcdef
"""

def generate_sequence(start='a', length=6):
    """Generate alphabet sequence starting from a given letter"""
    sequence = []
    current_ord = ord(start.lower())
    
    for i in range(length):
        if current_ord + i <= ord('z'):
            sequence.append(chr(current_ord + i))
        else:
            # Wrap around to 'a' if we exceed 'z'
            sequence.append(chr(ord('a') + (current_ord + i - ord('z') - 1)))
    
    return ''.join(sequence)

def analyze_sequence(seq):
    """Analyze the given sequence"""
    return {
        'length': len(seq),
        'characters': list(seq),
        'ascii_values': [ord(c) for c in seq],
        'is_consecutive': all(ord(seq[i+1]) - ord(seq[i]) == 1 for i in range(len(seq)-1)),
        'reversed': seq[::-1]
    }

def main():
    # Work with the sequence "abcdef"
    sequence = "abcdef"
    print(f"Working with sequence: {sequence}")
    print("-" * 40)
    
    # Analyze the sequence
    analysis = analyze_sequence(sequence)
    
    print(f"Length: {analysis['length']}")
    print(f"Characters: {analysis['characters']}")
    print(f"ASCII values: {analysis['ascii_values']}")
    print(f"Is consecutive: {analysis['is_consecutive']}")
    print(f"Reversed: {analysis['reversed']}")
    
    print("\nGenerating similar sequences:")
    print(f"From 'a' (6 chars): {generate_sequence('a', 6)}")
    print(f"From 'b' (6 chars): {generate_sequence('b', 6)}")
    print(f"From 'x' (6 chars): {generate_sequence('x', 6)}")

if __name__ == "__main__":
    main()