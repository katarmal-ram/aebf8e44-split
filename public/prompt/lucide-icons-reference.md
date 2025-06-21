
# Lucide React Icons Reference

## Available Icons for JSON Configuration

When configuring icons in JSON files, use these exact icon names (kebab-case). The system will automatically convert them to the correct format.

### Business & Awards
- `award` - Trophy/award icon
- `shield` - Protection/security
- `star` - Rating/excellence
- `crown` - Premium/leadership
- `medal` - Achievement
- `thumbs-up` - Approval/satisfaction

### Technology & Tools
- `cog` - Settings/configuration
- `settings` - System settings
- `wrench` - Tools/maintenance
- `tool` - General tools
- `cpu` - Technology/computing
- `zap` - Power/energy
- `gear` - Mechanical

### Time & Experience
- `clock` - Time/experience
- `calendar` - Scheduling/dates
- `history` - Past experience
- `trending-up` - Growth/progress

### Communication & Contact
- `phone` - Telephone contact
- `mail` - Email contact
- `headphones` - Customer support
- `message-circle` - Communication

### Navigation & Actions
- `home` - Homepage
- `arrow-right` - Forward direction
- `arrow-left` - Back direction
- `chevron-right` - Next/expand
- `chevron-down` - Dropdown/expand
- `external-link` - External links
- `download` - Download action
- `upload` - Upload action

### People & Business
- `users` - Team/customers
- `user` - Individual person
- `building` - Company/office
- `briefcase` - Business/professional

### Status & Feedback
- `check-circle` - Success/completed
- `x-circle` - Error/cancelled
- `alert-circle` - Warning/attention
- `info` - Information
- `help-circle` - Help/support

### Media & Content
- `image` - Pictures/gallery
- `camera` - Photography
- `video` - Video content
- `play` - Play/start
- `pause` - Pause/stop

### Interface Elements
- `menu` - Navigation menu
- `search` - Search functionality
- `filter` - Filtering options
- `grid` - Grid layout
- `list` - List layout
- `eye` - View/visibility
- `edit` - Edit/modify

## Usage Examples

```json
{
  "icon": "award",
  "title": "Quality Excellence"
}
```

```json
{
  "icon": "clock", 
  "title": "Years of Experience"
}
```

```json
{
  "icon": "users",
  "title": "Satisfied Customers"
}
```

## Fallback Behavior

If an invalid icon name is provided:
1. A warning will be logged to console
2. A default `help-circle` icon will be displayed
3. The site will continue to function normally

## Best Practices

1. Use descriptive icon names that match your content
2. Stick to the provided list for consistency
3. Test icon names in development before deploying
4. Use meaningful fallbacks for critical UI elements
