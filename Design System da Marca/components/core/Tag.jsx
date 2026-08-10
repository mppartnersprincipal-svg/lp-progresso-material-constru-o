import React from 'react';
export function Tag({selected=false, onRemove, children, style, ...rest}) {
  return React.createElement('span',{style:{
    display:'inline-flex',alignItems:'center',gap:6,padding:'5px 12px',borderRadius:'var(--radius-pill)',cursor:rest.onClick?'pointer':'default',
    background:selected?'var(--surface-dark)':'var(--gray-100)',color:selected?'var(--text-on-dark)':'var(--text-body)',
    border:'1px solid '+(selected?'var(--surface-dark)':'var(--gray-200)'),font:'500 13px var(--font-body)',...style},...rest},
    children,
    onRemove?React.createElement('button',{onClick:onRemove,'aria-label':'Remover',style:{all:'unset',cursor:'pointer',lineHeight:1,fontSize:14,opacity:.7}},'\u00d7'):null);
}
