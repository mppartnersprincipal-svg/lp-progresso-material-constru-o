import React from 'react';
export function Radio({checked=false, onChange, label, disabled=false, style}) {
  return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,font:'400 14px var(--font-body)',color:'var(--text-body)',...style}},
    React.createElement('span',{onClick:()=>!disabled&&onChange&&onChange(true),style:{width:18,height:18,borderRadius:'50%',display:'inline-flex',alignItems:'center',justifyContent:'center',
      background:'#fff',border:'1px solid '+(checked?'var(--accent)':'var(--border-strong)'),transition:'all var(--dur-fast)'}},
      checked?React.createElement('span',{style:{width:10,height:10,borderRadius:'50%',background:'var(--accent)'}}):null),
    label);
}
