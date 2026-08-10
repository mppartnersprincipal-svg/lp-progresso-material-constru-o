import React from 'react';
export function Tooltip({label, children}) {
  const [show,setShow]=React.useState(false);
  return React.createElement('span',{onMouseEnter:()=>setShow(true),onMouseLeave:()=>setShow(false),style:{position:'relative',display:'inline-flex'}},
    children,
    show?React.createElement('span',{role:'tooltip',style:{position:'absolute',bottom:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)',whiteSpace:'nowrap',
      background:'var(--surface-darker)',color:'var(--text-on-dark)',font:'500 12px var(--font-body)',padding:'6px 10px',borderRadius:'var(--radius-sm)',boxShadow:'var(--shadow-md)',zIndex:100}},label):null);
}
