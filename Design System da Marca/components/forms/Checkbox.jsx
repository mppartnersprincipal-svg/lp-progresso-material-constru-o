import React from 'react';
export function Checkbox({checked=false, onChange, label, disabled=false, style}) {
  return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,font:'400 14px var(--font-body)',color:'var(--text-body)',...style}},
    React.createElement('span',{onClick:()=>!disabled&&onChange&&onChange(!checked),style:{width:18,height:18,borderRadius:'var(--radius-sm)',display:'inline-flex',alignItems:'center',justifyContent:'center',
      background:checked?'var(--accent)':'#fff',border:'1px solid '+(checked?'var(--accent)':'var(--border-strong)'),transition:'all var(--dur-fast)'}},
      checked?React.createElement('svg',{width:12,height:12,viewBox:'0 0 12 12'},React.createElement('path',{d:'M2 6.5L4.8 9L10 3',stroke:'#fff',strokeWidth:2,fill:'none',strokeLinecap:'round',strokeLinejoin:'round'})):null),
    label);
}
