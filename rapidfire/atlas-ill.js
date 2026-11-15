/* Bacterial ID Atlas · illustrated high-yield boards (shared by all atlas pages).
   Every species key maps to one SVG per high-yield bullet, drawn from a small icon set. */
(function(){
'use strict';
const ILL_DEFS=`<defs>
<radialGradient id="ilPink" cx="35%" cy="30%" r="70%"><stop offset="0" stop-color="#ffd2e0"/><stop offset=".55" stop-color="#e2608c"/><stop offset="1" stop-color="#8a2a52"/></radialGradient>
<radialGradient id="ilPurp" cx="35%" cy="30%" r="70%"><stop offset="0" stop-color="#e2d4ff"/><stop offset=".55" stop-color="#7d4fe0"/><stop offset="1" stop-color="#341777"/></radialGradient>
<radialGradient id="ilGold" cx="35%" cy="30%" r="70%"><stop offset="0" stop-color="#fff0b8"/><stop offset=".55" stop-color="#e0ac2e"/><stop offset="1" stop-color="#7a5310"/></radialGradient>
<radialGradient id="ilSkin" cx="50%" cy="40%" r="70%"><stop offset="0" stop-color="#f3cdb0"/><stop offset="1" stop-color="#d9a17e"/></radialGradient>
<radialGradient id="ilBrain" cx="45%" cy="40%" r="65%"><stop offset="0" stop-color="#f6d6d9"/><stop offset="1" stop-color="#d9a3ab"/></radialGradient>
<radialGradient id="ilLung" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#f7c3cc"/><stop offset="1" stop-color="#c76d80"/></radialGradient>
<radialGradient id="ilRbc" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#ff7a86"/><stop offset=".6" stop-color="#d0283a"/><stop offset="1" stop-color="#8a1424"/></radialGradient>
<radialGradient id="ilHeart" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#f08a8a"/><stop offset="1" stop-color="#9c2433"/></radialGradient>
<linearGradient id="ilKid" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c25a5a"/><stop offset="1" stop-color="#7d2a33"/></linearGradient>
<linearGradient id="ilAdr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a0d18"/><stop offset="1" stop-color="#a3162a"/></linearGradient>
<linearGradient id="ilMem" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e2608c"/><stop offset="1" stop-color="#9c3460"/></linearGradient>
<linearGradient id="ilLiver" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a8483e"/><stop offset="1" stop-color="#6b241f"/></linearGradient>
<linearGradient id="ilBone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6efdc"/><stop offset="1" stop-color="#cbbd98"/></linearGradient>
<linearGradient id="ilGut" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e8a49c"/><stop offset="1" stop-color="#b8665e"/></linearGradient>
<filter id="ilGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3"/></filter>
<marker id="ilAr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#f2ead3"/></marker>
</defs>`;
const C={ink:'#f2ead3',dim:'#aebfda',mut:'#7891b5',red:'#ff8a96',pink:'#ffb0bc',blue:'#8fc0ff',gold:'#f2c94c',green:'#7fd6a0',bg:'#0d2247',line:'#26446f'};
const T=(x,y,s,o={})=>`<text x="${x}" y="${y}" font-family="IBM Plex Sans, Helvetica, Arial, sans-serif" font-size="${o.fs||10}" fill="${o.c||C.dim}" ${o.a?`text-anchor="${o.a}"`:'text-anchor="middle"'} ${o.w?`font-weight="${o.w}"`:''}>${s}</text>`;
const svg=(body,h=150)=>`<svg viewBox="0 0 320 ${h}" xmlns="http://www.w3.org/2000/svg">${ILL_DEFS}${body}</svg>`;
const G=(x,y,s,inner,r=0)=>`<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">${inner}</g>`;
/* frames: n equal panels across the card */
const frames=n=>{const w=(304-(n-1)*8)/n;return Array.from({length:n},(_,i)=>`<rect x="${8+i*(w+8)}" y="10" width="${w}" height="132" rx="10" fill="${C.bg}"/>`).join('');};
const cx=(n,i)=>{const w=(304-(n-1)*8)/n;return 8+i*(w+8)+w/2;};
const cap=(n,i,a,b,bc)=>T(cx(n,i),122,a,{fs:9.5,c:C.ink,w:600})+(b?T(cx(n,i),134,b,{fs:8.3,c:bc||C.dim}):'');
const arrow=(x1,y1,x2,y2)=>`<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${C.ink}" stroke-width="2" marker-end="url(#ilAr)"/>`;
const X=(x,y,r=12)=>`<path d="M${x-r} ${y-r} L${x+r} ${y+r} M${x+r} ${y-r} L${x-r} ${y+r}" stroke="#ff5a6a" stroke-width="3.5" stroke-linecap="round"/>`;
const badge=(x,y,t,c='#e2608c')=>`<circle cx="${x}" cy="${y}" r="11" fill="${c}"/>${T(x,y+4,t,{fs:10,c:'#fff',w:700})}`;

/* ---------- bacteria ---------- */
const dip=(x,y,r=4,rot=0)=>`<g transform="translate(${x} ${y}) rotate(${rot})"><ellipse cx="${-r*.85}" cy="0" rx="${r*.8}" ry="${r}" fill="url(#ilPink)"/><ellipse cx="${r*.85}" cy="0" rx="${r*.8}" ry="${r}" fill="url(#ilPink)"/></g>`;
const cocc=(x,y,r=4,f='url(#ilPurp)')=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"/>`;
const clus=(x,y,s=1,f='url(#ilPurp)')=>G(x,y,s,[[0,0],[7,-2],[-7,-1],[3,6],[-4,7],[10,5],[-1,-7],[6,-9],[-9,-8],[12,-5]].map(([a,b])=>cocc(a,b,4,f)).join(''));
const chain=(x,y,s=1,n=6,f='url(#ilPurp)')=>G(x,y,s,Array.from({length:n},(_,i)=>cocc(i*8.4-(n-1)*4.2,Math.sin(i*.9)*3,4,f)).join(''));
const rod=(x,y,s=1,rot=0,f='url(#ilPink)',fl=0)=>G(x,y,s,`${Array.from({length:fl},(_,i)=>`<path d="M${-10+i*7} ${i%2?5:-5} q${i%2?3:-3} ${i%2?8:-8} 0 ${i%2?14:-14} t0 ${i%2?14:-14}" stroke="#f3c7d6" stroke-width="1.2" fill="none"/>`).join('')}<rect x="-12" y="-5" width="24" height="10" rx="5" fill="${f}"/>`,rot);

/* ---------- people & anatomy ---------- */
const person=(x,y,s=1,c='#4f7fc4')=>G(x,y,s,`<circle cx="0" cy="-14" r="7" fill="url(#ilSkin)"/><path d="M-12 12 q0 -18 12 -18 q12 0 12 18z" fill="${c}"/>`);
const baby=(x,y,s=1)=>G(x,y,s,`<ellipse cx="0" cy="8" rx="13" ry="11" fill="#9cc4ea"/><circle cx="0" cy="-8" r="10" fill="url(#ilSkin)"/><path d="M-5 -9 q2 2 4 0 M2 -9 q2 2 4 0" stroke="#3a2418" stroke-width="1.2" fill="none"/><path d="M-1 -19 q4 -4 6 0" stroke="#8a5a33" stroke-width="1.5" fill="none"/>`);
const brain=(x,y,s=1,inf=false)=>G(x,y,s,`${inf?`<ellipse cx="0" cy="0" rx="34" ry="28" fill="#d23a4a" opacity=".5" filter="url(#ilGlow)"/><ellipse cx="0" cy="0" rx="30" ry="25" fill="none" stroke="#e8455a" stroke-width="3"/>`:''}<path d="M-26 2 c-2 -18 12 -26 26 -24 c16 -2 28 8 26 24 c0 14 -12 22 -26 20 c-16 2 -28 -6 -26 -20z" fill="url(#ilBrain)"/><g fill="none" stroke="#b97c86" stroke-width="1.6" stroke-linecap="round"><path d="M-20 -6 q5 -5 10 0 t9 0"/><path d="M3 -12 q5 -5 10 0 t8 1"/><path d="M-16 8 q5 -5 10 0 t9 0 t8 0"/><path d="M0 -22 v42" stroke="#a96f79"/></g>`);
const lungs=(x,y,s=1,o={})=>G(x,y,s,`<path d="M-3 -26 v14 M3 -26 v14 M-3 -12 q-6 4 -10 10 M3 -12 q6 4 10 10" stroke="#e8d3d8" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M-6 -12 c-14 -2 -24 10 -24 26 c0 10 4 16 12 16 c8 0 14 -6 14 -14z" fill="url(#ilLung)"/><path d="M6 -12 c14 -2 24 10 24 26 c0 10 -4 16 -12 16 c-8 0 -14 -6 -14 -14z" fill="url(#ilLung)"/>
${o.lobe?`<path d="M${o.lobe==='R'?-28:6} ${o.upper?-6:8} c4 -8 14 -10 22 -6 l0 ${o.upper?14:20} c-8 2 -18 0 -22 -6z" fill="#f2ead3" opacity=".75"/>`:''}
${o.cav?`<circle cx="-14" cy="2" r="6" fill="#3a1a22" stroke="#f2ead3" stroke-width="1.5"/>`:''}${o.mucus?`<g fill="#d8e86a" opacity=".85"><circle cx="-16" cy="6" r="4"/><circle cx="16" cy="10" r="5"/><circle cx="-10" cy="16" r="3"/><circle cx="12" cy="0" r="3"/></g>`:''}`);
const heart=(x,y,s=1,veg=0)=>G(x,y,s,`<path d="M0 22 C-26 6 -28 -14 -14 -20 C-6 -24 0 -16 0 -12 C0 -16 6 -24 14 -20 C28 -14 26 6 0 22z" fill="url(#ilHeart)"/><path d="M-4 -18 v-8 M4 -18 q4 -10 10 -8" stroke="#c8475a" stroke-width="4" fill="none" stroke-linecap="round"/>${veg?`<g fill="#f3e2b0">${[[veg>1?-8:8,-2],[veg>1?-4:12,1],[veg>1?-10:6,3]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="3"/>`).join('')}</g>`:''}`);
const kidney=(x,y,s=1,o={})=>G(x,y,s,`<path d="M-2 -20 c-14 -2 -20 10 -18 22 c2 14 12 20 22 16 c6 -2 4 -10 0 -14 c-4 -4 -4 -10 2 -14 c4 -4 4 -10 -6 -10z" fill="url(#ilKid)"/><path d="M4 2 q8 4 10 16" stroke="#e8c27a" stroke-width="2.5" fill="none"/>${o.stone?`<path d="M-12 -4 l6 -6 l4 4 l6 -4 l-2 8 l4 6 l-8 2 l-6 6 l-2 -8z" fill="#e8d6a0" stroke="#a89060" stroke-width="1"/>`:''}${o.glow?`<path d="M-2 -20 c-14 -2 -20 10 -18 22 c2 14 12 20 22 16" stroke="#ff5a6a" stroke-width="2" fill="none" opacity=".8"/>`:''}`);
const bladder=(x,y,s=1,o={})=>G(x,y,s,`<path d="M-16 -6 c0 -14 32 -14 32 0 c0 12 -8 20 -16 20 c-8 0 -16 -8 -16 -20z" fill="${o.inf?'#e86a72':'#d48a8a'}"/>${o.inf?`<path d="M-16 -6 c0 -14 32 -14 32 0 c0 12 -8 20 -16 20 c-8 0 -16 -8 -16 -20z" fill="#ff3a4a" opacity=".35" filter="url(#ilGlow)"/>`:''}<path d="M0 14 v8" stroke="#e8c27a" stroke-width="3"/>${o.foley?`<path d="M0 -2 v34 q0 8 10 10 h12" stroke="#e9c27e" stroke-width="3" fill="none"/><circle cx="0" cy="-2" r="4" fill="#f3dca8"/>`:''}`);
const liver=(x,y,s=1,abs=false)=>G(x,y,s,`<path d="M-30 -8 c10 -14 50 -14 58 -6 c4 6 -6 14 -18 20 c-14 6 -34 6 -40 -4 z" fill="url(#ilLiver)"/>${abs?`<circle cx="-8" cy="-2" r="7" fill="#f2e08a" stroke="#fff6c8" stroke-width="1.5"/>`:''}`);
const gallb=(x,y,s=1)=>G(x,y,s,`<path d="M-6 -12 q-8 10 0 20 q10 6 12 -4 q2 -10 -12 -16z" fill="#6bb36b"/>`);
const bone=(x,y,s=1,r=0,les=false)=>G(x,y,s,`<rect x="-20" y="-4" width="40" height="8" fill="url(#ilBone)"/><circle cx="-21" cy="-5" r="6" fill="url(#ilBone)"/><circle cx="-21" cy="5" r="6" fill="url(#ilBone)"/><circle cx="21" cy="-5" r="6" fill="url(#ilBone)"/><circle cx="21" cy="5" r="6" fill="url(#ilBone)"/>${les?`<ellipse cx="4" cy="0" rx="9" ry="6" fill="#ff5a6a" opacity=".4" filter="url(#ilGlow)"/><ellipse cx="4" cy="0" rx="6" ry="3.4" fill="#5a1a22"/><ellipse cx="5" cy="0" rx="3" ry="1.8" fill="#f2e08a"/><path d="M-6 -6 q10 -4 20 0 M-6 6 q10 4 20 0" stroke="#ff8a96" stroke-width="1.2" fill="none"/>`:''}`,r);
const knee=(x,y,s=1)=>G(x,y,s,`<ellipse cx="0" cy="0" rx="16" ry="12" fill="#ff5a6a" opacity=".35" filter="url(#ilGlow)"/><rect x="-5" y="-30" width="10" height="26" rx="3" fill="url(#ilBone)"/><rect x="-5" y="4" width="10" height="26" rx="3" fill="url(#ilBone)"/><ellipse cx="0" cy="0" rx="12" ry="8" fill="none" stroke="#ff8a96" stroke-width="2.5"/>`);
const ear=(x,y,s=1,red=false)=>G(x,y,s,`<path d="M4 -18 c-16 -2 -20 14 -12 22 c4 4 2 10 6 14 c6 4 12 -2 10 -8 c-2 -6 6 -10 6 -18 c0 -6 -4 -10 -10 -10z" fill="url(#ilSkin)"/><path d="M2 -8 c-6 0 -6 8 -2 10" stroke="#b07a5a" stroke-width="2" fill="none"/>${red?`<circle cx="2" cy="0" r="5" fill="#ff5a6a" opacity=".7"/>`:''}`);
const eye=(x,y,s=1,red=false)=>G(x,y,s,`<path d="M-20 0 q20 -16 40 0 q-20 16 -40 0z" fill="${red?'#f4b0b0':'#f6f2e8'}"/><circle cx="0" cy="0" r="7" fill="#5a7fb0"/><circle cx="0" cy="0" r="3" fill="#111"/>${red?`<path d="M-14 4 q4 -2 6 2 M10 -4 q4 2 6 -2" stroke="#d23a4a" stroke-width="1"/><path d="M-6 8 q6 4 12 0" stroke="#f2e08a" stroke-width="2.5" fill="none"/>`:''}`);
const face=(x,y,s=1,sinus=false)=>G(x,y,s,`<ellipse cx="0" cy="0" rx="20" ry="25" fill="url(#ilSkin)"/><path d="M0 -6 l-4 12 h8z" fill="#d49a7a"/><circle cx="-8" cy="-8" r="2" fill="#3a2418"/><circle cx="8" cy="-8" r="2" fill="#3a2418"/>${sinus?`<rect x="-15" y="-2" width="9" height="8" rx="3" fill="#ff5a6a" opacity=".7"/><rect x="6" y="-2" width="9" height="8" rx="3" fill="#ff5a6a" opacity=".7"/>`:''}`);
const throat=(x,y,s=1,ex=true)=>G(x,y,s,`<ellipse cx="0" cy="0" rx="24" ry="20" fill="#5a1222"/><path d="M-24 0 q24 -26 48 0" fill="#f3cdb0" opacity=".9"/><ellipse cx="-13" cy="4" rx="7" ry="9" fill="#e0505e"/><ellipse cx="13" cy="4" rx="7" ry="9" fill="#e0505e"/><path d="M0 -8 q-3 8 0 12 q3 -4 0 -12z" fill="#e88a90"/>${ex?`<g fill="#f6f0d8"><circle cx="-14" cy="2" r="2"/><circle cx="-11" cy="7" r="1.6"/><circle cx="13" cy="3" r="2"/><circle cx="15" cy="8" r="1.5"/></g>`:''}`);
const tongue=(x,y,s=1)=>G(x,y,s,`<path d="M-14 -10 q-2 26 14 28 q16 -2 14 -28z" fill="#e0405a"/><g fill="#ffd0d8">${[[-6,-4],[4,-6],[0,2],[-7,6],[6,4],[-2,10],[5,11]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="1.6"/>`).join('')}</g>`);
const skin=(x,y,s=1,lesion='')=>G(x,y,s,`<rect x="-30" y="-14" width="60" height="28" rx="4" fill="#d9a17e"/><rect x="-30" y="-14" width="60" height="7" rx="3" fill="#f3cdb0"/>${lesion}`);
const gut=(x,y,s=1,o={})=>G(x,y,s,`<path d="M-26 -10 q10 -12 20 0 t20 0 t12 6 q-4 12 -16 10 t-20 0 t-16 8" stroke="url(#ilGut)" stroke-width="9" fill="none" stroke-linecap="round"/>${o.blood?`<g fill="#d0263c"><path d="M-6 18 q4 6 0 10 q-4 -4 0 -10z"/><path d="M8 20 q4 6 0 10 q-4 -4 0 -10z"/></g>`:''}`);
const colon=(x,y,s=1,polyp=false)=>G(x,y,s,`<path d="M18 22 V-14 H-18 V18 q4 8 12 4" stroke="url(#ilGut)" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>${polyp?`<circle cx="0" cy="-20" r="4.5" fill="#8a1d2e"/><path d="M0 -16 v2" stroke="#8a1d2e" stroke-width="2"/>`:''}`);
const vessel=(x,y,s=1,inner='')=>G(x,y,s,`<rect x="-28" y="-10" width="56" height="20" fill="#7d1c2c" opacity=".6"/><path d="M-28 -10 h56 M-28 10 h56" stroke="#c94a5a" stroke-width="2"/>${inner}`);
const uterus=(x,y,s=1,inf=false)=>G(x,y,s,`<path d="M-8 -6 q-14 -10 -24 -4 M8 -6 q14 -10 24 -4" stroke="${inf?'#ff6a7a':'#d48a8a'}" stroke-width="3" fill="none"/><circle cx="-33" cy="-8" r="4" fill="#e8b0a0"/><circle cx="33" cy="-8" r="4" fill="#e8b0a0"/><path d="M-10 -8 q10 -6 20 0 q0 18 -6 24 h-8 q-6 -6 -6 -24z" fill="${inf?'#e86a72':'#d48a8a'}"/>${inf?`<ellipse cx="0" cy="0" rx="36" ry="16" fill="#ff3a4a" opacity=".25" filter="url(#ilGlow)"/>`:''}`);
const spleen=(x,y,s=1)=>G(x,y,s,`<path d="M-14 -10 c10 -10 28 -4 26 10 c-2 12 -18 16 -26 8 c4 -6 4 -12 0 -18z" fill="#8a3a5a"/>`);
const sickle=(x,y,s=1,r=0)=>G(x,y,s,`<path d="M-22 6 C-14 -14 14 -14 22 6 C12 -4 -12 -4 -22 6z" fill="url(#ilRbc)" stroke="#8a1424" stroke-width="1"/><path d="M-14 -2 C-6 -9 6 -9 14 -2" stroke="#ff9aa6" stroke-width="1.6" fill="none" opacity=".8"/>`,r);
const rbc=(x,y,s=1)=>G(x,y,s,`<circle cx="0" cy="0" r="13" fill="url(#ilRbc)" stroke="#8a1424" stroke-width="1"/><circle cx="0" cy="0" r="5.5" fill="#f09aa4" opacity=".75"/><path d="M-8 -6 q4 -4 9 -3" stroke="#ffc0c8" stroke-width="1.5" fill="none"/>`);

/* ---------- objects ---------- */
const drop=(x,y,s=1,c='#d0263c')=>G(x,y,s,`<path d="M0 -12 q10 14 0 20 q-10 -6 0 -20z" fill="${c}"/>`);
const thermo=(x,y,s=1)=>G(x,y,s,`<rect x="-3" y="-20" width="6" height="28" rx="3" fill="#e8f0fa"/><circle cx="0" cy="12" r="6" fill="#e8453a"/><rect x="-1.5" y="-8" width="3" height="18" fill="#e8453a"/>`);
const clock=(x,y,s=1,t='')=>G(x,y,s,`<circle cx="0" cy="0" r="13" fill="#f6f2e8" stroke="#9fb6d6" stroke-width="2"/><path d="M0 0 v-8 M0 0 l6 4" stroke="#1b2a44" stroke-width="2" stroke-linecap="round"/>`)+(t?T(x,y+26*s,t,{fs:9,c:C.ink,w:600}):'');
const calendar=(x,y,s=1,big='',small='')=>G(x,y,s,`<rect x="-18" y="-18" width="36" height="36" rx="4" fill="#f6f2e8"/><rect x="-18" y="-18" width="36" height="10" rx="3" fill="#c0303d"/>${T(0,8,big,{fs:15,c:'#1b2a44',w:700})}${T(0,15,small,{fs:5.5,c:'#55657f'})}`);
const hospital=(x,y,s=1)=>G(x,y,s,`<rect x="-20" y="-16" width="40" height="32" fill="#dfe6f2"/><rect x="-6" y="-12" width="12" height="12" fill="#e8453a"/><rect x="-2" y="-14" width="4" height="16" fill="#fff"/><rect x="-8" y="-8" width="16" height="4" fill="#fff"/>${[-14,-2,10].map(a=>`<rect x="${a}" y="4" width="5" height="5" fill="#8fa3c2"/>`).join('')}`);
const house=(x,y,s=1)=>G(x,y,s,`<path d="M-18 0 L0 -16 L18 0z" fill="#c9844a"/><rect x="-14" y="0" width="28" height="18" fill="#dfe6f2"/><rect x="-4" y="6" width="8" height="12" fill="#8a5a33"/>`);
const pill=(x,y,s=1,c1='#d8572a',c2='#a8341a')=>G(x,y,s,`<rect x="-14" y="-6" width="28" height="12" rx="6" fill="${c1}"/><path d="M0 -6 h8 a6 6 0 0 1 0 12 h-8z" fill="${c2}"/>`);
const tablet=(x,y,s=1,c='#f6f2e8')=>G(x,y,s,`<ellipse cx="0" cy="0" rx="13" ry="8" fill="${c}"/><path d="M-9 0 h18" stroke="#c9c2b2" stroke-width="1.2"/>`);
const syringe=(x,y,s=1,r=-20,c='#f2c94c')=>G(x,y,s,`<rect x="-16" y="-5" width="26" height="10" rx="2" fill="#e8f3ff" fill-opacity=".85" stroke="#9fb6d6"/><rect x="-12" y="-3.5" width="13" height="7" fill="${c}" opacity=".8"/><path d="M10 0 h11" stroke="#c9d2de" stroke-width="1.6"/><rect x="-21" y="-3" width="5" height="6" fill="#9fb6d6"/>`,r);
const vial=(x,y,s=1,cap='#6bb36b',liq='#8fc0ff')=>G(x,y,s,`<rect x="-9" y="-12" width="18" height="26" rx="3" fill="#dfe9f6" fill-opacity=".9"/><rect x="-10" y="-17" width="20" height="6" rx="2" fill="${cap}"/><rect x="-9" y="0" width="18" height="10" fill="${liq}" opacity=".7"/>`);
const ivbag=(x,y,s=1,c='#f2c94c')=>G(x,y,s,`<path d="M-12 -18 h24 v26 q-12 8 -24 0z" fill="#e8f3ff" fill-opacity=".85" stroke="#9fb6d6"/><path d="M-12 -2 h24 v10 q-12 8 -24 0z" fill="${c}" opacity=".6"/><path d="M0 12 v14" stroke="#c9d2de" stroke-width="2"/>`);
const tube=(x,y,s=1,c='#f2c94c')=>G(x,y,s,`<path d="M-6 -20 v32 a6 6 0 0 0 12 0 v-32" fill="#e8f3ff" fill-opacity=".35" stroke="#c9d2de" stroke-width="1.5"/><path d="M-5 -2 v14 a5 5 0 0 0 10 0 v-14z" fill="${c}"/>`);
const plate=(x,y,s=1,base='#b8264a',col='#f2c94c',n=9)=>G(x,y,s,`<ellipse cx="0" cy="0" rx="24" ry="14" fill="${base}" stroke="#c9d2de" stroke-width="2"/>${Array.from({length:n},(_,i)=>`<circle cx="${Math.cos(i*2.4)*(6+i*1.4)}" cy="${Math.sin(i*2.4)*(3+i*.7)}" r="2.4" fill="${col}"/>`).join('')}`);
const scissors=(x,y,s=1,r=-30)=>G(x,y,s,`<circle cx="-6" cy="10" r="5" fill="none" stroke="#e8edf5" stroke-width="2.4"/><circle cx="6" cy="10" r="5" fill="none" stroke="#e8edf5" stroke-width="2.4"/><path d="M-4 6 L8 -14 M4 6 L-8 -14" stroke="#e8edf5" stroke-width="2.4" stroke-linecap="round"/>`,r);
const antibody=(x,y,s=1,r=0,c='#8fc0ff')=>G(x,y,s,`<path d="M-12 -14 L0 0 L12 -14 M0 0 V16" stroke="${c}" stroke-width="5" stroke-linecap="round" fill="none"/>`,r);
const membrane=(x,y,w=120)=>`<rect x="${x}" y="${y}" width="${w}" height="22" fill="#10284f"/><g fill="url(#ilMem)">${Array.from({length:Math.floor(w/11)},(_,i)=>`<circle cx="${x+5+i*11}" cy="${y+2}" r="4"/><circle cx="${x+5+i*11}" cy="${y+20}" r="4"/>`).join('')}</g>`;
const flame=(x,y,s=1)=>G(x,y,s,`<path d="M0 14 q-14 -6 -8 -20 q2 8 6 6 q-4 -12 6 -18 q0 10 8 14 q6 12 -12 18z" fill="#ff8a3a"/><path d="M0 12 q-6 -4 -2 -10 q2 4 4 2 q4 6 -2 8z" fill="#ffd36a"/>`);
const water=(x,y,s=1)=>G(x,y,s,`<path d="M-10 -14 h20 l-3 28 h-14z" fill="#8fc0ff" fill-opacity=".45" stroke="#c9d2de"/><path d="M-9 -4 h18" stroke="#cfe6ff" stroke-width="1.5"/>`);
const plane=(x,y,s=1)=>G(x,y,s,`<path d="M-20 2 L20 -2 L22 2 L-18 6z M-2 0 L-10 -14 h5 L8 0z M-2 4 L-8 16 h5 L6 4z M-18 2 L-22 -6 h4 l4 8z" fill="#dfe6f2"/>`);
const burger=(x,y,s=1)=>G(x,y,s,`<path d="M-16 -2 q16 -20 32 0z" fill="#d4893a"/><rect x="-17" y="-2" width="34" height="4" rx="2" fill="#5aa63a"/><rect x="-16" y="2" width="32" height="6" rx="2" fill="#4a2a1c"/><rect x="-16" y="8" width="32" height="5" rx="2" fill="#d4893a"/>`);
const egg=(x,y,s=1)=>G(x,y,s,`<ellipse cx="0" cy="0" rx="9" ry="12" fill="#f3e6cc"/>`);
const drum=(x,y,s=1)=>G(x,y,s,`<ellipse cx="-4" cy="-4" rx="12" ry="9" fill="#c9843a" transform="rotate(-30)"/><path d="M4 4 l10 10" stroke="#f6efdc" stroke-width="4" stroke-linecap="round"/><circle cx="15" cy="15" r="3" fill="#f6efdc"/>`);
const turtle=(x,y,s=1)=>G(x,y,s,`<ellipse cx="0" cy="2" rx="16" ry="10" fill="#5f7f35"/><path d="M-8 2 h16 M0 -6 v16 M-6 -4 l12 12 M6 -4 l-12 12" stroke="#3c5222" stroke-width="1.2"/><circle cx="18" cy="0" r="4" fill="#8a9a52"/><g fill="#8a9a52"><ellipse cx="-10" cy="11" rx="3" ry="2"/><ellipse cx="10" cy="11" rx="3" ry="2"/></g>`);
const fly=(x,y,s=1)=>G(x,y,s,`<ellipse cx="0" cy="2" rx="5" ry="7" fill="#2a2a2a"/><ellipse cx="-6" cy="-3" rx="6" ry="3" fill="#cfe6ff" opacity=".8"/><ellipse cx="6" cy="-3" rx="6" ry="3" fill="#cfe6ff" opacity=".8"/>`);
const hand=(x,y,s=1)=>G(x,y,s,`<path d="M-8 14 v-14 q0 -4 3 -4 v-8 q0 -3 3 -3 q3 0 3 3 v-2 q0 -3 3 -3 q3 0 3 3 v4 q0 -3 3 -3 q3 0 3 3 v12 q0 10 -10 10z" fill="url(#ilSkin)"/>`);
const sneaker=(x,y,s=1)=>G(x,y,s,`<path d="M-20 4 q2 -10 12 -10 l6 -6 q8 2 10 8 q10 2 12 8 v4 h-40z" fill="#e8edf5"/><rect x="-21" y="8" width="42" height="4" rx="2" fill="#8fa3c2"/><path d="M4 -16 v22" stroke="#9aa6b4" stroke-width="2.5"/><path d="M1 -18 h6" stroke="#9aa6b4" stroke-width="3"/>`);
const hottub=(x,y,s=1)=>G(x,y,s,`<rect x="-22" y="-4" width="44" height="16" rx="4" fill="#5f7fb0"/><rect x="-20" y="-6" width="40" height="6" rx="3" fill="#8fc0ff"/><path d="M-10 -10 q2 -6 0 -10 M0 -10 q2 -6 0 -10 M10 -10 q2 -6 0 -10" stroke="#dfe6f2" stroke-width="1.5" fill="none"/>`);
const bottle=(x,y,s=1)=>G(x,y,s,`<path d="M-3 -20 h6 v8 q6 2 6 8 v22 h-18 v-22 q0 -6 6 -8z" fill="#5a8a3a" opacity=".9"/><rect x="-7" y="0" width="14" height="8" fill="#f2ead3"/>`);
const cube=(x,y,s=1)=>G(x,y,s,`<path d="M-8 -4 l8 -5 l8 5 v10 l-8 5 l-8 -5z" fill="#f6f2e8" stroke="#c9c2b2"/><path d="M-8 -4 l8 5 l8 -5 M0 1 v10" stroke="#c9c2b2" fill="none"/>`);
const jar=(x,y,s=1)=>G(x,y,s,`<rect x="-10" y="-10" width="20" height="22" rx="4" fill="#7a0a1e"/><rect x="-11" y="-15" width="22" height="6" rx="2" fill="#c8202e"/>`);
const shield=(x,y,s=1)=>G(x,y,s,`<path d="M0 -16 l14 5 v8 q0 12 -14 18 q-14 -6 -14 -18 v-8z" fill="#3a6fb0" opacity=".85"/>`);
const ribo=(x,y,s=1,stop=false)=>G(x,y,s,`<ellipse cx="0" cy="-6" rx="16" ry="10" fill="#7fd6c2"/><ellipse cx="0" cy="8" rx="12" ry="7" fill="#4fa894"/><path d="M-30 14 h60" stroke="#f2c94c" stroke-width="2"/>${stop?X(0,0,10):''}`);
const bars=(x,y,vals,cols)=>vals.map((v,i)=>`<rect x="${x+i*16}" y="${y-v}" width="11" height="${v}" rx="2" fill="${cols[i]}"/>`).join('');

window.ATLAS_ILL_LIB={svg,frames,cx,cap,T,G,C,arrow,X,badge,dip,cocc,clus,chain,rod,person,baby,brain,lungs,heart,kidney,bladder,liver,gallb,bone,knee,ear,eye,face,throat,tongue,skin,gut,colon,vessel,uterus,spleen,sickle,drop,thermo,clock,calendar,hospital,house,pill,tablet,syringe,vial,ivbag,tube,plate,scissors,antibody,membrane,flame,water,plane,burger,egg,drum,turtle,fly,hand,sneaker,hottub,bottle,cube,jar,shield,ribo,bars,ILL_DEFS};

/* ================= compositions ================= */
const P=(n,i,inner)=>inner; // readability helper
const ILL={};

/* ---------- Gram-positive cocci ---------- */
ILL.aureus=[
svg(frames(1)+skin(160,58,2.2,`<ellipse cx="0" cy="4" rx="12" ry="7" fill="#f2e08a"/><ellipse cx="0" cy="4" rx="15" ry="9" fill="none" stroke="#ff5a6a" stroke-width="2"/>`)+clus(160,66,.7,'url(#ilPurp)')+`<path d="M138 20 q22 -6 44 0" stroke="#ff8a96" stroke-width="2" fill="none"/>`+T(160,122,'abscess · furuncle · carbuncle',{fs:10,c:C.ink,w:600})+T(160,134,'cellulitis · impetigo',{fs:8.5})),
svg(frames(3)+thermo(cx(3,0)-16,60,1.2)+skin(cx(3,0)+14,62,.55,`<g fill="#e8455a">${[[-14,-4],[-4,2],[8,-6],[16,4],[0,8]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="2.4"/>`).join('')}</g>`)+cap(3,0,'TSST-1','toxic shock',C.pink)
 +baby(cx(3,1),56,1.5)+`<g fill="#f6d0c0" stroke="#c88a7a" stroke-width=".8"><path d="M${cx(3,1)-18} 66 q6 -4 10 2 q-6 4 -10 -2z"/><path d="M${cx(3,1)+8} 70 q6 -4 10 2 q-6 4 -10 -2z"/></g>`+cap(3,1,'scalded skin','exfoliative toxin',C.pink)
 +`<ellipse cx="${cx(3,2)-6}" cy="70" rx="22" ry="8" fill="#dfe6f2"/><path d="M${cx(3,2)-24} 66 q18 -16 36 0z" fill="#f2e6a8"/>`+clock(cx(3,2)+20,46,.9)+cap(3,2,'food poisoning','preformed toxin · 1–6 h',C.pink)),
svg(frames(4)+heart(cx(4,0),58,1.1,2)+syringe(cx(4,0)+14,86,.7,-30,'#c8202e')+cap(4,0,'endocarditis','tricuspid · IVDU',C.pink)
 +bone(cx(4,1),60,1.1,-20,true)+cap(4,1,'osteomyelitis')
 +knee(cx(4,2),62,1)+cap(4,2,'septic','arthritis')
 +lungs(cx(4,3),60,1.1,{cav:true})+cap(4,3,'pneumonia','after influenza',C.pink)),
svg(frames(2)+clus(cx(2,0)-20,64,1.1)+antibody(cx(2,0)+18,60,1.1,180)+`<path d="M${cx(2,0)-6} 62 h14" stroke="#f2c94c" stroke-width="3"/>`+cap(2,0,'protein A','grabs IgG by Fc (upside down)')
 +`<g transform="translate(${cx(2,1)} 58)"><rect x="-22" y="-14" width="26" height="28" rx="5" fill="#7d4fe0"/><path d="M4 -6 h10 v12 h-10" fill="#e2608c"/>${T(-9,4,'PBP2a',{fs:8,c:'#fff',w:600})}<path d="M18 -18 l14 -6 l4 8 l-14 6z" fill="#f2c94c"/>${X(26,-12,9)}</g>`+cap(2,1,'MRSA · mecA','β-lactams cannot bind PBP2a',C.pink))
];
ILL.epid=[
svg(frames(2)+skin(cx(2,0),60,1.6,clus(-6,-14,.45)+clus(12,-16,.4))+cap(2,0,'normal skin flora')
 +`<g transform="translate(${cx(2,1)} 58)"><rect x="-12" y="-20" width="24" height="38" rx="5" fill="#e8f3ff" fill-opacity=".85"/><rect x="-12" y="-4" width="24" height="22" rx="4" fill="#c8202e" opacity=".75"/><rect x="-8" y="-26" width="16" height="7" rx="2" fill="#5f7fb0"/>${clus(0,6,.5)}</g>`+cap(2,1,'blood culture','most common contaminant',C.pink)),
svg(frames(4)+`<g transform="translate(${cx(4,0)} 60)"><path d="M-20 10 q20 -30 30 -24" stroke="#e9c27e" stroke-width="4" fill="none"/><rect x="6" y="-20" width="14" height="10" rx="2" fill="#dfe6f2"/></g>`+cap(4,0,'IV catheter')
 +`<g transform="translate(${cx(4,1)} 58)"><path d="M2 -20 l-4 40" stroke="#cfd6df" stroke-width="7" stroke-linecap="round"/><circle cx="-6" cy="-22" r="8" fill="#cfd6df"/></g>`+cap(4,1,'prosthetic joint')
 +`<g transform="translate(${cx(4,2)} 60)"><circle cx="0" cy="0" r="16" fill="none" stroke="#cfd6df" stroke-width="4"/><path d="M-14 0 h28 M0 -14 v28" stroke="#9aa6b4" stroke-width="3"/></g>`+cap(4,2,'prosthetic valve')
 +brain(cx(4,3),56,.65)+`<path d="M${cx(4,3)} 62 q4 20 -8 40" stroke="#e9c27e" stroke-width="3" fill="none"/>`+cap(4,3,'CSF shunt')),
svg(frames(1)+`<path d="M60 92 q100 -20 200 0 v14 h-200z" fill="#c9ec6a" opacity=".35"/>`+clus(110,88,.8)+clus(160,84,.8)+clus(210,88,.8)+`<path d="M58 80 q102 -26 204 0" stroke="#c9ec6a" stroke-width="3" fill="none"/>`
 +pill(110,38,.8,'#6b8fd8','#3a5fb0')+pill(210,34,.8,'#6b8fd8','#3a5fb0')+`<path d="M110 46 q4 14 -10 10 M210 42 q4 14 12 8" stroke="#f2ead3" stroke-width="1.5" fill="none" stroke-dasharray="3 2"/>`+shield(160,42,1)
 +T(160,124,'biofilm (polysaccharide slime)',{fs:10,c:C.ink,w:600})+T(160,136,'antibiotics and host defenses bounce off',{fs:8.5})),
svg(frames(2)+`<g transform="translate(${cx(2,0)} 60)"><rect x="-20" y="-10" width="40" height="20" rx="10" fill="#6b8fd8"/>${T(0,4,'β-lactam',{fs:8.5,c:'#fff',w:600})}</g>`+X(cx(2,0),60,22)+cap(2,0,'methicillin resistant','(usually)',C.pink)
 +vial(cx(2,1),58,1.6,'#e8edf5','#f2c94c')+cap(2,1,'vancomycin'))
];
ILL.sapro=[
svg(frames(1)+person(90,72,1.6,'#c26a9a')+bladder(160,66,1.4,{inf:true})+G(220,62,1,`<circle cx="-6" cy="0" r="9" fill="none" stroke="#e0ac2e" stroke-width="3"/><circle cx="6" cy="0" r="9" fill="none" stroke="#e0ac2e" stroke-width="3"/>`)+badge(262,38,'#2')
 +T(160,124,'cystitis in young sexually active women',{fs:10,c:C.ink,w:600})+T(160,136,'#2 cause of uncomplicated UTI, after E. coli',{fs:8.5})),
svg(frames(2)+house(cx(2,0),58,1.4)+`<circle cx="${cx(2,0)}" cy="58" r="30" fill="none" stroke="#7fd6a0" stroke-width="2.5"/>`+cap(2,0,'community','acquired',C.green)
 +hospital(cx(2,1),58,1.2)+X(cx(2,1),58,22)+cap(2,1,'not typically','hospital-acquired')),
svg(frames(2)+tube(cx(2,0)-16,60,1.2,'#ff3c96')+tube(cx(2,0)+16,60,1.2,'#f0b46a')+cap(2,0,'urease +','urea → NH₃ (pink)',C.pink)
 +`<g transform="translate(${cx(2,1)} 58)"><circle cx="-14" cy="0" r="12" fill="#8fc0ff" opacity=".35"/>${T(-14,4,'urea',{fs:8.5,c:C.ink})}${arrow(0,0,12,0)}<circle cx="26" cy="0" r="12" fill="#ff3c96" opacity=".4"/>${T(26,4,'NH₃',{fs:9,c:C.ink,w:600})}</g>`+cap(2,1,'alkaline urine'))
];
ILL.pyo=[
svg(frames(3)+throat(cx(3,0),58,1.2)+cap(3,0,'pharyngitis','exudate · fever')
 +skin(cx(3,1),58,1.1,`<g fill="#e8b03a">${[[-10,-4],[4,-2],[14,4],[-2,6]].map(([a,b])=>`<ellipse cx="${a}" cy="${b}" rx="5" ry="3.5"/>`).join('')}</g>`)+cap(3,1,'impetigo','honey-crusted',C.gold)
 +`<g transform="translate(${cx(3,2)} 58)"><path d="M-8 -30 q-4 30 0 56 h16 q4 -26 0 -56z" fill="url(#ilSkin)"/><path d="M-6 -6 q8 -10 14 2 q-2 14 -12 12z" fill="#e8455a" opacity=".8"/></g>`+cap(3,2,'cellulitis · erysipelas','necrotizing fasciitis',C.pink)),
svg(frames(2)+tongue(cx(2,0),56,1.6)+cap(2,0,'strawberry tongue','scarlet fever',C.pink)
 +skin(cx(2,1),58,1.4,`<g fill="#e8455a" opacity=".85">${Array.from({length:40},(_,i)=>`<circle cx="${-26+(i*13)%52}" cy="${-10+(i*7)%22}" r="1.3"/>`).join('')}</g>`)+cap(2,1,'sandpaper rash','pyrogenic exotoxins')),
svg(frames(1)+throat(70,60,1.1)+arrow(104,60,132,60)+heart(170,58,1.3)+G(170,58,1,`<path d="M-4 -2 l6 6 l12 -14" stroke="#7fd6a0" stroke-width="0" fill="none"/>`)+knee(240,60,.8)+`<g fill="#f2e6a8">${[[262,50],[268,58]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="3"/>`).join('')}</g>`
 +T(160,122,'acute rheumatic fever — after pharyngitis only',{fs:10,c:C.ink,w:600})+T(160,134,'M protein mimicry · J♥NES: joints, carditis, nodules, erythema marginatum, chorea',{fs:7.6})),
svg(frames(2)+throat(cx(2,0)-24,56,.7)+skin(cx(2,0)+20,56,.55)+arrow(cx(2,0)-20,80,cx(2,0)+14,80)+cap(2,0,'after throat','or skin infection')
 +kidney(cx(2,1)-18,58,1.1,{glow:true})+water(cx(2,1)+20,62,1)+`<path d="M${cx(2,1)+11} 60 h18 l-2 14 h-14z" fill="#5a2a14"/>`+cap(2,1,'PSGN','cola-colored urine',C.pink)),
svg(frames(1)+`<line x1="70" y1="100" x2="250" y2="100" stroke="${C.line}"/>`+bars(110,100,[20,46,62],['#3a5fb0','#6b8fd8','#e2608c'])+bars(190,100,[18,40,58],['#3a5fb0','#6b8fd8','#e2608c'])+T(132,112,'ASO',{fs:9,c:C.ink,w:600})+T(212,112,'anti-DNase B',{fs:9,c:C.ink,w:600})
 +T(160,30,'rising titers = recent strep infection',{fs:10,c:C.ink,w:600})+T(160,134,'anti-DNase B also rises after skin infection',{fs:8.5}))
];
ILL.agal=[
svg(frames(1)+baby(110,62,2)+brain(200,52,.8,true)+lungs(258,58,.75)+thermo(56,58,1)
 +T(160,124,'neonatal sepsis · pneumonia · meningitis',{fs:10,c:C.ink,w:600})+T(160,136,'first 3 months of life',{fs:8.5})),
svg(frames(1)+person(100,70,1.8,'#c26a9a')+`<g fill="url(#ilPurp)">${[[100,78],[108,80],[92,80]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="3"/>`).join('')}</g>`+arrow(130,66,180,66)+baby(220,64,1.6)
 +T(160,124,'colonizes vagina / rectum',{fs:10,c:C.ink,w:600})+T(160,136,'passed to the baby during delivery',{fs:8.5})),
svg(frames(2)+`<g transform="translate(${cx(2,0)} 58)"><path d="M-2 26 l4 -44" stroke="#e8edf5" stroke-width="3"/><ellipse cx="2" cy="-22" rx="5" ry="8" fill="#f6f2e8"/></g>`+tube(cx(2,0)+26,60,1,'#e8d6a0')+cap(2,0,'rectovaginal culture')
 +calendar(cx(2,1),56,1.5,'36','37 WEEKS')+cap(2,1,'screen at 36–37 weeks')),
svg(frames(2)+ivbag(cx(2,0),56,1.5,'#f2c94c')+cap(2,0,'intrapartum IV penicillin','(or ampicillin)')
 +person(cx(2,1)-16,66,1.2,'#c26a9a')+baby(cx(2,1)+20,70,1)+`<path d="M${cx(2,1)+6} 44 l6 6 l12 -14" stroke="#7fd6a0" stroke-width="3" fill="none"/>`+cap(2,1,'protects the newborn'))
];
ILL.pneumo=[
svg(frames(4)+brain(cx(4,0),56,.8,true)+cap(4,0,'Meningitis')+ear(cx(4,1),58,1.2,true)+cap(4,1,'Otitis media')+lungs(cx(4,2),56,1,{lobe:'R'})+`<path d="M${cx(4,2)+18} 84 q4 4 8 0" stroke="#c96a3a" stroke-width="3"/>`+cap(4,2,'Pneumonia','lobar · rusty sputum',C.pink)+face(cx(4,3),56,1,true)+cap(4,3,'Sinusitis')),
svg(frames(2)+lungs(cx(2,0),56,1.3,{lobe:'R'})+badge(cx(2,0)+34,30,'#1')+cap(2,0,'community-acquired','pneumonia')
 +brain(cx(2,1),56,1,true)+badge(cx(2,1)+36,30,'#1')+cap(2,1,'bacterial meningitis','in adults')),
svg(frames(2)+`<g transform="translate(${cx(2,0)} 58)"><ellipse cx="0" cy="0" rx="28" ry="18" fill="#9fd4ff" opacity=".25" stroke="#9fd4ff" stroke-width="2"/>${dip(0,0,7,0).replace(/ilPink/g,'ilPurp')}</g>`+cap(2,0,'polysaccharide capsule','quellung +',C.blue)
 +antibody(cx(2,1)+8,56,1.2)+scissors(cx(2,1)-14,50,1)+cap(2,1,'IgA protease')),
svg(frames(2)+spleen(cx(2,0)-14,56,1.4)+X(cx(2,0)-14,56,16)+sickle(cx(2,0)+22,64,.9,-10)+cap(2,0,'asplenia · sickle cell','overwhelming sepsis',C.pink)
 +vial(cx(2,1)-14,58,1.3)+vial(cx(2,1)+14,58,1.3,'#e2608c')+cap(2,1,'vaccines','PCV · PPSV23'))
];
ILL.viridans=[
svg(frames(1)+`<g transform="translate(160 62)"><path d="M-70 -10 q70 -40 140 0 q-70 30 -140 0z" fill="#c8475a"/>${Array.from({length:8},(_,i)=>`<rect x="${-58+i*15}" y="-24" width="12" height="16" rx="4" fill="#f6f1e4"/>`).join('')}${Array.from({length:8},(_,i)=>`<rect x="${-56+i*14}" y="4" width="11" height="14" rx="4" fill="#f6f1e4"/>`).join('')}</g>`+chain(160,62,.7,8)
 +T(160,124,'normal oral flora',{fs:10,c:C.ink,w:600})+T(160,136,'mouth and throat',{fs:8.5})),
svg(frames(1)+G(160,58,1.6,`<path d="M-16 -14 q-6 -10 6 -10 q6 4 10 0 q4 4 10 0 q12 0 6 10 v8 q2 10 -2 24 q-4 6 -6 -8 q-2 -6 -6 0 q-2 14 -6 8 q-6 -14 -6 -24z" fill="#f6f1e4"/><ellipse cx="-4" cy="-12" rx="5" ry="3.5" fill="#3b2412"/>`)+chain(230,60,.7,5)
 +T(160,124,'S. mutans · S. mitis: dental caries',{fs:10,c:C.ink,w:600})),
svg(frames(1)+G(70,58,1.1,`<path d="M-16 -14 q-6 -10 6 -10 q6 4 10 0 q4 4 10 0 q12 0 6 10 v8 q2 10 -2 24 q-4 6 -6 -8 q-2 -6 -6 0 q-2 14 -6 8 q-6 -14 -6 -24z" fill="#f6f1e4"/>`)+`<path d="M86 50 l8 -12 l6 6" stroke="#e8edf5" stroke-width="2" fill="none"/>`+arrow(102,60,132,60)+heart(180,58,1.3,1)+T(236,50,'damaged valve',{fs:9,c:C.pink,a:'start'})+T(236,62,'+ vegetation',{fs:9,c:C.pink,a:'start'})
 +T(160,124,'S. sanguinis: subacute endocarditis',{fs:10,c:C.ink,w:600})+T(160,136,'dextrans stick to fibrin–platelet aggregates',{fs:8.5})),
svg(frames(3)+brain(cx(3,0),56,.9)+`<circle cx="${cx(3,0)+8}" cy="52" r="7" fill="#f2e08a" stroke="#fff6c8"/>`+cap(3,0,'brain abscess')+liver(cx(3,1),58,1,true)+cap(3,1,'liver abscess')+lungs(cx(3,2),56,1,{cav:true})+cap(3,2,'lung abscess','S. anginosus group',C.pink))
];
ILL.entero=[
svg(frames(2)+bladder(cx(2,0),52,1.4,{inf:true,foley:true})+hospital(cx(2,0)+36,40,.6)+cap(2,0,'UTI','hospital · catheter',C.pink)
 +liver(cx(2,1),52,1)+gallb(cx(2,1)+6,64,1.2)+cap(2,1,'biliary tract','infection')),
svg(frames(1)+`<g transform="translate(80 60)"><path d="M-30 20 q10 -40 40 -30 q20 6 20 22" stroke="#2a2a2a" stroke-width="5" fill="none"/><circle cx="30" cy="12" r="5" fill="#8fc0ff"/></g>`+arrow(120,60,150,60)+heart(196,58,1.4,1)
 +T(160,124,'subacute endocarditis',{fs:10,c:C.ink,w:600})+T(160,136,'after GI / GU procedures',{fs:8.5})),
svg(frames(2)+hospital(cx(2,0),58,1.3)+cap(2,0,'hospital-acquired')
 +`<g transform="translate(${cx(2,1)} 58)"><rect x="-24" y="-10" width="48" height="20" rx="10" fill="#6bb36b"/>${T(0,4,'cephalosporin',{fs:8,c:'#fff',w:600})}</g>`+X(cx(2,1),58,22)+cap(2,1,'intrinsically resistant','to cephalosporins',C.pink)),
svg(frames(2)+`<g transform="translate(${cx(2,0)} 56)"><rect x="-30" y="-6" width="20" height="12" rx="6" fill="#7fd6c2"/><rect x="-6" y="-6" width="20" height="12" rx="6" fill="#7fd6c2"/>${T(-20,3,'Ala',{fs:8,c:'#0b1a36',w:600})}${T(4,3,'Ala',{fs:8,c:'#0b1a36',w:600})}<path d="M-26 -10 q16 -22 36 0" stroke="#f2c94c" stroke-width="5" fill="none"/></g>`+cap(2,0,'D-Ala-D-Ala','vancomycin binds')
 +`<g transform="translate(${cx(2,1)} 56)"><rect x="-30" y="-6" width="20" height="12" rx="6" fill="#7fd6c2"/><rect x="-6" y="-6" width="20" height="12" rx="6" fill="#e2608c"/>${T(-20,3,'Ala',{fs:8,c:'#0b1a36',w:600})}${T(4,3,'Lac',{fs:8,c:'#fff',w:600})}<path d="M-26 -18 q16 -22 36 0" stroke="#f2c94c" stroke-width="5" fill="none" stroke-dasharray="5 3"/></g>`+cap(2,1,'D-Ala-D-Lac','VRE: cannot bind',C.pink))
];
ILL.bovis=[
svg(frames(1)+gut(160,58,2.4)+chain(160,58,.6,5)+T(160,124,'gut commensal',{fs:10,c:C.ink,w:600})),
svg(frames(2)+vessel(cx(2,0),58,1.2,chain(0,0,.6,5))+cap(2,0,'bacteremia')+heart(cx(2,1),56,1.3,1)+cap(2,1,'endocarditis')),
svg(frames(1)+colon(110,64,2,true)+`<path d="M196 30 q-30 0 -54 4" stroke="#2a2a2a" stroke-width="4" fill="none"/><circle cx="142" cy="34" r="4" fill="#8fc0ff"/>`+T(236,60,'S. bovis in blood',{fs:9.5,c:C.pink,a:'start'})+T(236,74,'→ colonoscopy',{fs:9.5,c:C.ink,a:'start',w:600})
 +T(160,124,'colorectal cancer association',{fs:10,c:C.ink,w:600}))
];

/* ---------- Gram-negative ---------- */
ILL.gono=[
svg(frames(2)+uterus(cx(2,0),56,1.3,true)+cap(2,0,'urethritis · cervicitis · PID')+knee(cx(2,1),62,1)+cap(2,1,'septic arthritis','sexually active adults',C.pink)),
svg(frames(1)+baby(110,62,1.8)+eye(200,54,1.4,true)+`<g transform="translate(250 84) rotate(-20)"><rect x="-14" y="-5" width="24" height="10" rx="3" fill="#e8edf5"/><rect x="10" y="-3" width="8" height="6" fill="#c8202e"/></g>`
 +T(160,124,'ophthalmia neonatorum',{fs:10,c:C.ink,w:600})+T(160,136,'prevented with erythromycin eye ointment at birth',{fs:8.5})),
svg(frames(2)+`<g transform="translate(${cx(2,0)} 56)">${['#e2608c','#7fd6c2','#f2c94c'].map((c,i)=>`<g transform="translate(${-28+i*28} 0)">${dip(0,0,6)}<path d="M-10 -6 l-6 -8 M10 -6 l6 -8 M-8 8 l-6 8 M8 8 l6 8" stroke="${c}" stroke-width="2"/></g>`).join('')}</g>`+cap(2,0,'pili antigenic variation','pili keep changing')
 +vial(cx(2,1),58,1.5)+X(cx(2,1),58,20)+cap(2,1,'no vaccine','no lasting immunity',C.pink)),
svg(frames(1)+G(160,58,1,`<circle cx="0" cy="0" r="38" fill="#e9dcf3" opacity=".25" stroke="#d8c6ff" stroke-width="2"/><g fill="#4636a8">${[[-16,-6],[-4,-14],[10,-8],[12,8]].map(([a,b])=>`<ellipse cx="${a}" cy="${b}" rx="8" ry="7"/>`).join('')}</g>${dip(-14,18,4,20)}${dip(4,22,4,-10)}${dip(22,-18,4,60)}${dip(-24,-22,4,0)}`)
 +T(160,124,'Gram-negative diplococci inside neutrophils',{fs:10,c:C.ink,w:600})),
svg(frames(2)+syringe(cx(2,0),56,1.6)+cap(2,0,'ceftriaxone')+pill(cx(2,1),56,1.4,'#e8b03a','#c8902a')+cap(2,1,'+ doxycycline','if chlamydia not excluded'))
];
ILL.hflu=[
svg(frames(3)+`<g transform="translate(${cx(3,0)} 60)"><rect x="-26" y="-36" width="52" height="72" rx="6" fill="#111"/><path d="M-4 -30 v60 M4 -30 v60" stroke="#9aa6b4" stroke-width="2"/><path d="M-4 -12 q-14 -6 -6 -16 q12 -2 10 16z" fill="#dfe6f2"/></g>`+cap(3,0,'epiglottitis','thumb sign on X-ray',C.pink)
 +brain(cx(3,1),56,.9,true)+cap(3,1,'meningitis')+lungs(cx(3,2),56,1)+cap(3,2,'pneumonia','unvaccinated children (Hib)',C.pink)),
svg(frames(4)+ear(cx(4,0),56,1.2,true)+cap(4,0,'otitis media')+face(cx(4,1),56,1,true)+cap(4,1,'sinusitis')+eye(cx(4,2),58,1.1,true)+cap(4,2,'conjunctivitis')+lungs(cx(4,3),56,1)+cap(4,3,'COPD','exacerbations')),
svg(frames(1)+antibody(180,56,1.5)+scissors(140,48,1.3)+T(160,124,'IgA protease',{fs:10,c:C.ink,w:600})+T(160,136,'cleaves mucosal IgA',{fs:8.5})),
svg(frames(3)+vial(cx(3,0),56,1.5)+cap(3,0,'Hib vaccine','conjugate (PRP)')+syringe(cx(3,1),56,1.5)+cap(3,1,'ceftriaxone','meningitis')+pill(cx(3,2),56,1.3)+cap(3,2,'rifampin','contacts'))
];
ILL.pert=[
svg(frames(1)+`<line x1="40" y1="70" x2="280" y2="70" stroke="${C.line}" stroke-width="3"/>${[[80,'catarrhal','runny nose','#8fc0ff'],[160,'paroxysmal','whoop · vomiting','#e2608c'],[240,'convalescent','slow recovery','#7fd6a0']].map(([x,a,b,c])=>`<circle cx="${x}" cy="70" r="8" fill="${c}"/>${T(x,52,a,{fs:9.5,c:C.ink,w:600})}${T(x,92,b,{fs:8.5})}`).join('')}<path d="M138 30 q8 -8 16 0 t16 0" stroke="#e2608c" stroke-width="2" fill="none"/>`+T(160,124,'whooping cough',{fs:10,c:C.ink,w:600})),
svg(frames(1)+calendar(160,56,2,'100','DAYS')+T(160,124,'“cough of 100 days”',{fs:10,c:C.ink,w:600})),
svg(frames(2)+`<g transform="translate(${cx(2,0)} 58)"><rect x="-26" y="-8" width="22" height="16" rx="4" fill="#7fd6c2"/>${T(-15,4,'Gi',{fs:9,c:'#0b1a36',w:700})}${X(-15,0,12)}${arrow(0,0,12,0)}${T(36,4,'cAMP ↑',{fs:10,c:C.gold,w:700})}</g>`+cap(2,0,'pertussis toxin','ADP-ribosylates Gi')
 +`<g transform="translate(${cx(2,1)} 58)">${Array.from({length:9},(_,i)=>`<circle cx="${-24+(i%5)*12}" cy="${-8+Math.floor(i/5)*16}" r="6" fill="#b598ff"/><circle cx="${-24+(i%5)*12}" cy="${-8+Math.floor(i/5)*16}" r="4" fill="#4636a8"/>`).join('')}</g>`+cap(2,1,'lymphocytosis')),
svg(frames(2)+tablet(cx(2,0),56,1.5,'#f2c0d0')+cap(2,0,'azithromycin','macrolide')+vial(cx(2,1),56,1.5)+cap(2,1,'DTaP · Tdap','vaccines'))
];
ILL.ecoli=[
svg(frames(1)+bladder(130,60,1.5,{inf:true})+kidney(200,52,.9)+rod(80,56,1.2,20,'url(#ilPink)',0)+`<g stroke="#f3c7d6" stroke-width="1">${Array.from({length:10},(_,i)=>`<path d="M${70+i*2} ${50+(i%3)} l${-2+i%3} ${-4}"/>`).join('')}</g>`+badge(250,36,'#1')
 +T(160,124,'#1 cause of UTI',{fs:10,c:C.ink,w:600})+T(160,136,'P fimbriae grip the urinary tract',{fs:8.5})),
svg(frames(3)+burger(cx(3,0),56,1.6)+cap(3,0,'undercooked beef','EHEC O157:H7',C.pink)+gut(cx(3,1),50,1,{blood:true})+cap(3,1,'bloody diarrhea','Shiga-like toxin')
 +kidney(cx(3,2)-14,52,.8,{glow:true})+`<g transform="translate(${cx(3,2)+16} 52)"><path d="M-8 -6 q8 -6 16 0 l-4 8 q-4 -4 -8 0z" fill="#c8323e"/><circle cx="2" cy="12" r="2" fill="#cfa"/></g>`+cap(3,2,'HUS','anemia · ↓plt · AKI',C.pink)),
svg(frames(2)+plane(cx(2,0)-10,48,1.2)+water(cx(2,0)+24,66,1)+cap(2,0,'ETEC','traveler’s diarrhea')+baby(cx(2,1)-18,62,1.2)+brain(cx(2,1)+22,56,.6,true)+cap(2,1,'K1 capsule','neonatal meningitis',C.pink)),
svg(frames(2)+vessel(cx(2,0),58,1.3,rod(-8,0,.6)+rod(10,2,.6,30))+cap(2,0,'Gram-negative sepsis')+`<g transform="translate(${cx(2,1)} 58)"><circle cx="0" cy="0" r="22" fill="#f6f2e8"/><path d="M0 0 L-12 12" stroke="#e8453a" stroke-width="3" stroke-linecap="round"/>${T(0,-8,'BP',{fs:9,c:'#1b2a44',w:700})}</g>`+cap(2,1,'LPS endotoxin','shock',C.pink))
];
ILL.kleb=[
svg(frames(2)+lungs(cx(2,0),56,1.4,{lobe:'R',upper:true})+cap(2,0,'lobar pneumonia','often upper lobe',C.pink)+bottle(cx(2,1)-26,56,1.2)+cube(cx(2,1)+2,60,1.4)+person(cx(2,1)+30,66,.9)+cap(2,1,'alcohol · diabetes','aspiration')),
svg(frames(2)+jar(cx(2,0),56,1.8)+cap(2,0,'“currant jelly” sputum')+lungs(cx(2,1)-18,56,.8,{cav:true})+liver(cx(2,1)+18,62,.6,true)+cap(2,1,'lung and liver','abscesses',C.pink)),
svg(frames(2)+hospital(cx(2,0)-14,56,1)+bladder(cx(2,0)+22,58,.8,{inf:true,foley:true})+cap(2,0,'nosocomial UTI')+`<g transform="translate(${cx(2,1)} 58)"><rect x="-24" y="-10" width="48" height="20" rx="10" fill="#6b8fd8"/>${T(0,4,'carbapenem',{fs:8,c:'#fff',w:600})}</g>`+X(cx(2,1),58,22)+cap(2,1,'KPC','carbapenem-resistant',C.pink))
];
ILL.serr=[
svg(frames(2)+hospital(cx(2,0),56,1.3)+cap(2,0,'nosocomial','UTI · pneumonia')+`<g transform="translate(${cx(2,1)} 58)"><path d="M-20 10 q20 -30 30 -24" stroke="#e9c27e" stroke-width="4" fill="none"/><rect x="6" y="-20" width="14" height="10" rx="2" fill="#dfe6f2"/></g>`+cap(2,1,'catheter-related','bacteremia')),
svg(frames(1)+G(110,58,1,`<circle cx="0" cy="0" r="30" fill="#e9dcf3" opacity=".25" stroke="#d8c6ff" stroke-width="2"/><g fill="#4636a8"><ellipse cx="-8" cy="-4" rx="8" ry="7"/><ellipse cx="8" cy="2" rx="8" ry="7"/></g>`)+T(110,24,'NADPH oxidase ✕',{fs:9,c:C.pink})+`<g transform="translate(220 58)">${T(0,-14,'catalase +',{fs:10,c:C.ink,w:600})}${T(0,2,'S. aureus · Serratia',{fs:8.5})}${T(0,14,'Nocardia · Aspergillus',{fs:8.5})}${T(0,26,'Candida · Burkholderia',{fs:8.5})}</g>`
 +T(160,124,'recurrent infections in chronic granulomatous disease',{fs:10,c:C.ink,w:600})),
svg(frames(1)+plate(160,58,2.2,'#d6c08a','#d2182c',12)+T(160,124,'red pigment (prodigiosin)',{fs:10,c:C.ink,w:600}))
];
ILL.pseudo=[
svg(frames(2)+lungs(cx(2,0),56,1.3,{mucus:true})+cap(2,0,'cystic fibrosis','mucoid alginate',C.gold)+`<g transform="translate(${cx(2,1)} 58)"><rect x="-22" y="-20" width="30" height="34" rx="4" fill="#5f7fb0"/><rect x="-18" y="-16" width="22" height="12" fill="#7fd6c2" opacity=".6"/><path d="M8 -4 q20 0 20 20" stroke="#dfe6f2" stroke-width="4" fill="none"/></g>`+cap(2,1,'ventilated patients','ICU pneumonia')),
svg(frames(4)+flame(cx(4,0),56,1.6)+cap(4,0,'burn wounds')+hottub(cx(4,1),60,1.1)+cap(4,1,'hot tub','folliculitis')+ear(cx(4,2),56,1.2,true)+cap(4,2,'otitis externa','swimmer’s ear')+ear(cx(4,3)-6,56,1)+cube(cx(4,3)+18,64,1)+cap(4,3,'malignant OE','in diabetics',C.pink)),
svg(frames(2)+sneaker(cx(2,0),58,1.5)+bone(cx(2,0),96,.6,0,true)+cap(2,0,'nail through a sneaker','→ osteomyelitis',C.pink)+skin(cx(2,1),58,1.3,`<circle cx="0" cy="0" r="9" fill="#1a1012"/><circle cx="0" cy="0" r="13" fill="none" stroke="#e8455a" stroke-width="3"/>`)+cap(2,1,'ecthyma gangrenosum')),
svg(frames(1)+ribo(160,56,1.6,true)+T(160,124,'exotoxin A',{fs:10,c:C.ink,w:600})+T(160,136,'ADP-ribosylates EF-2 → protein synthesis stops',{fs:8.5})),
svg(frames(1)+[['pip-tazo','#e2608c'],['cefepime','#6b8fd8'],['carbapenem','#7fd6a0'],['aminoglycoside','#f2c94c']].map(([t,c],i)=>`<g transform="translate(${70+i*60} 58)"><rect x="-29" y="-12" width="58" height="24" rx="12" fill="${c}"/>${T(0,4,t,{fs:7.2,c:'#0b1a36',w:700})}</g>`).join('')+T(160,124,'antipseudomonal agents',{fs:10,c:C.ink,w:600}))
];
ILL.proteus=[
svg(frames(2)+bladder(cx(2,0),56,1.4,{inf:true})+cap(2,0,'UTI')+`<g transform="translate(${cx(2,1)} 56)"><rect x="-30" y="-8" width="60" height="16" rx="8" fill="url(#ilMem)"/>${T(0,4,'pH ↑ alkaline',{fs:9,c:'#fff',w:700})}</g>`+cap(2,1,'urease: urea → NH₃')),
svg(frames(1)+kidney(160,58,2,{stone:true})+T(160,124,'struvite staghorn calculi',{fs:10,c:C.ink,w:600})+T(160,136,'magnesium ammonium phosphate',{fs:8.5})),
svg(frames(1)+G(160,58,1,`<ellipse cx="0" cy="0" rx="60" ry="34" fill="#7a1220" stroke="#c9d2de" stroke-width="2"/>${[54,42,30,18,8].map((r,i)=>`<ellipse cx="0" cy="0" rx="${r}" ry="${r*.56}" fill="none" stroke="#f2ead3" stroke-width="2" opacity="${.3+i*.12}"/>`).join('')}`)+T(160,124,'swarming motility across the agar',{fs:10,c:C.ink,w:600}))
];
ILL.salm=[
svg(frames(3)+drum(cx(3,0),54,1.3)+cap(3,0,'poultry')+egg(cx(3,1),56,1.6)+cap(3,1,'eggs')+turtle(cx(3,2),58,1.5)+cap(3,2,'pet reptiles')),
svg(frames(3)+thermo(cx(3,0)-10,56,1.2)+`<path d="M${cx(3,0)+4} 60 l6 0 l3 -8 l4 14 l3 -6 h10" stroke="#7fd6a0" stroke-width="2" fill="none"/>`+cap(3,0,'fever +','relative bradycardia',C.pink)
 +skin(cx(3,1),56,1.1,`<g fill="#e8607a" stroke="#ffb0c0" stroke-width=".8">${[[-14,-2],[-2,4],[10,-4],[18,6],[-8,-8]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="3.4"/>`).join('')}</g>`)+cap(3,1,'rose spots','abdomen')+liver(cx(3,2),52,.8)+gallb(cx(3,2)+4,64,1.3)+cap(3,2,'gallbladder','chronic carriers',C.pink)),
svg(frames(2)+rbc(cx(2,0)-34,56,1.35)+sickle(cx(2,0)+14,48,1.15,-12)+sickle(cx(2,0)+20,72,.95,22)+T(cx(2,0)-34,86,'normal',{fs:8.5})+T(cx(2,0)+18,96,'sickled',{fs:8.5,c:C.pink})+cap(2,0,'sickle cell disease','infarcted bone, asplenia',C.pink)+arrow(cx(2,0)+66,58,cx(2,1)-60,58)+bone(cx(2,1),66,1.7,0,true)+rod(cx(2,1)-12,44,.75,10,'url(#ilPink)',0)+rod(cx(2,1)+16,42,.75,-20,'url(#ilPink)',0)+cap(2,1,'Salmonella osteomyelitis','(S. aureus still #1 overall)')),
svg(frames(1)+pill(110,56,1.3)+arrow(134,56,160,56)+`<line x1="176" y1="56" x2="276" y2="56" stroke="#e2608c" stroke-width="5" stroke-linecap="round"/>`+T(226,44,'longer shedding',{fs:9,c:C.pink})
 +T(160,124,'antibiotics can prolong fecal excretion',{fs:10,c:C.ink,w:600})+T(160,136,'in uncomplicated gastroenteritis',{fs:8.5}))
];
ILL.shig=[
svg(frames(2)+`<g transform="translate(${cx(2,0)} 54)">${T(0,10,'~10',{fs:30,c:C.ink,w:700})}</g>`+cap(2,0,'organisms are enough','very low infectious dose',C.pink)+gut(cx(2,1),48,1.1,{blood:true})+cap(2,1,'bloody diarrhea','dysentery')),
svg(frames(2)+`<g transform="translate(${cx(2,0)} 56)"><circle cx="0" cy="0" r="16" fill="#c8323e"/>${T(0,4,'Stx',{fs:10,c:'#fff',w:700})}</g>`+cap(2,0,'Shiga toxin','S. dysenteriae')+kidney(cx(2,1),56,1.2,{glow:true})+cap(2,1,'HUS',null)),
svg(frames(1)+`<g transform="translate(160 66)">${Array.from({length:6},(_,i)=>`<rect x="${-90+i*30}" y="-16" width="28" height="36" rx="4" fill="#d48a8a" stroke="#b05a5a"/>`).join('')}${rod(-46,0,.8,0,'url(#ilPink)')}<path d="M-34 0 q8 6 16 0 t14 2" stroke="#7fd6c2" stroke-width="3" fill="none"/>${rod(16,2,.8,10,'url(#ilPink)')}<path d="M28 4 q8 6 16 0" stroke="#7fd6c2" stroke-width="3" fill="none"/></g>`
 +T(160,30,'M cells → cell to cell',{fs:9.5,c:C.ink,w:600})+T(160,124,'actin tails push it into the next cell',{fs:10,c:C.ink,w:600})),
svg(frames(4)+burger(cx(4,0),56,1.2)+cap(4,0,'food')+hand(cx(4,1),56,1.4)+cap(4,1,'fingers')+`<g transform="translate(${cx(4,2)} 58)"><path d="M-14 8 q0 -14 14 -16 q14 2 14 16z" fill="#6b4a2a"/></g>`+cap(4,2,'feces')+fly(cx(4,3),56,1.6)+cap(4,3,'flies'))
];

/* meningococcus (first board, kept in its own scope) */
ILL.mening=(function(){
/* ================= illustrations for species cards (inline SVG) ================= */
const ILL_DEFS=`<defs>
<radialGradient id="ilPink" cx="35%" cy="30%" r="70%"><stop offset="0" stop-color="#ffd2e0"/><stop offset=".55" stop-color="#e2608c"/><stop offset="1" stop-color="#8a2a52"/></radialGradient>
<radialGradient id="ilSkin" cx="50%" cy="40%" r="70%"><stop offset="0" stop-color="#f3cdb0"/><stop offset="1" stop-color="#d9a17e"/></radialGradient>
<radialGradient id="ilBrain" cx="45%" cy="40%" r="65%"><stop offset="0" stop-color="#f6d6d9"/><stop offset="1" stop-color="#d9a3ab"/></radialGradient>
<linearGradient id="ilKid" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c25a5a"/><stop offset="1" stop-color="#7d2a33"/></linearGradient>
<linearGradient id="ilAdr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a0d18"/><stop offset="1" stop-color="#a3162a"/></linearGradient>
<linearGradient id="ilMem" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e2608c"/><stop offset="1" stop-color="#9c3460"/></linearGradient>
<filter id="ilGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3"/></filter>
</defs>`;
const T=(x,y,s,o={})=>`<text x="${x}" y="${y}" font-family="IBM Plex Sans, system-ui, sans-serif" font-size="${o.fs||10}" fill="${o.c||'#aebfda'}" ${o.a?`text-anchor="${o.a}"`:''} ${o.w?`font-weight="${o.w}"`:''}>${s}</text>`;
const dip=(x,y,r=4,rot=0)=>`<g transform="translate(${x} ${y}) rotate(${rot})"><ellipse cx="${-r*.85}" cy="0" rx="${r*.8}" ry="${r}" fill="url(#ilPink)"/><ellipse cx="${r*.85}" cy="0" rx="${r*.8}" ry="${r}" fill="url(#ilPink)"/></g>`;
const svg=(body,h=150)=>`<svg viewBox="0 0 320 ${h}" xmlns="http://www.w3.org/2000/svg" role="img">${ILL_DEFS}${body}</svg>`;

const ILL={mening:[
/* 1 · dorms / barracks → meningitis */
svg(`
<rect x="8" y="10" width="304" height="132" rx="10" fill="#0d2247"/>
<g stroke="#8fa3c2" stroke-width="3" stroke-linecap="round">
  <line x1="26" y1="34" x2="26" y2="124"/><line x1="126" y1="34" x2="126" y2="124"/>
  <line x1="26" y1="62" x2="126" y2="62"/><line x1="26" y1="104" x2="126" y2="104"/>
  <line x1="40" y1="34" x2="40" y2="62" stroke-width="2"/>
</g>
<rect x="28" y="52" width="96" height="10" rx="3" fill="#dfe6f2"/><rect x="28" y="94" width="96" height="10" rx="3" fill="#dfe6f2"/>
<circle cx="44" cy="47" r="6" fill="url(#ilSkin)"/><path d="M52 52 q30 -14 70 0 v4 h-70z" fill="#4f7fc4"/>
<circle cx="44" cy="89" r="6" fill="url(#ilSkin)"/><path d="M52 94 q30 -14 70 0 v4 h-70z" fill="#c9844a"/>
<path d="M44 40 q-4 -6 2 -9 q6 -2 6 4" fill="#5a3a22"/><path d="M44 82 q-4 -6 2 -9 q6 -2 6 4" fill="#2a1d14"/>
<g fill="#ffd2e0" opacity=".85"><circle cx="62" cy="72" r="1.6"/><circle cx="70" cy="76" r="1.3"/><circle cx="78" cy="71" r="1.6"/><circle cx="86" cy="77" r="1.2"/><circle cx="94" cy="73" r="1.5"/></g>
${T(76,138,'dorms · barracks · 15–24 y',{a:'middle',fs:9.5})}
<path d="M138 80 h26" stroke="#f2ead3" stroke-width="2" marker-end="url(#ar)"/>
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#f2ead3"/></marker></defs>
${T(151,72,'droplets',{a:'middle',fs:8.5})}
<g transform="translate(240 72)">
  <ellipse cx="0" cy="0" rx="62" ry="50" fill="#d23a4a" opacity=".55" filter="url(#ilGlow)"/>
  <ellipse cx="0" cy="0" rx="56" ry="45" fill="none" stroke="#e8455a" stroke-width="5"/>
  <path d="M-48 4 c-4 -30 20 -44 48 -40 c26 -4 50 12 46 40 c2 24 -22 38 -46 34 c-26 4 -50 -10 -48 -34z" fill="url(#ilBrain)"/>
  <g fill="none" stroke="#b97c86" stroke-width="2" stroke-linecap="round">
    <path d="M-36 -12 q8 -8 16 0 t16 0"/><path d="M4 -22 q8 -8 16 0 t14 2"/><path d="M-30 12 q8 -8 16 0 t16 0 t14 0"/><path d="M8 26 q6 -6 14 0"/><path d="M0 -40 v76" stroke="#a96f79"/>
  </g>
  ${dip(-52,-18,3.2,40)}${dip(50,-24,3.2,-30)}${dip(-46,30,3.2,10)}${dip(46,28,3.2,70)}${dip(0,-46,3,0)}
</g>
${T(240,137,'inflamed meninges',{a:'middle',fs:9.5,c:'#ffb0bc'})}
`),
/* 2 · meningococcemia: non-blanching rash, DIC, adrenal hemorrhage */
svg(`
<rect x="8" y="10" width="96" height="132" rx="10" fill="#0d2247"/><rect x="112" y="10" width="96" height="132" rx="10" fill="#0d2247"/><rect x="216" y="10" width="96" height="132" rx="10" fill="#0d2247"/>
<rect x="18" y="26" width="76" height="74" rx="10" fill="url(#ilSkin)"/>
<g fill="#7a1638">${[[30,40],[46,34],[60,46],[76,38],[34,62],[52,58],[70,66],[84,56],[40,84],[58,80],[78,88],[28,92],[66,30],[88,76]].map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="${i%4?2:3.4}"/>`).join('')}</g>
<g fill="#5a0d2a" opacity=".8"><ellipse cx="56" cy="70" rx="7" ry="5"/><ellipse cx="80" cy="48" rx="5" ry="4"/></g>
<circle cx="56" cy="62" r="26" fill="#eaf6ff" fill-opacity=".18" stroke="#eaf6ff" stroke-width="2.5"/>
<path d="M78 46 l10 -10" stroke="#eaf6ff" stroke-width="2.5"/>
${T(56,118,'pressed glass:',{a:'middle',fs:9})}${T(56,131,'rash stays',{a:'middle',fs:9.5,c:'#ffb0bc',w:600})}
<path d="M122 40 h76 M122 72 h76" stroke="#c94a5a" stroke-width="2"/>
<rect x="122" y="40" width="76" height="32" fill="#7d1c2c" opacity=".55"/>
<g fill="#e8d9b0">${[[140,52],[166,60],[186,50]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="9" ry="5"/>`).join('')}</g>
<g stroke="#f4eccd" stroke-width=".8" opacity=".8"><path d="M132 49 l16 6 M134 56 l12 -6 M158 57 l16 6 M160 64 l12 -6 M178 47 l16 6 M180 54 l12 -6"/></g>
<g fill="#d0263c"><path d="M140 86 q6 9 0 14 q-6 -5 0 -14z"/><path d="M160 92 q6 9 0 14 q-6 -5 0 -14z"/><path d="M180 84 q6 9 0 14 q-6 -5 0 -14z"/></g>
${T(160,30,'micro-clots',{a:'middle',fs:9})}${T(160,118,'clots + bleeding',{a:'middle',fs:9})}${T(160,131,'DIC',{a:'middle',fs:10,c:'#ffb0bc',w:600})}
<path d="M236 70 c-6 -18 6 -32 22 -28 c14 -6 30 2 30 18 c4 20 -6 44 -24 46 c-18 4 -32 -14 -28 -36z" fill="url(#ilKid)"/>
<path d="M258 92 q-6 -4 -2 -16" stroke="#e8c27a" stroke-width="2.5" fill="none"/>
<path d="M236 46 c4 -14 18 -20 30 -16 c12 2 22 10 22 18 c-10 -4 -18 -2 -26 0 c-10 2 -18 2 -26 -2z" fill="url(#ilAdr)"/>
<g fill="#ff6a7a" opacity=".9"><circle cx="252" cy="38" r="2"/><circle cx="266" cy="35" r="1.6"/><circle cx="278" cy="40" r="2"/></g>
<path d="M290 34 l10 -8" stroke="#ffb0bc" stroke-width="1.5"/>${T(300,24,'adrenal',{a:'end',fs:8.5,c:'#ffb0bc'})}
${T(264,118,'adrenal hemorrhage',{a:'middle',fs:9})}${T(264,131,'Waterhouse–Friderichsen',{a:'middle',fs:8.6,c:'#ffb0bc',w:600})}
`),
/* 3 · LOS endotoxin + IgA protease */
svg(`
<rect x="8" y="10" width="148" height="132" rx="10" fill="#0d2247"/><rect x="164" y="10" width="148" height="132" rx="10" fill="#0d2247"/>
<rect x="18" y="74" width="128" height="30" fill="#10284f"/>
<g fill="url(#ilMem)">${Array.from({length:11},(_,i)=>`<circle cx="${22+i*12}" cy="76" r="4.6"/><circle cx="${22+i*12}" cy="102" r="4.6"/>`).join('')}</g>
<g stroke="#c98aa8" stroke-width="1.4">${Array.from({length:11},(_,i)=>`<path d="M${20+i*12} 80 v8 M${24+i*12} 80 v8 M${20+i*12} 98 v-8 M${24+i*12} 98 v-8"/>`).join('')}</g>
${[40,82,124].map(x=>`<g><path d="M${x-4} 74 v14 M${x} 74 v16 M${x+4} 74 v14" stroke="#f2ead3" stroke-width="1.6"/><rect x="${x-7}" y="66" width="14" height="8" rx="2" fill="#f2c94c"/>
<g fill="#7fd6c2" stroke="#3a9c86" stroke-width=".8"><polygon points="${x-4},62 ${x+4},62 ${x+6},56 ${x+2},51 ${x-2},51 ${x-6},56"/><polygon points="${x-2},49 ${x+6},49 ${x+8},43 ${x+4},38 ${x},38 ${x-4},43"/><polygon points="${x+4},36 ${x+12},36 ${x+14},30 ${x+10},25 ${x+6},25 ${x+2},30"/></g></g>`).join('')}
${T(82,20,'LOS',{a:'middle',fs:11,c:'#f2ead3',w:600})}
${T(150,118,'outer membrane',{a:'end',fs:8.5})}
${T(26,134,'lipid A = endotoxin',{fs:9,c:'#f2c94c'})}
<g transform="translate(238 70)">
  <g stroke="#8fc0ff" stroke-width="6" stroke-linecap="round" fill="none">
    <path d="M-34 -30 L-22 -8 L-22 20"/><path d="M-10 -30 L-22 -8"/><path d="M10 -30 L22 -8 L22 20"/><path d="M34 -30 L22 -8"/>
  </g>
  <path d="M-22 24 q22 12 44 0" stroke="#f2c94c" stroke-width="4" fill="none"/>
  <circle cx="0" cy="30" r="5" fill="#f2c94c"/>
  <g transform="translate(-30 -6) rotate(-30)">
    <circle cx="-6" cy="10" r="5" fill="none" stroke="#e8edf5" stroke-width="2.4"/><circle cx="6" cy="10" r="5" fill="none" stroke="#e8edf5" stroke-width="2.4"/>
    <path d="M-4 6 L8 -14 M4 6 L-8 -14" stroke="#e8edf5" stroke-width="2.4" stroke-linecap="round"/>
  </g>
  <path d="M-25 -10 l6 2" stroke="#ff6a7a" stroke-width="2.5"/>
</g>
${T(238,20,'IgA protease',{a:'middle',fs:11,c:'#f2ead3',w:600})}
${T(238,122,'secretory IgA cut at the hinge',{a:'middle',fs:9})}${T(238,134,'→ colonizes the nasopharynx',{a:'middle',fs:9,c:'#8fc0ff'})}
`),
/* 4 · terminal complement deficiency */
svg(`
<rect x="8" y="10" width="148" height="132" rx="10" fill="#0d2247"/><rect x="164" y="10" width="148" height="132" rx="10" fill="#0d2247"/>
${[[0,1],[156,0]].map(([ox,ok])=>`
<g transform="translate(${ox} 0)">
<rect x="18" y="72" width="128" height="26" fill="#10284f"/>
<g fill="url(#ilMem)">${Array.from({length:11},(_,i)=>`<circle cx="${22+i*12}" cy="74" r="4.2"/><circle cx="${22+i*12}" cy="96" r="4.2"/>`).join('')}</g>
${ok?`<rect x="66" y="44" width="34" height="62" fill="#06122a"/>
<g>${['#7fd6c2','#8fc0ff','#b598ff','#f2c94c'].map((c,i)=>`<rect x="${58+i*2}" y="${46+i*3}" width="6" height="${44-i*2}" rx="3" fill="${c}"/>`).join('')}
${Array.from({length:6},(_,i)=>`<rect x="${70+i*5}" y="40" width="4.4" height="70" rx="2.2" fill="#f07aa0"/>`).join('')}</g>
<g fill="#cfe2ff">${[[84,60],[80,78],[88,96],[84,116],[78,128]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2"/>`).join('')}</g>
${T(82,30,'C5b–C9 pore (MAC)',{a:'middle',fs:9.5,c:'#f2ead3',w:600})}${T(82,138,'water rushes in → lysis',{a:'middle',fs:9})}`
:`<g opacity=".45">${Array.from({length:6},(_,i)=>`<rect x="${70+i*5}" y="34" width="4.4" height="26" rx="2.2" fill="none" stroke="#f07aa0" stroke-dasharray="3 2"/>`).join('')}</g>
<path d="M62 40 l40 24 M102 40 l-40 24" stroke="#ff6a7a" stroke-width="3" stroke-linecap="round"/>
${dip(60,120,6,0)}${dip(102,118,6,30)}
${T(82,30,'C5–C9 missing',{a:'middle',fs:9.5,c:'#ffb0bc',w:600})}${T(82,138,'Neisseria survives · recurs',{a:'middle',fs:9})}`}
</g>`).join('')}
`),
/* 5 · prophylaxis for close contacts + vaccine */
svg(`
<rect x="8" y="10" width="304" height="132" rx="10" fill="#0d2247"/>
<g>${[[30,58],[52,52],[41,86]].map(([x,y])=>`<circle cx="${x}" cy="${y-12}" r="7" fill="url(#ilSkin)"/><path d="M${x-11} ${y+12} q11 -20 22 0z" fill="#4f7fc4"/>`).join('')}</g>
${T(41,116,'close',{a:'middle',fs:9.5})}${T(41,128,'contacts',{a:'middle',fs:9.5})}
<path d="M70 70 h14" stroke="#f2ead3" stroke-width="2" marker-end="url(#ar2)"/>
<defs><marker id="ar2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#f2ead3"/></marker></defs>
<g transform="translate(116 56)"><rect x="-15" y="-7" width="30" height="14" rx="7" fill="#d8572a"/><rect x="0" y="-7" width="15" height="14" fill="#a8341a"/><rect x="8" y="-7" width="7" height="14" rx="7" fill="#a8341a"/>
<path d="M-5 13 q4 8 0 12 q-4 -4 0 -12z" fill="#ff8a3a"/></g>
${T(116,98,'rifampin',{a:'middle',fs:9.5,c:'#f2ead3',w:600})}${T(116,110,'orange fluids',{a:'middle',fs:8,c:'#ff9a5a'})}
<g transform="translate(168 56)"><ellipse cx="0" cy="0" rx="14" ry="8" fill="#f6f2e8"/><path d="M-10 0 h20" stroke="#c9c2b2" stroke-width="1.2"/></g>
${T(168,98,'cipro',{a:'middle',fs:9.5,c:'#f2ead3',w:600})}${T(168,110,'1 oral dose',{a:'middle',fs:8})}
<g transform="translate(220 56) rotate(-20)"><rect x="-16" y="-5" width="26" height="10" rx="2" fill="#e8f3ff" fill-opacity=".85" stroke="#9fb6d6"/><rect x="-12" y="-3.5" width="13" height="7" fill="#f2c94c" opacity=".8"/><path d="M10 0 h11" stroke="#c9d2de" stroke-width="1.6"/><rect x="-21" y="-3" width="5" height="6" fill="#9fb6d6"/></g>
${T(220,98,'ceftriaxone',{a:'middle',fs:9.5,c:'#f2ead3',w:600})}${T(220,110,'1 IM dose',{a:'middle',fs:8})}
<line x1="94" y1="120" x2="246" y2="120" stroke="#26446f"/>${T(170,133,'any one of the three',{a:'middle',fs:8.5})}
<line x1="258" y1="22" x2="258" y2="130" stroke="#26446f"/>
<g transform="translate(285 52)"><rect x="-9" y="-12" width="18" height="26" rx="3" fill="#dfe9f6" fill-opacity=".9"/><rect x="-10" y="-17" width="20" height="6" rx="2" fill="#6bb36b"/><rect x="-9" y="0" width="18" height="10" fill="#8fc0ff" opacity=".6"/></g>
${T(285,98,'vaccine',{a:'middle',fs:9.5,c:'#f2ead3',w:600})}${T(285,110,'MenACWY',{a:'middle',fs:8})}${T(285,121,'MenB',{a:'middle',fs:8})}
`)
]};


return ILL.mening;})();

/* ---------- Gram-positive rods ---------- */
{
const prod=(x,y,s=1,r=0,sp=0)=>G(x,y,s,`<rect x="-13" y="-5" width="26" height="10" rx="5" fill="url(#ilPurp)"/>${sp===1?'<ellipse cx="0" cy="0" rx="4.5" ry="3.6" fill="#f6eed6"/>':sp===2?'<ellipse cx="9" cy="0" rx="5" ry="6" fill="#f6eed6" stroke="#cdbf98" stroke-width=".8"/>':''}`,r);
const spore=(x,y,s=1)=>G(x,y,s,'<ellipse cx="0" cy="0" rx="6" ry="4.6" fill="#f6eed6" stroke="#cdbf98" stroke-width="1"/><ellipse cx="-1.5" cy="-1.5" rx="2" ry="1.2" fill="#fff"/>');
const club=(x,y,s=1,r=0)=>G(x,y,s,'<path d="M-12 -2.6 L8 -4.8 Q14 0 8 4.8 L-12 2.6 Q-14 0 -12 -2.6z" fill="url(#ilPurp)"/><circle cx="8" cy="0" r="2.2" fill="#1a0e40"/><circle cx="-7" cy="0" r="1.6" fill="#1a0e40"/>',r);
const chin=(x,y,s=1)=>G(x,y,s,club(0,0,1,-30)+club(14,-2,1,30)+club(2,16,1,90)+club(22,14,1,-60)+club(-16,14,1,10));
const fil=(x,y,s=1,c='#9a62e8',bead=false)=>G(x,y,s,`<g fill="none" stroke="${c}" stroke-width="${bead?2.4:3}" stroke-linecap="round" ${bead?'stroke-dasharray="4 1.6"':''}><path d="M-30 6 q12 -4 22 -2 t24 -6 t16 -10"/><path d="M-12 3 q2 -10 -4 -18 t0 -12"/><path d="M8 -2 q6 8 2 18"/><path d="M20 -8 q4 -10 14 -12"/><path d="M-16 -12 q-8 -4 -12 -12"/></g>`);
const bowl=(x,y,s=1,steam=true)=>G(x,y,s,`${steam?'<g fill="none" stroke="#dfe7f2" stroke-width="2" stroke-linecap="round" opacity=".7"><path d="M-10 -26 q-5 -7 0 -13 t0 -13"/><path d="M2 -28 q-5 -7 0 -13 t0 -12"/><path d="M14 -26 q-5 -7 0 -13 t0 -13"/></g>':''}<ellipse cx="0" cy="-10" rx="26" ry="10" fill="#f6eed6"/>${Array.from({length:14},(_,i)=>`<ellipse cx="${-20+(i*37)%40}" cy="${-14+(i*13)%8}" rx="2.6" ry="1.2" fill="#fffaf0" stroke="#d8cba6" stroke-width=".5" transform="rotate(${i*41} ${-20+(i*37)%40} ${-14+(i*13)%8})"/>`).join('')}<circle cx="-8" cy="-12" r="2" fill="#5aa63a"/><circle cx="10" cy="-10" r="2" fill="#5aa63a"/><rect x="2" y="-15" width="3.4" height="3.4" fill="#e07a2a"/><path d="M-28 -8 Q-26 16 0 16 Q26 16 28 -8z" fill="#f2f4f8"/><path d="M-27 -2 Q0 6 27 -2" stroke="#3a6fb0" stroke-width="2.4" fill="none"/>`);
const cheese=(x,y,s=1)=>G(x,y,s,'<path d="M-24 10 L24 10 L24 -8 Z" fill="#f3cf5a"/><path d="M-24 10 L24 -8 L30 -12 L-18 6z" fill="#ffe08a"/><path d="M24 10 L30 6 L30 -12 L24 -8z" fill="#d9ad35"/><circle cx="8" cy="4" r="2.6" fill="#c99a25"/><circle cx="16" cy="-1" r="2" fill="#c99a25"/><circle cx="-6" cy="7" r="1.8" fill="#c99a25"/>');
const flake=(x,y,s=1)=>G(x,y,s,`<g stroke="#cfe8ff" stroke-width="2" stroke-linecap="round">${[0,60,120].map(a=>`<g transform="rotate(${a})"><path d="M0 -14 V14 M-4 -10 L0 -6 L4 -10 M-4 10 L0 6 L4 10"/></g>`).join('')}</g>`);
const fridge=(x,y,s=1)=>G(x,y,s,'<rect x="-18" y="-30" width="36" height="60" rx="5" fill="#e6edf6"/><path d="M-18 -8 H18" stroke="#9fb0c6" stroke-width="2"/><rect x="11" y="-24" width="3" height="10" rx="1.5" fill="#9fb0c6"/><rect x="11" y="-2" width="3" height="14" rx="1.5" fill="#9fb0c6"/>');
const deli=(x,y,s=1)=>G(x,y,s,'<ellipse cx="0" cy="0" rx="16" ry="7" fill="#e88a8a"/><ellipse cx="0" cy="-3" rx="16" ry="7" fill="#f2a4a4"/><circle cx="-6" cy="-4" r="1.4" fill="#fff3f3"/><circle cx="5" cy="-2" r="1.2" fill="#fff3f3"/><circle cx="2" cy="-6" r="1" fill="#fff3f3"/>');
const milk=(x,y,s=1)=>G(x,y,s,'<path d="M-10 -22 L10 -22 L10 -14 L14 -8 L14 22 L-14 22 L-14 -8 L-10 -14z" fill="#f2f4f8"/><path d="M-14 0 H14 V10 H-14z" fill="#3a6fb0"/><path d="M-12 -32 L12 -6 M12 -32 L-12 -6" stroke="#ff5a6a" stroke-width="0" />');
const capsule=(x,y,s=1,r=-30)=>G(x,y,s,'<rect x="-14" y="-6" width="28" height="12" rx="6" fill="#f2f4f8"/><path d="M0 -6 H8 a6 6 0 0 1 0 12 H0z" fill="#6b8fd8"/>',r);
const pm=(x,y,s=1)=>G(x,y,s,`<path d="M-40 -14 H40 V14 H-40z" fill="url(#ilGut)" rx="8"/><path d="M-40 -14 H40" stroke="#8a3e38" stroke-width="2"/>${[[-30,-6],[-16,2],[-2,-8],[10,4],[24,-4],[34,6],[-24,8]].map(([a,b])=>`<ellipse cx="${a}" cy="${b}" rx="6" ry="3.6" fill="#f0dc8a" stroke="#c9b25a" stroke-width=".8"/>`).join('')}`);
const soap=(x,y,s=1)=>G(x,y,s,'<rect x="-16" y="-8" width="32" height="16" rx="6" fill="#bfe3ff"/><circle cx="-12" cy="-14" r="5" fill="none" stroke="#dfefff" stroke-width="1.4"/><circle cx="2" cy="-18" r="3.4" fill="none" stroke="#dfefff" stroke-width="1.2"/><circle cx="12" cy="-12" r="4" fill="none" stroke="#dfefff" stroke-width="1.2"/>');
const gel=(x,y,s=1)=>G(x,y,s,'<rect x="-9" y="-12" width="18" height="30" rx="4" fill="#9fd8c0"/><rect x="-4" y="-22" width="8" height="10" fill="#e6edf6"/><rect x="-2" y="-26" width="12" height="5" fill="#e6edf6"/>');
const actin=(x,y,s=1)=>G(x,y,s,`${prod(0,0,1,0)}<path d="M-13 0 L-40 -8 L-40 8z" fill="#7fe0b0" opacity=".75"/>`);
const tellPlate=(x,y,s=1)=>plate(x,y,s,'#6e1e22','#111',10);
const blocks=(x,y,s=1)=>G(x,y,s,['A','B','C','D','E','F','G'].map((L,i)=>{const cols=['#e2608c','#f2c94c','#7fd6a0','#8fc0ff','#b598ff','#f0a060','#ff8a96'];const px=(i<4?(i-1.5)*17:(i-5)*17),py=i<4?0:-17;return `<rect x="${px-8}" y="${py-8}" width="16" height="16" rx="2" fill="${cols[i]}"/>${T(px,py+4,L,{fs:10,c:'#14234a',w:700})}`;}).join(''));
const soil=(x,y,s=1)=>G(x,y,s,'<path d="M-30 10 Q-24 -10 0 -12 Q24 -10 30 10z" fill="#5a3a22"/><circle cx="-14" cy="0" r="1.6" fill="#7a5638"/><circle cx="10" cy="-4" r="1.4" fill="#7a5638"/><circle cx="18" cy="4" r="1.2" fill="#7a5638"/><path d="M0 -12 q2 -10 -1 -18" stroke="#5aa63a" stroke-width="2" fill="none"/><path d="M-1 -28 q8 -2 10 -10 q-8 0 -10 10z M-1 -24 q-8 -2 -10 -8 q8 0 10 8z" fill="#6bbf4a"/>');
const iud=(x,y,s=1)=>G(x,y,s,`<rect x="-2" y="-22" width="4" height="40" rx="2" fill="#f6f6f2"/><rect x="-18" y="-24" width="36" height="4" rx="2" fill="#f6f6f2"/>${Array.from({length:7},(_,i)=>`<rect x="-3.5" y="${-8+i*3.4}" width="7" height="2" rx="1" fill="#c87533"/>`).join('')}<path d="M0 18 q4 6 -2 12" stroke="#3a6fb0" stroke-width="1.2" fill="none"/>`);
const gran=(x,y,s=1)=>G(x,y,s,'<circle cx="0" cy="0" r="6" fill="#f2c22a"/><circle cx="8" cy="4" r="4.6" fill="#e8b520"/><circle cx="-6" cy="6" r="4" fill="#f5cf4a"/><circle cx="-2" cy="-2" r="1.6" fill="#fff3b0"/>');
const jaw=(x,y,s=1)=>G(x,y,s,'<path d="M-28 -30 Q-34 0 -22 22 Q0 34 22 22 Q30 6 24 -10" fill="url(#ilSkin)"/><path d="M-6 -4 q-2 -10 4 -16" stroke="#b07a5a" stroke-width="1.5" fill="none"/><circle cx="14" cy="10" r="8" fill="#d9706a"/><circle cx="14" cy="10" r="3" fill="#f2c22a"/><path d="M14 18 q2 8 -2 14" stroke="#f2c22a" stroke-width="2" fill="none"/>');
const neck=(x,y,s=1)=>G(x,y,s,'<path d="M-14 -34 Q-16 -14 -24 0 Q-30 22 -26 34 L26 34 Q30 22 24 0 Q16 -14 14 -34z" fill="url(#ilSkin)"/><ellipse cx="-14" cy="6" rx="9" ry="7" fill="#d9706a" opacity=".8"/><ellipse cx="14" cy="6" rx="9" ry="7" fill="#d9706a" opacity=".8"/>');

ILL.cereus=[
svg(frames(1)+bowl(110,70,1.3)+prod(196,46,1.2,-15,1)+prod(220,66,1.2,20,1)+T(244,40,'B. cereus',{fs:9,c:C.dim})
 +T(160,124,'“Fried rice syndrome”',{fs:10,c:C.ink,w:600})+T(160,136,'reheated rice → food poisoning',{fs:8.5})),
svg(frames(2)+bowl(cx(2,0)-18,72,.9,false)+clock(cx(2,0)+28,50,1,'1–5h')+cap(2,0,'Vomiting type','1–5 h after eating',C.pink)
 +gut(cx(2,1)-14,56,.9)+clock(cx(2,1)+30,50,1,'8–18h')+cap(2,1,'Diarrheal type','watery · 8–18 h')),
svg(frames(3)+spore(cx(3,0),60,2.2)+flame(cx(3,0),90,.7)+cap(3,0,'spores','survive cooking',C.pink)
 +bowl(cx(3,1),74,.8,false)+thermo(cx(3,1)+26,52,.7)+cap(3,1,'kept warm','hours at room temp')
 +prod(cx(3,2)-12,56,1.1,-20)+prod(cx(3,2)+10,70,1.1,15)+arrow(cx(3,2)-30,90,cx(3,2)-14,72)+cap(3,2,'germinate','rods multiply',C.pink))
];
ILL.cdiff=[
svg(frames(2)+capsule(cx(2,0)-16,50,1.2)+capsule(cx(2,0)+16,66,1.2,20)+cap(2,0,'Antibiotics','clinda · cephalo · FQ',C.pink)
 +hospital(cx(2,1),58,1)+cap(2,1,'Hospital stay','older adults · PPIs')),
svg(frames(1)+pm(110,56,1.3)+prod(212,48,1.1,-20,2)+prod(236,66,1.1,15,2)+T(232,92,'subterminal spores',{fs:8.5,c:C.dim})
 +T(160,124,'Pseudomembranous colitis',{fs:10,c:C.ink,w:600})+T(160,136,'watery diarrhea · toxic megacolon risk',{fs:8.5,c:C.pink})),
svg(frames(2)+gel(cx(2,0),58,1.3)+X(cx(2,0),58,16)+cap(2,0,'Alcohol gel','does not kill spores',C.pink)
 +soap(cx(2,1),62,1.4)+water(cx(2,1)+24,40,.7)+cap(2,1,'Soap and water','+ contact precautions')),
svg(frames(3)+vial(cx(3,0),58,1)+cap(3,0,'Oral vancomycin','not IV',C.pink)+pill(cx(3,1),58,1.2,'#7fd6a0','#3f8a5a')+cap(3,1,'Fidaxomicin','fewer recurrences')
 +gut(cx(3,2),56,.8)+cap(3,2,'Recurrence','fecal transplant'))
];
ILL.listeria=[
svg(frames(3)+cheese(cx(3,0),62,1.1)+cap(3,0,'Soft cheese','unpasteurized dairy',C.pink)+deli(cx(3,1),64,1.4)+cap(3,1,'Deli meats','cold cuts')
 +fridge(cx(3,2)-10,60,.9)+flake(cx(3,2)+22,46,.9)+cap(3,2,'Grows at 4 °C','cold enrichment',C.pink)),
svg(frames(2)+person(cx(2,0),60,1.1,'#c47fb0')+`<circle cx="${cx(2,0)+4}" cy="68" r="10" fill="#f3cdb0" opacity=".9"/>`+cap(2,0,'Pregnancy','amnionitis · miscarriage',C.pink)
 +baby(cx(2,1)-12,64,1.2)+brain(cx(2,1)+22,54,.55,true)+cap(2,1,'Neonate','sepsis · meningitis')),
svg(frames(1)+baby(70,64,1)+person(120,60,1,'#8fa8c4')+shield(170,58,.9)+X(170,58,10)+brain(232,56,.9,true)
 +T(160,124,'Meningitis: neonates · elderly · immunocompromised',{fs:9.5,c:C.ink,w:600})+T(160,136,'empiric regimen → add ampicillin',{fs:8.5,c:C.pink})),
svg(frames(1)+`<ellipse cx="110" cy="60" rx="56" ry="38" fill="#2a3f66" stroke="#6b8fc4" stroke-width="2"/><ellipse cx="226" cy="60" rx="50" ry="36" fill="#2a3f66" stroke="#6b8fc4" stroke-width="2"/>`
 +actin(130,56,1.2)+actin(92,72,1,)+`<path d="M166 56 q8 -6 18 -2" stroke="#7fe0b0" stroke-width="3" fill="none"/>`+prod(206,52,1,0)+`<path d="M193 52 L176 46 L176 58z" fill="#7fe0b0" opacity=".75"/>`
 +T(160,124,'Actin “rockets”',{fs:10,c:C.ink,w:600})+T(160,136,'facultative intracellular · cell-to-cell spread',{fs:8.5}))
];
ILL.diph=[
svg(frames(2)+throat(cx(2,0),56,1.1)+`<path d="M${cx(2,0)-16} 58 q16 -12 32 0 q-16 10 -32 0z" fill="#9aa3ae" opacity=".9"/>`+cap(2,0,'Gray pseudomembrane','bleeds if scraped',C.pink)
 +neck(cx(2,1),58,1)+cap(2,1,'“Bull neck”','cervical lymphadenopathy')),
svg(frames(2)+heart(cx(2,0),58,1)+`<path d="M${cx(2,0)-34} 92 l8 0 l4 -10 l4 14 l4 -8 l6 0 l3 -6 l3 10 l4 -4 l8 0" stroke="#7fd6a0" stroke-width="1.6" fill="none"/>`+cap(2,0,'Myocarditis','arrhythmias',C.pink)
 +brain(cx(2,1),48,.6)+`<path d="M${cx(2,1)} 66 v24 M${cx(2,1)} 74 l-14 12 M${cx(2,1)} 74 l14 12" stroke="#f2c94c" stroke-width="2"/>`+cap(2,1,'Neuropathy','cranial nerve palsies')),
svg(frames(3)+tellPlate(cx(3,0),58,1)+cap(3,0,'Tellurite','black colonies',C.pink)+chin(cx(3,1)-6,50,1.2)+cap(3,1,'Löffler','metachromatic granules')
 +`<rect x="${cx(3,2)-30}" y="34" width="60" height="44" rx="4" fill="#e6edf6"/><path d="M${cx(3,2)-30} 56 H${cx(3,2)+30}" stroke="#8fc0ff" stroke-width="3"/><path d="M${cx(3,2)-6} 40 L${cx(3,2)-22} 74 M${cx(3,2)+6} 40 L${cx(3,2)+22} 74" stroke="#b9c6d6" stroke-width="2"/>`+cap(3,2,'Elek test','toxin precipitin line')),
svg(frames(3)+syringe(cx(3,0),58,1.1,-20,'#8fc0ff')+cap(3,0,'Antitoxin','give early',C.pink)+pill(cx(3,1),58,1.2)+cap(3,1,'Penicillin','or erythromycin')
 +shield(cx(3,2),56,1.1)+cap(3,2,'DTaP vaccine','toxoid',C.green))
];
ILL.nocardia=[
svg(frames(1)+soil(110,72,1.6)+`<g opacity=".7">${[0,1,2].map(i=>`<circle cx="${150+i*14}" cy="${50-i*6}" r="${2+i}" fill="#a77cf0"/>`).join('')}</g>`+arrow(196,42,224,48)+lungs(252,58,.8)
 +T(160,124,'Lives in soil',{fs:10,c:C.ink,w:600})+T(160,136,'infection by inhalation',{fs:8.5})),
svg(frames(2)+lungs(cx(2,0),56,1,{cav:true})+cap(2,0,'Pulmonary disease','can mimic TB',C.pink)
 +pill(cx(2,1)-16,54,1)+`<rect x="${cx(2,1)+4}" y="40" width="26" height="30" rx="4" fill="#e6edf6"/>${T(cx(2,1)+17,60,'Tx',{fs:10,c:'#1b2a44',w:700})}`+cap(2,1,'Immunocompromised','transplant · steroids')),
svg(frames(2)+brain(cx(2,0),56,1)+`<circle cx="${cx(2,0)+10}" cy="50" r="8" fill="#f2c94c" stroke="#ff8a96" stroke-width="2.5"/>`+cap(2,0,'Brain abscess','hematogenous spread',C.pink)
 +skin(cx(2,1),60,1,'<circle cx="-6" cy="-8" r="7" fill="#c4447e"/><circle cx="12" cy="-6" r="4.5" fill="#c4447e"/>')+cap(2,1,'Skin','cutaneous infection')),
svg(frames(1)+fil(90,62,1.4,'#c4447e',true)+`<rect x="160" y="40" width="96" height="40" rx="10" fill="#7fd6a0"/>`+T(208,66,'TMP-SMX',{fs:14,c:'#0d2247',w:700})
 +T(160,124,'SNAP: Sulfonamides → Nocardia',{fs:10,c:C.ink,w:600})+T(160,136,'weakly acid-fast · aerobic',{fs:8.5}))
];
ILL.actino=[
svg(frames(3)+face(cx(3,0),58,.9)+cap(3,0,'Mouth','normal flora')+gut(cx(3,1),56,.8)+cap(3,1,'Gut','normal flora')+uterus(cx(3,2),58,.8)+cap(3,2,'Female genital tract','normal flora')),
svg(frames(1)+jaw(110,60,1.3)+`<path d="M164 46 l10 -6 l2 10" stroke="#f2ead3" stroke-width="2" fill="none"/>`+fil(230,58,1.1)
 +T(160,124,'“Lumpy jaw” after dental work',{fs:10,c:C.ink,w:600})+T(160,136,'cervicofacial abscess · draining sinus tracts',{fs:8.5,c:C.pink})),
svg(frames(1)+`<path d="M60 40 Q90 30 120 44 Q140 70 110 86 Q80 96 62 80z" fill="#e8d8a0" opacity=".8"/>`+gran(90,62,1.5)+gran(116,70,.9)+arrow(150,62,186,62)+G(230,62,1,`<circle r="30" fill="#efdde1"/>`+fil(0,0,.8,'#7d4fe0'))
 +T(160,124,'Yellow “sulfur granules”',{fs:10,c:C.ink,w:600})+T(160,136,'filaments inside the pus',{fs:8.5})),
svg(frames(2)+uterus(cx(2,0)-12,60,.9,true)+iud(cx(2,0)+28,58,1)+cap(2,0,'IUD-associated','pelvic infection',C.pink)
 +gran(cx(2,1)-10,56,1.4)+iud(cx(2,1)+22,58,.8)+cap(2,1,'Look for granules','on the device')),
svg(frames(1)+vial(98,58,1.2)+T(98,96,'Penicillin',{fs:10,c:C.ink,w:600})+scissors(220,56,1.1)+T(220,96,'Drainage',{fs:10,c:C.ink,w:600})
 +T(160,124,'SNAP: Actinomyces → Penicillin',{fs:10,c:C.ink,w:600})+T(160,136,'anaerobic · not acid-fast',{fs:8.5}))
];
}
window.ATLAS_ILL=ILL;
})();
