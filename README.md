# Claude AI GitHub Integration

Welcome to the Claude AI GitHub Integration project! 🤖

## Description

A complete setup for integrating Claude AI into your GitHub workflows, enabling AI-powered code assistance and automated code reviews directly in your repository.

## Features

- 🤖 **Claude Code Assistant**: Respond to `@claude` mentions in issues and PRs
- 📝 **Automated Code Reviews**: Get AI-powered feedback on all pull requests
- 🔧 **Customizable Prompts**: Tailor Claude's behavior to your project needs  
- 🚀 **Easy Setup**: Ready-to-use workflows with minimal configuration
- 🔒 **Secure**: Uses GitHub secrets for API key management

## Quick Setup

### 1. Add Required Secrets

In your GitHub repository settings, add the following secret:

- `ANTHROPIC_API_KEY`: Your Anthropic API key ([Get one here](https://console.anthropic.com/))

### 2. Enable Workflows

The workflows are already configured in `.github/workflows/`:
- `claude.yml`: Interactive Claude assistant
- `claude-code-review.yml`: Automated PR reviews

### 3. Start Using Claude

**In Issues or Pull Requests:**
- Mention `@claude` followed by your question or request
- Example: `@claude can you help optimize this function?`

**Automatic PR Reviews:**
- Reviews are triggered automatically on new PRs
- Claude will analyze code quality, security, and best practices

## Customization

### Custom Instructions

Edit the workflows to add project-specific instructions:

```yaml
custom_instructions: |
  Follow our coding standards
  Ensure all new code has tests
  Use TypeScript for new files
  Focus on performance optimization
```

### Allowed Tools

Enable Claude to run specific commands:

```yaml
allowed_tools: "Bash(npm install),Bash(npm run build),Bash(npm run test:*)"
```

### Different Models

Switch to Claude Opus for more complex tasks:

```yaml
model: "claude-opus-4-20250514"
```

## Examples

See `examples/` directory for common use cases and configurations.

---

**Last Updated:** December 2024 📅

*Happy coding with Claude!* ✨🤖
