import React from 'react';
export function Input({invalid=false, style, ...rest}) {
  const [focus,setFocus]=React.useState(false);
  const base={fontFamily:'var(--font-body)',fontSize:14,color:'var(--text-heading)',background:'#fff',border:'1px solid var(--border-strong)',borderRadius:'var(--radius-sm)',padding:'10px 12px',outline:'none',width:'100%',boxSizing:'border-box',transition:'border-color var(--dur-fast), box-shadow var(--dur-fast)'};
const focusStyle={borderColor:'var(--accent)',boxShadow:'0 0 0 3px var(--focus-ring)'};
  return React.createElement('input',{onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),
    style:{...base,...(focus?focusStyle:{}),...(invalid?{borderColor:'var(--danger)'}:{}),...style},...rest});
}
