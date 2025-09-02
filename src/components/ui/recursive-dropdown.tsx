import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

export function RecursiveDropdown({
  item,
  onClick,
}: {
  item: any;
  onClick?: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

  if (!item.children) {
    return (
      <DropdownMenuItem asChild>
        <a href={item.href} onClick={onClick}>
          {item.name}
        </a>
      </DropdownMenuItem>
    );
  }

  // Only enable hover for desktop (md and up)
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
      }
      setOpen(true);
    }
  };
  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      closeTimeout.current = setTimeout(() => {
        setOpen(false);
      }, 150); // 150ms delay before closing
    }
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          ref={triggerRef}
          className='text-sm font-medium transition-colors hover:text-primary capitalize'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {item.name}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {item.children.map((child: any) => (
          <RecursiveDropdown key={child.name} item={child} onClick={onClick} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
