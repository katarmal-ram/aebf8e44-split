
# Prompt Templates for AI Customization

This folder contains template files for AI-powered content generation.

## Files

### `home-prompt.json`
Template for homepage content generation with [prompt] placeholders for AI customization.

### `lucide-icons-reference.md`
Complete reference of available icons with usage examples and best practices.

## Usage Instructions

1. **For AI Content Generation**: Use the prompt templates as a starting point
2. **Icon Selection**: Reference the icons guide when specifying icons in JSON
3. **Customization**: Replace [prompt] placeholders with specific instructions
4. **Validation**: Always test generated content before deploying

## Prompt Format

Use this format for AI prompts:
```
[prompt] Specific instruction for AI - context about what to generate
```

Example:
```
"title": "[prompt] Create compelling hero title for brass manufacturing company focusing on precision and quality"
```

## Icon Usage

Always specify icons from the approved list:
```json
{
  "icon": "award",
  "title": "Quality Excellence"
}
```

## Content Guidelines

- Keep titles under 60 characters for SEO
- Write descriptions between 150-160 characters for meta descriptions
- Use action-oriented language for CTAs
- Include specific industry terminology
- Maintain consistent brand voice
