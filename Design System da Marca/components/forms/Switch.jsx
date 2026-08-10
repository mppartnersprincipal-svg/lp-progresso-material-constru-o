import React from 'react';
export function Switch({checked=false, onChange, label, disabled=false, style}) {
  return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,font:'400 14px var(--font-body)',color:'var(--text-body)',...style}},
    React.createElement('span',{onClick:()=>!disabled&&onChange&&onChange(!checked),style:{width:38,height:22,borderRadius:'var(--radius-pill)',padding:2,boxSizing:'border-box',
      background:checked?'var(--accent)':'var(--gray-300)',transition:'background var(--dur-med) var(--ease-brand)',display:'inline-flex'}},
      React.createElement('span',{style:{width:18,height:18,borderRadius:'50%',background:'#fff',boxShadow:'var(--shadow-sm)',
        transform:checked?'translateX(16px)':'none',transition:'transform var(--dur-med) var(--ease-brand)'}})),
    label);
}
