import { useState } from 'react';
import { Moon, Sun, Bold } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/components/ui/theme-provider';

export function ModeToggle() {
  const [theme, toggleTheme] = useState('dark');
  const { setTheme } = useTheme();

  const handleToggleChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    toggleTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <div className='flex items-center space-x-2 mb-1'>
      <Switch
        id='airplane-mode'
        checked={theme === 'light'}
        onCheckedChange={handleToggleChange}
      />
    </div>
  );
}
