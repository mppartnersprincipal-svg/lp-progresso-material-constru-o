import React from 'react';
export function IconButton({variant='outline', size=36, label, children, style, ...rest}) {
  const [hover,setHover]=React.useState(false);
  const v={
    primary:{bg:'var(--accent)',bgH:'var(--accent-hover)',color:'#fff',border:'1px solid transparent'},
    outline:{bg:'transparent',bgH:'var(--gray-100)',color:'var(--text-heading)',border:'1px solid var(--border-strong)'},
    ghost:{bg:'transparent',bgH:'var(--accent-soft)',color:'var(--accent-hover)',border:'1px solid transparent'},
  }[variant];
  return React.createElement('button',{'aria-label':label,title:label,
    onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),
    style:{width:size,height:size,display:'inline-flex',alignItems:'center',justifyContent:'center',
      background:hover?v.bgH:v.bg,color:v.color,border:v.border,borderRadius:'var(--radius-button)',cursor:'pointer',
      transition:'background var(--dur-fast) var(--ease-brand)',...style},...rest},children);
}
