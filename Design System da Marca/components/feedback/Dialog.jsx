import React from 'react';
export function Dialog({open=false, title, onClose, footer, children, width=480}) {
  if(!open) return null;
  return React.createElement('div',{onClick:onClose,style:{position:'fixed',inset:0,background:'rgba(21,34,56,.55)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000,padding:24}},
    React.createElement('div',{onClick:e=>e.stopPropagation(),role:'dialog','aria-modal':true,style:{background:'#fff',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-lg)',width,maxWidth:'100%',overflow:'hidden'}},
      React.createElement('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 24px',borderBottom:'1px solid var(--border)'}},
        React.createElement('h2',{style:{margin:0,font:'italic 700 20px var(--font-display)',textTransform:'uppercase',color:'var(--text-heading)'}},title),
        React.createElement('button',{onClick:onClose,'aria-label':'Fechar',style:{all:'unset',cursor:'pointer',fontSize:20,color:'var(--text-muted)',lineHeight:1}},'\u00d7')),
      React.createElement('div',{style:{padding:24,font:'400 14px/1.55 var(--font-body)',color:'var(--text-body)'}},children),
      footer?React.createElement('div',{style:{display:'flex',justifyContent:'flex-end',gap:12,padding:'16px 24px',background:'var(--gray-50)',borderTop:'1px solid var(--border)'}},footer):null));
}
