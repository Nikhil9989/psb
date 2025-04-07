import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and tailwind-merge for optimized Tailwind CSS class handling
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
