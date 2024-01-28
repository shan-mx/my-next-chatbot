import React from 'react'

import { cn } from '@/lib/utils'
import {ClearHistory} from "@/components/clear-history";
import {clearChats} from "@/app/actions";

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      <ClearHistory clearChats={clearChats} isEnabled={true} />
    </p>
  )
}
