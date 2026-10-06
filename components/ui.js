export const Head=({k,t,s})=><div className="head" data-a><small>{k}</small><h2>{t}</h2><p>{s}</p></div>;
export const Card=({icon:I,t,d})=><div className="card" data-a><I/><h3>{t}</h3><p>{d}</p></div>;
export const Cards=({items})=><div className="grid">{items.map(([I,t,d])=><Card key={t} icon={I} t={t} d={d}/>)}</div>;
