import React from 'react';
export function Tabs({tabs=[], value, onChange, style}) {
  return React.createElement('div',{role:'tablist',style:{display:'flex',gap:4,borderBottom:'2px solid var(--border)',...style}},
    tabs.map(t=>React.createElement('button',{key:t,role:'tab','aria-selected':t===value,onClick:()=>onChange&&onChange(t),
      style:{all:'unset',cursor:'pointer',padding:'10px 16px',marginBottom:-2,
        font:(t===value?'600':'500')+' 14px var(--font-body)',
        color:t===value?'var(--text-heading)':'var(--text-muted)',
        borderBottom:'2px solid '+(t===value?'var(--accent)':'transparent'),
        transition:'color var(--dur-fast) var(--ease-brand)'}},t)));
}
