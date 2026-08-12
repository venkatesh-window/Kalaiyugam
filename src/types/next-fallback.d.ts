declare module 'next/link' {
  import React from 'react';
  const Link: React.FC<any>;
  export default Link;
}

declare module 'next/navigation' {
  export function useRouter(): any;
  export function usePathname(): any;
  export function useSearchParams(): any;
}
