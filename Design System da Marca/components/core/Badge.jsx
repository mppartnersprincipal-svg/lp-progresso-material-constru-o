import React from 'react';
export function Badge({tone='accent', children, style}) {
  const t={
    accent:{bg:'var(--accent-soft)',color:'var(--accent-press)',border:'var(--orange-100)'},
    navy:{bg:'#E8EDF5',color:'var(--navy-700)',border:'#D4DDEA'},
    success:{bg:'#E7F3EC',color:'var(--success)',border:'#CDE6D8'},
    warning:{bg:'#FBF3DC',color:'#9A6E0B',border:'#F2E2B3'},
    danger:{bg:'#F9E7E3',color:'var(--danger)',border:'#F0CFC8'},
    neutral:{bg:'var(--gray-100)',color:'var(--gray-700)',border:'var(--gray-200)'},
  }[tone];
  return React.createElement('span',{style:{
    display:'inline-flex',alignItems:'center',gap:6,padding:'3px 10px',borderRadius:'var(--radius-pill)',
    background:t.bg,color:t.color,border:'1px solid '+t.border,
    font:'600 12px var(--font-body)',textTransform:'uppercase',letterSpacing:'.06em',...style}},children);
}
