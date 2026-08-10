import React from 'react';
export function Button({variant='primary', size='md', disabled=false, fullWidth=false, children, style, ...rest}) {
  const [hover,setHover]=React.useState(false),[press,setPress]=React.useState(false);
  const sizes={sm:{padding:'7px 14px',fontSize:13},md:{padding:'11px 22px',fontSize:14},lg:{padding:'14px 28px',fontSize:16}};
  const v={
    primary:{bg:'var(--accent)',bgH:'var(--accent-hover)',bgP:'var(--accent-press)',color:'#fff',border:'1px solid transparent'},
    secondary:{bg:'var(--surface-dark)',bgH:'var(--navy-700)',bgP:'var(--navy-900)',color:'var(--text-on-dark)',border:'1px solid transparent'},
    outline:{bg:'transparent',bgH:'var(--gray-100)',bgP:'var(--gray-200)',color:'var(--text-heading)',border:'1px solid var(--border-strong)'},
    ghost:{bg:'transparent',bgH:'var(--accent-soft)',bgP:'var(--orange-100)',color:'var(--accent-hover)',border:'1px solid transparent'},
  }[variant];
  return React.createElement('button',{
    disabled,
    onMouseEnter:()=>setHover(true),onMouseLeave:()=>{setHover(false);setPress(false);},
    onMouseDown:()=>setPress(true),onMouseUp:()=>setPress(false),
    style:{
      fontFamily:'var(--font-display)',fontWeight:600,textTransform:'uppercase',letterSpacing:'var(--tracking-caps)',
      background:press?v.bgP:hover?v.bgH:v.bg,color:v.color,border:v.border,
      borderRadius:'var(--radius-button)',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,
      display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,
      width:fullWidth?'100%':undefined,transition:'background var(--dur-fast) var(--ease-brand)',
      ...sizes[size],...style
    },...rest
  },children);
}
