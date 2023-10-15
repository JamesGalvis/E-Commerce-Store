"use client"

import { cn } from '@/lib/utils'
import React, { MouseEventHandler } from 'react'

interface IconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  classname?: string;
  icon: React.ReactElement;
}

function IconButton({ classname, icon, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn("flex items-center justify-center rounded-full bg-white border shadow-md p-2 hover:scale-110 transition", classname)}
    >
      {icon}
    </button>
  )
}

export default IconButton