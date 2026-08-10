import React from 'react';
export function Toast({tone='success', children, onClose, style}) {
  const t={success:'var(--success)',warning:'var(--warning)',danger:'var(--danger)',info:'var(--info)'}[tone];
  return React.createElement('div',{role:'status',style:{display:'inline-flex',alignItems:'center',gap:12,background:'var(--surface-darker)',color:'var(--text-on-dark)',
    borderLeft:'3px solid '+t,borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-lg)',padding:'12px 16px',font:'500 14px var(--font-body)',...style}},
    React.createElement('span',{style:{width:8,height:8,borderRadius:'50%',background:t,flexShrink:0}}),
    React.createElement('span',null,children),
    onClose?React.createElement('button',{onClick:onClose,'aria-label':'Fechar',style:{all:'unset',cursor:'pointer',opacity:.6,fontSize:16,lineHeight:1}},'\u00d7'):null);
}
