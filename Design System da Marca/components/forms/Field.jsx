import React from 'react';
export function Field({label, hint, error, required, children, style}) {
  return React.createElement('label',{style:{display:'flex',flexDirection:'column',gap:6,font:'600 13px var(--font-body)',color:'var(--text-heading)',...style}},
    label?React.createElement('span',null,label,required?React.createElement('span',{style:{color:'var(--danger)'}},' *'):null):null,
    children,
    (error||hint)?React.createElement('span',{style:{font:'400 12px var(--font-body)',color:error?'var(--danger)':'var(--text-muted)'}},error||hint):null);
}
