// Standalone copy of the deck's only product dependency: the wordmark.
// The product app's version links to /diagnostics/new; this deck has no such route.
export function OrvectLogo({compact=false}:{compact?:boolean}){
 return <span className="inline-flex min-h-11 items-center gap-2" aria-label="ORVECT">
  <svg aria-hidden="true" className="h-[30px] w-9 shrink-0" viewBox="0 0 120 100" fill="currentColor"><path d="M8 76 29 24h19L27 76Z M41 76 70 4h19L60 76Z M74 76 95 24h19L93 76Z"/></svg>
  {!compact&&<strong className="text-[22px] font-bold tracking-[-.03em]">ORVECT</strong>}
 </span>
}
