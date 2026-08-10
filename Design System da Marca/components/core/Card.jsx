import React from 'react';
export function Card({interactive=false, padding=24, children, style, ...rest}) {
  const [hover,setHover]=React.useState(false);
  return React.createElement('div',{
    onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),
    style:{background:'var(--surface-card)',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',
      boxShadow:interactive&&hover?'var(--shadow-md)':'var(--shadow-sm)',padding,
      transform:interactive&&hover?'translateY(-2px)':'none',cursor:interactive?'pointer':'default',
      transition:'box-shadow var(--dur-med) var(--ease-brand), transform var(--dur-med) var(--ease-brand)',...style},...rest},children);
}
