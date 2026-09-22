import type { ReactNode } from "react";
import { OrvectLogo } from "@/components/OrvectProduct";
export function Brand(){return <div className="deck-brand"><OrvectLogo/></div>}
export function SectionLabel({children}:{children:ReactNode}){return <p className="section-label">{children}</p>}
export function Metric({value,label}:{value:string;label:string}){return <div className="metric"><strong>{value}</strong><span>{label}</span></div>}
export function SourceFooter({children}:{children:ReactNode}){return <footer className="source-footer">{children}</footer>}
export function DiagramContainer({children}:{children:ReactNode}){return <div className="diagram-container">{children}</div>}
const stages=["Context","Evidence","Control","Learning"];
export function SignalPath({index}:{index:number}){const active=Math.min(3,Math.floor(index/4));return <div className="signal-path" aria-label={`Signal path: ${stages[active]}`}><svg viewBox="0 0 1000 12" preserveAspectRatio="none" aria-hidden="true"><path d="M0 6H1000"/><path className="signal-progress" d={`M0 6H${(index+1)/16*1000}`}/></svg><div>{stages.map((s,i)=><span key={s} className={i===active?"active":""}>{s}</span>)}</div></div>}
export type SlideDefinition={id:string;section:string;title:string;body:ReactNode;footer?:ReactNode;cover?:boolean};
export function Slide({slide,index,print=false}:{slide:SlideDefinition;index:number;print?:boolean}){return <article className={`deck-slide ${slide.cover?"cover":""}`} aria-label={`${index+1}. ${slide.title}`} aria-roledescription="slide"><header className="slide-top"><Brand/><SectionLabel>{slide.section}</SectionLabel></header><div className="slide-content"><h1 tabIndex={-1} id={print?undefined:"slide-heading"}>{slide.title}</h1>{slide.body}</div>{slide.footer&&<SourceFooter>{slide.footer}</SourceFooter>}<SignalPath index={index}/></article>}
