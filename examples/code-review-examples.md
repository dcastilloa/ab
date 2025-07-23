# Code Review Examples with @claude

This document shows common ways to interact with Claude during code reviews.

## Basic Code Review Request

**In a PR comment:**
```
@claude can you review this function for potential bugs?
```

**Claude might respond with:**
- Security vulnerability analysis
- Performance optimization suggestions
- Code style improvements
- Logic error detection

## Specific Review Areas

### Security Review
```
@claude please focus on security issues in this authentication code
```

### Performance Analysis
```
@claude can you identify any performance bottlenecks in this database query?
```

### Test Coverage
```
@claude what additional test cases should I add for this component?
```

## Code Improvement Suggestions

### Refactoring Help
```
@claude how can I refactor this function to be more readable?
```

### Best Practices
```
@claude does this code follow React best practices? What can be improved?
```

### Type Safety
```
@claude can you help improve the TypeScript types in this interface?
```

## Debugging Assistance

### Error Analysis
```
@claude this test is failing with [error message]. Can you help debug it?
```

### Code Explanation
```
@claude can you explain what this complex algorithm is doing?
```

## Documentation Help

### Comment Generation
```
@claude can you add JSDoc comments to this function?
```

### README Updates
```
@claude please suggest improvements to our API documentation
```

## Tips for Effective Collaboration

1. **Be Specific**: Mention specific files, functions, or line numbers when possible
2. **Provide Context**: Include error messages, expected behavior, or requirements
3. **Ask Follow-ups**: Don't hesitate to ask for clarification or alternatives
4. **Request Examples**: Ask for code examples when Claude suggests improvements

Remember: Claude can see the entire diff and repository context, so it can provide comprehensive feedback!
