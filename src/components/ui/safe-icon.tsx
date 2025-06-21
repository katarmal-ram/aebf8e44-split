
import React from 'react';
import * as LucideIcons from 'lucide-react';

interface SafeIconProps {
  name: string;
  fallback?: keyof typeof LucideIcons;
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

// List of common Lucide React icons
export const availableIcons = [
  'award', 'clock', 'cog', 'wrench', 'truck', 'headphones', 'shield', 'users',
  'star', 'heart', 'thumbs-up', 'check-circle', 'x-circle', 'alert-circle',
  'info', 'help-circle', 'settings', 'home', 'phone', 'mail', 'map-pin',
  'calendar', 'search', 'download', 'upload', 'edit', 'trash', 'copy',
  'eye', 'eye-off', 'lock', 'unlock', 'play', 'pause', 'chevron-right',
  'chevron-left', 'chevron-up', 'chevron-down', 'arrow-right', 'arrow-left',
  'plus', 'minus', 'x', 'menu', 'external-link', 'link', 'camera',
  'image', 'file', 'folder', 'bookmark', 'tag', 'filter', 'sort-asc',
  'sort-desc', 'grid', 'list', 'layout', 'maximize', 'minimize', 'refresh',
  'rotate-cw', 'rotate-ccw', 'zoom-in', 'zoom-out', 'sun', 'moon',
  'cloud', 'wifi', 'battery', 'volume-2', 'volume-x', 'mic', 'mic-off'
] as const;

const SafeIcon: React.FC<SafeIconProps> = ({ 
  name, 
  fallback = 'HelpCircle', 
  className = '',
  size = 24,
  ...props 
}) => {
  // Convert kebab-case to PascalCase for Lucide icon names
  const iconName = name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

  // Try to get the icon component
  const IconComponent = (LucideIcons as any)[iconName];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" (${iconName}) not found. Using fallback: ${fallback}`);
    const FallbackIcon = (LucideIcons as any)[fallback];
    return <FallbackIcon className={className} size={size} {...props} />;
  }

  return <IconComponent className={className} size={size} {...props} />;
};

export default SafeIcon;
