import{A as U,B as b,C as ye,D as Ee,E as be,b as he,e as G,f as ve,g as ue,h as j,i as fe,j as de,k as I,l as me,m as pe,n as ge,o as x,p as E,q as P,r as xe,s as V,t as H,u as ee,v as z,w as we,x as B,y as K,z as te}from"./chunk-SS5RKI5V.js";var W={cyan:"#58ded4",blue:"#82a4ff",violet:"#cf8df6",gold:"#dfc174"},A=u=>[1,3,5].map(a=>parseInt(u.slice(a,a+2),16)/255),Me={wCyan:{grad:["#143942","#0f2a33","#0a1a25"],alpha:.9},wBlue:{grad:["#182e55","#11213f","#0a1728"],alpha:.9},wViolet:{grad:["#38235a","#251c40","#151528"],alpha:.9},wCore:{grad:["#2f5d70","#253558","#261d43"],alpha:.92}};var Y={x1:0,y1:0,x2:1,y2:0,stops:[[0,"#20f4e5",1],[.3,"#23cbd5",1],[.58,"#347dff",1],[.8,"#8b50f5",1],[1,"#f052cf",1]]},Re={x1:1,y1:0,x2:0,y2:1,stops:[[0,"#52f4dd",1],[.43,"#397df4",1],[.72,"#8b56e9",1],[1,"#e657bd",1]]},Te={x1:0,y1:1,x2:1,y2:0,stops:[[0,"#75602f",.22],[.28,"#b8954d",1],[.54,"#dfc174",1],[.78,"#a98342",1],[1,"#65502a",.18]]},Ge=[["M-136 738C44 544 210 558 337 658S595 840 944 562",Y,82,24,.5,0],["M-112 860C90 626 267 690 410 772S677 852 932 682",Re,62,24,.5,0],["M-94 586C99 449 259 464 393 542S665 654 921 456",Y,44,24,.5,0],["M-122 1021C101 830 282 868 438 954S694 1034 938 846",Te,38,24,.5,0],["M-104 720C76 535 215 560 344 654S620 802 914 565",Y,30,10,.36,1],["M-94 844C102 635 269 689 414 769S670 838 908 690",Re,22,10,.36,1],["M-70 575C120 453 270 480 401 551S665 630 892 468",Y,16,10,.36,1],["M-96 1008C118 844 287 877 442 955S688 1015 908 857",Te,11,10,.36,1]],ze=[[0,"#dffcff",.32],[.2,"#58ded4",.2],[.52,"#82a4ff",.1],[.78,"#b353d6",.045],[1,"#071019",0]];function _e(u,a){let e=u.match(/[MCS]|-?\d*\.?\d+/g),t=0,o=null,n=null,s=[];for(;t<e.length;){let l=e[t++],r=()=>parseFloat(e[t++]);if(l==="M")o=[r(),r()];else if(l==="C"){let h=[r(),r()],d=[r(),r()],v=[r(),r()];s.push([o,h,d,v]),n=d,o=v}else if(l==="S"){let h=[2*o[0]-n[0],2*o[1]-n[1]],d=[r(),r()],v=[r(),r()];s.push([o,h,d,v]),n=d,o=v}}let i=[];for(let[l,r,h,d]of s)for(let v=i.length?1:0;v<=120;v++){let f=v/120,c=1-f;i.push(a(c*c*c*l[0]+3*c*c*f*r[0]+3*c*f*f*h[0]+f*f*f*d[0],c*c*c*l[1]+3*c*c*f*r[1]+3*c*f*f*h[1]+f*f*f*d[1]))}return i}var q=`
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), u.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y); }
  float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int k = 0; k < 5; k++){ v += a*noise(p); p *= 2.03; a *= 0.5; } return v; }
  float erf_(float x){ float s = sign(x); x = abs(x); float t = 1.0/(1.0+0.3275911*x);
    float y = 1.0 - (((((1.061405429*t - 1.453152027)*t) + 1.421413741)*t - 0.284496736)*t + 0.254829592)*t*exp(-x*x);
    return s*y; }
  float dither(){ return (hash(gl_FragCoord.xy * 1.37 + 11.3) - .5) / 255.; }
  uniform float stopO[8]; uniform vec4 stopC[8]; uniform int nStops;
  vec4 grad(float t){ t = clamp(t, 0.0, 1.0); vec4 c = stopC[0];
    for (int k = 1; k < 8; k++){ if (k >= nStops) break;
      if (t >= stopO[k-1]) c = mix(stopC[k-1], stopC[k], clamp((t - stopO[k-1]) / max(stopO[k] - stopO[k-1], 1e-5), 0.0, 1.0)); }
    return c; }`,Se=u=>{let a=new Array(8).fill(1),e=new Array(8).fill(0).map(()=>new P(0,0,0,0));return u.forEach(([t,o,n],s)=>{a[s]=t,e[s]=new P(...A(o),n)}),{stopO:{value:a},stopC:{value:e},nStops:{value:u.length}}},ae=`
  uniform vec4 gnd; uniform vec3 gfoc;     // gnd: stage centre, 145° direction · 1/length; gfoc: focus, 1/radius
  uniform vec3 g0, g1, g2, g3;
  vec3 ground(vec2 p){
    float t = dot(p - gnd.xy, gnd.zw) + .5;
    vec3 g = t < .42 ? mix(g0, g1, t / .42) : t < .73 ? mix(g1, g2, (t - .42) / .31) : mix(g2, g3, (t - .73) / .27);
    float r = length(p - gfoc.xy) * gfoc.z;
    return mix(g, vec3(61., 210., 204.) / 255., .075 * clamp(1. - r, 0., 1.));
  }`;function Q(u,a,e,t){let o=145*Math.PI/180,n=[Math.sin(o),-Math.cos(o)],s=Math.abs(a*n[0])+Math.abs(e*n[1]),i=Math.max(...[[0,0],[a,0],[0,e],[a,e]].map(([l,r])=>Math.hypot(l-t.x,r-t.y)));u.gnd.value.set(a/2,e/2,n[0]/s,n[1]/s),u.gfoc.value.set(t.x,t.y,1/(i*.32))}var De=`varying vec2 vp; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vp = vec2(w.x, -w.y);
  gl_Position = projectionMatrix * viewMatrix * w; }`,Oe="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",X=class{constructor(){this.scene=new V,this.halo=new B(new U(1,1),new b({uniforms:{e:{value:new P},...Se(ze)},transparent:!0,depthTest:!1,depthWrite:!1,blending:G,vertexShader:De,fragmentShader:q+`varying vec2 vp; uniform vec4 e;
        void main(){ float r = length((vp - e.xy) / e.zw); if (r > 1.) discard; vec4 g = grad(r); gl_FragColor = vec4(g.rgb, g.a); }`})),this.scene.add(this.halo),this.ribbons=Ge.map(([a,e,t,o,n,s],i)=>{let l=new b({transparent:!0,depthTest:!1,depthWrite:!1,side:he,blending:G,uniforms:{halfW:{value:0},sigma:{value:0},opac:{value:n},K:{value:1},time:{value:0},bb:{value:new P},gv:{value:new P(e.x1,e.y1,e.x2,e.y2)},seed:{value:17+13.7*i},defined:{value:s},fade:{value:new E},...Se(e.stops)},vertexShader:`attribute vec2 across; varying vec2 vA; varying vec2 vP;
          void main(){ vA = across; vP = vec2(position.x, -position.y); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:q+`
          uniform float halfW, sigma, opac, seed, defined, K, time; uniform vec4 bb, gv; uniform vec3 fade;
          varying vec2 vA; varying vec2 vP;
          void main(){
            float d = vA.x, s = sigma * 1.41421356;
            float prof = 0.5 * (erf_((d + halfW) / s) - erf_((d - halfW) / s));
            vec2 q = (vP - bb.xy) / bb.zw; vec2 dir = gv.zw - gv.xy;
            float t = dot(q - gv.xy, dir) / max(dot(dir, dir), 1e-6);
            vec4 c = grad(t);
            float along = vA.y / K, x = d / max(halfW, 0.2);
            float rays = fbm(vec2(along * 0.11 + seed + time * .045, x * 0.9 + time * .012));
            float fine = noise(vec2(along * 0.9 + seed * 3.0 - time * .16, x * 2.5));
            float tex = mix(1.0, 0.84 + 0.26 * rays + 0.06 * (fine - 0.5), 0.5 + 0.25 * defined);
            float core = defined * exp(-pow(d / max(halfW * 0.42, 0.12), 2.0)) * 0.12;
            float breathe = 1. + .07 * sin(time * 6.2831853 / (14. + .7 * seed / 13.7) + seed);
            float lower = mix(1. - fade.z, 1., smoothstep(fade.x, fade.y, vP.x));
            float a = c.a * opac * breathe * lower * clamp(prof * tex + core * prof, 0.0, 1.0);
            gl_FragColor = vec4(c.rgb, a);
          }`}),r=new B(new z,l);return r.userData={d:a,width:t,sigmaU:o},this.scene.add(r),r})}layout(a){let e=(n,s)=>[a.X+n*a.K,a.Y+s*a.K],t=300*a.K,o=275*a.K;this.halo.scale.set(2*t,2*o,1),this.halo.position.set(a.focus.x,-a.focus.y,0),this.halo.material.uniforms.e.value.set(a.focus.x,a.focus.y,t,o);for(let n of this.ribbons){let{d:s,width:i,sigmaU:l}=n.userData,r=_e(s,e),h=i*a.K/2,d=l*a.K,v=h+3.2*d,f=[],c=[],g=[],w=0,C=1e9,R=1e9,D=-1e9,L=-1e9;for(let[p,T]of r)C=Math.min(C,p),D=Math.max(D,p),R=Math.min(R,T),L=Math.max(L,T);for(let p=0;p<r.length;p++){let T=r[Math.max(0,p-1)],F=r[Math.min(r.length-1,p+1)],M=F[0]-T[0],k=F[1]-T[1],y=Math.hypot(M,k)||1;M/=y,k/=y,p>0&&(w+=Math.hypot(r[p][0]-r[p-1][0],r[p][1]-r[p-1][1]));for(let S of[-1,1])f.push(r[p][0]-k*v*S,-(r[p][1]+M*v*S),0),c.push(S*v,w);if(p<r.length-1){let S=2*p;g.push(S,S+1,S+2,S+1,S+3,S+2)}}n.geometry.dispose();let O=new z;O.setAttribute("position",new ee(f,3)),O.setAttribute("across",new ee(c,2)),O.setIndex(g),n.geometry=O;let m=n.material.uniforms;m.halfW.value=h,m.sigma.value=d,m.K.value=a.K,m.bb.value.set(C,R,D-C,L-R),m.fade.value.set(a.fade[0],a.fade[1],a.fade[2])}}tick(a){for(let e of this.ribbons)e.material.uniforms.time.value=a}};function N(u,a){let e=new V,t=new b({uniforms:a,depthTest:!1,depthWrite:!1,vertexShader:Oe,fragmentShader:u});return e.add(new B(new U(2,2),t)),{scene:e,material:t}}var se=`uniform sampler2D src; uniform vec2 stp; varying vec2 vUv;
  void main(){ vec4 a = vec4(0.); float ws = 0.;
    for (int i = -12; i <= 12; i++){ float w = exp(-float(i * i) / 32.); a += texture2D(src, vUv + stp * float(i)) * w; ws += w; }
    gl_FragColor = a / ws; }`,ke=q+ae+`
  uniform sampler2D aur, far; uniform vec2 stage, farTile, farOff; uniform float gain, starGain;
  varying vec2 vUv;
  void main(){
    vec2 p = vec2(vUv.x, 1. - vUv.y) * stage;
    vec3 g = ground(p);
    vec3 a = clamp(texture2D(aur, vUv).rgb * gain, 0., 1.);
    vec3 col = 1. - (1. - g) * (1. - a);
    // the dust and the countless faint grains of the site's far tile, kept low: the stars themselves are points
    // (scenes/stars.js), drawn over this
    vec3 f = max(texture2D(far, (p + farOff) / farTile).rgb - vec3(4., 10., 16.) / 255., 0.) / (1. - vec3(4., 10., 16.) / 255.);
    vec3 st = f * starGain;
    col = 1. - (1. - col) * (1. - st);
    gl_FragColor = vec4(col + dither(), 0.);        // alpha 0: sky (the honeycomb writes 1, the sea reads it)
  }`,Ae=q+ae+`
  uniform sampler2D seen; uniform vec2 stage, c, buf; uniform vec3 t0, t1, t2, acc; uniform float alpha, r, bw, gloss, mmPx;
  uniform float lit, sea, seaA, time, aurGain, hover;
  varying vec2 vp;
  float surface(float x){ return sea + seaA * (.6 * sin(x * .01496 + time * .698) + .4 * sin(x * .03696 - time * .483)); }
  void main(){
    vec2 P = vp;                                                       // stage px
    vec2 p = (P - c) / mmPx;                                           // mm from the centre
    vec2 hb = vec2(r, r * .8660254);
    vec2 q = (p + hb) / (2. * hb);
    float e = 1e9; vec2 n = vec2(0.);
    float a = r * .8660254;
    for (int k = 0; k < 6; k++){ float th = radians(30. + 60. * float(k)); vec2 nk = vec2(cos(th), sin(th));
      float dk = a - dot(p, nk); if (dk < e) { e = dk; n = nk; } }
    if (e < 0.) discard;
    float u = clamp(1. - e / bw, 0., 1.);
    float tilt = u * u * (3. - 2. * u);
    vec3 N = normalize(vec3(n * tilt * 2.6, 1.));
    // transmission: what lies behind the glass (the ground and the blurred aurora), bent at the edge
    vec2 uv = gl_FragCoord.xy / buf + vec2(n.x, -n.y) * tilt * .9 * mmPx / stage;
    vec3 b = 1. - (1. - ground(P)) * (1. - clamp(texture2D(seen, uv).rgb * aurGain, 0., 1.));
    float g = clamp((q.x + q.y) * .5, 0., 1.);
    vec3 tint = g < .54 ? mix(t0, t1, g / .54) : mix(t1, t2, (g - .54) / .46);
    vec3 col = mix(b, tint, clamp(alpha + (1. - alpha) * .45 * tilt, 0., 1.));
    col *= mix(1.07, .86, q.y);
    vec3 Rf = vec3(2. * N.z * N.xy, 2. * N.z * N.z - 1.);
    vec2 h = length(Rf.xy) > 1e-4 ? normalize(Rf.xy) : vec2(0.);
    vec3 hz = vec3(.35, .87, .83) * max(-h.y, 0.) + vec3(.81, .55, .96) * .75 * max(h.y, 0.)
            + vec3(.51, .64, 1.) * .8 * max(h.x, 0.) + vec3(.87, .76, .45) * .45 * max(-h.x, 0.);
    vec3 env = mix(hz, vec3(.02, .035, .05), smoothstep(0., .95, Rf.z));
    float F = .04 + .96 * pow(1. - N.z, 5.);
    col += env * F * 1.15 * gloss;
    vec3 Hh = normalize(normalize(vec3(-.5, -.8, .55)) + vec3(0., 0., 1.));
    col += vec3(.94, .98, 1.) * pow(max(dot(N, Hh), 0.), 40.) * .5 * gloss * step(.001, tilt);
    col *= 1. - .24 * exp(-e / (bw * 1.4)) * (1. - exp(-e / .10));
    float up = max(-n.y, 0.), dn = max(n.y, 0.);
    float rim = exp(-pow((e - .30) / .11, 2.));
    col += vec3(.93, .97, 1.) * rim * (.32 * pow(up, 1.3) + .05) * gloss;
    col += acc * rim * .14 * pow(dn, 1.2) * gloss;
    vec2 dv = vec2(.85, 1.); float s = clamp(dot(q, dv) / dot(dv, dv), 0., 1.);
    float sa = s < .28 ? mix(.16, .05, s / .28) : s < .55 ? mix(.05, 0., (s - .28) / .27) : mix(0., .035, (s - .55) / .45);
    col = mix(col, s < .55 ? vec3(1.) : vec3(159., 233., 255.) / 255., sa * .45 * gloss * (1. - tilt));
    float box = 1. - smoothstep(.37, .43, s);
    col = mix(col, vec3(1.), (.045 + .045 * (1. - s / .43)) * box * gloss * (1. - tilt));
    float box2 = smoothstep(.47, .50, s) * (1. - smoothstep(.56, .61, s));
    col = mix(col, vec3(.80, .93, 1.), .02 * box2 * gloss * (1. - tilt));
    col += vec3(.75, .9, 1.) * exp(-pow((e - bw) / .07, 2.)) * .035 * gloss;
    // the edge: the accent hairline of the series' HUD, drawn here so that the sea can change it — dark above the
    // water (the accent at a quarter of its lightness), the accent itself below; hover and focus brighten it
    float under = smoothstep(-.6, .6, P.y - surface(P.x));
    float ew = .34 * (1. + .35 * hover);
    float edge = 1. - smoothstep(ew * .5, ew * .5 + 1.1 / mmPx, abs(e - .1 - ew * .5));
    vec3 dim = mix(vec3(.06, .09, .11), acc, .26 + .18 * hover);
    vec3 lc = mix(dim, acc * (1.12 + .2 * hover), max(under, lit));
    col = mix(col, lc, edge);
    gl_FragColor = vec4(col + dither(), 1.);
  }`,Ce=q+ae+`
  uniform sampler2D scene, seen; uniform vec2 stage; uniform float sea, seaA, time, horizon, aurGain;
  varying vec2 vUv;
  float surface(float x){ return sea + seaA * (.6 * sin(x * .01496 + time * .698) + .4 * sin(x * .03696 - time * .483)); }
  vec4 at4(vec2 p){ p = clamp(p, vec2(.5), stage - .5); return texture2D(scene, vec2(p.x, stage.y - p.y) / stage); }
  vec3 at(vec2 p){ return at4(p).rgb; }
  float waves(vec2 w){ return fbm(w) * .65 + noise(w * 3.1 + 7.7) * .35; }
  float swell(vec2 w){ return noise(w) * .7 + noise(w * 1.9 + 3.3) * .3; }
  void main(){
    vec2 p = vec2(vUv.x, 1. - vUv.y) * stage;
    float s = surface(p.x), d = p.y - s;
    vec3 above = at(p);
    if (d < -1.5) { gl_FragColor = vec4(above, 1.); return; }
    // the sea plane seen from just above it: depth d on the screen ↔ distance D on the water
    float dd = max(d, 0.), depth = clamp(dd / stage.y, 0., 1.);
    float D = horizon / (dd + 5.);
    vec2 w = vec2(p.x * D * .0016, D * .55 + time * .035);
    float h0 = waves(w), hx = waves(w + vec2(.07, 0.)), hy = waves(w + vec2(0., .07));
    vec2 nrm = vec2(hx - h0, hy - h0) / .07;
    // the long swell: what the water lets through bends with it only (a smooth, slow displacement, no ripples)
    vec2 ws = w * .35 + vec2(time * .02, 0.);
    float s0 = swell(ws);
    vec2 sn = vec2(swell(ws + vec2(.2, 0.)) - s0, swell(ws + vec2(0., .2)) - s0) / .2;
    // what the water reflects: the stage mirrored about the line, broken by the ripples
    // near the line the water mirrors the stage; deeper, where the mirror looks above the top of the stage, it
    // mirrors the zenith: the ground of the covers and the faint, blurred aurora there, smooth (the stars of the zenith
    // are points, scenes/stars.js MirrorStars)
    float ry = s - dd - nrm.y * (.45 + dd * .022);
    vec2 zt = vec2(p.x, 0.);
    vec3 zen = 1. - (1. - ground(zt)) * (1. - clamp(texture2D(seen, vec2(p.x / stage.x, .995)).rgb * aurGain, 0., 1.));
    float inFrame = smoothstep(0., 90., ry);
    vec3 refl = mix(zen, at(vec2(p.x + nrm.x * (.5 + dd * .008), max(ry, 1.))), inFrame);
    // what it lets through: a submerged cell (alpha 1 in the stage), seen a little bent and darkened with depth;
    // elsewhere the deep water, which shows only what it reflects
    vec4 th = at4(vec2(p.x + sn.x * (1.2 + dd * .006), p.y + sn.y * (.8 + dd * .004)));
    float cell = smoothstep(.2, .8, th.a);
    vec3 water = vec3(.010, .034, .048);
    vec3 thru = th.rgb * vec3(.74, .88, .94) * mix(1., .62, smoothstep(0., .7, depth));
    float Fw = mix(.88, .46, smoothstep(0., .6, depth)) * (.9 + .2 * smoothstep(.35, .75, h0));
    float Fc = mix(.50, .07, smoothstep(0., .22, depth)) * (.86 + .28 * smoothstep(.35, .75, h0));
    float ryc = s - dd - sn.y * (.6 + dd * .01);
    vec3 reflC = mix(zen, at(vec2(p.x + sn.x * (.8 + dd * .004), max(ryc, 1.))), smoothstep(0., 90., ryc));
    vec3 col = mix(mix(water, refl * .78, Fw), mix(thru, reflC * .78, Fc), cell);
    // the line: the sky just above it, reflected at a grazing angle — the only bright thing the sea makes
    vec3 sky = at(vec2(p.x, s - 4.));
    col += (sky * .55 + vec3(.035, .05, .06)) * exp(-pow(d / 1.05, 2.)) * .8;
    col = mix(above, col, smoothstep(-1.5, .5, d));
    gl_FragColor = vec4(col + dither(), 1.);
  }`;function re(u){let a=u>>>0;return()=>{a=a+1831565813>>>0;let e=a;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var oe=u=>Math.sqrt(-2*Math.log(u()+1e-9))*Math.cos(2*Math.PI*u()),ie=(u,a,e,t)=>{let o=1-t;return(a**o+u()*(e**o-a**o))**(1/o)};function ne(u,a=0){let e=Math.exp(Math.log(7200+1800*a)+.32*oe(u));e=Math.min(Math.max(e,2900),22e3)/100;let t=e<=66?255:329.698727446*(e-60)**-.1332047592,o=e<=66?99.4708025861*Math.log(e)-161.1195681661:288.1221695283*(e-60)**-.0755148492,n=e>=66?255:e<=19?0:138.5177312231*Math.log(e-10)-305.0447927307,s=[t,o,n].map(r=>Math.min(Math.max(r,0),255)/255),i=Math.max(...s);s=s.map(r=>r/i);let l=(s[0]+s[1]+s[2])/3;return s.map(r=>.68*r+.32*l*.92/Math.max(l,1e-6)*l)}var le=`
  varying vec3 vC; varying float vS, vA, vH, vR;
  void main(){
    float d = length(gl_PointCoord - .5) * vS;                  // px from the centre
    float core = exp(-d * d / (2. * vR * vR));                   // a Gaussian of sub-pixel width: the star itself
    float halo = vH * exp(-d * d / (2. * (vS * .16) * (vS * .16)));
    float a = (core + halo) * vA;
    if (a < .004) discard;
    gl_FragColor = vec4(vC * a, a);
  }`,$=class{constructor(a=20261029){let e=re(a),t=5200,o=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*4);for(let l=0;l<t;l++){let r,h;do r=e(),h=e();while(e()>.35+.65*Math.exp(-(((h-.78+.55*r)/.22)**2)));let d=e()<.011,v=d?1.2+1.3*e():ie(e,.07,1,2.7),f=ne(e,d?oe(e)*.6:.25);o.set([r,h,0],l*3),n.set(f,l*3),s.set([v,e()<.17?1:0,e()*6.2832,8+8*e()],l*4)}let i=new z;i.setAttribute("position",new H(o,3)),i.setAttribute("colour",new H(n,3)),i.setAttribute("star",new H(s,4)),this.uniforms={stage:{value:new x(1,1)},time:{value:0},dpr:{value:1},density:{value:1},off0:{value:new x},off1:{value:new x},gain:{value:1}},this.points=new K(i,new b({uniforms:this.uniforms,transparent:!0,depthTest:!1,depthWrite:!1,blending:G,vertexShader:`
        attribute vec3 colour; attribute vec4 star; uniform vec2 stage, off0, off1; uniform float time, dpr, density, gain;
        varying vec3 vC; varying float vS, vA, vH, vR;
        void main(){
          // thin the field on a small stage (density = stars per unit area, relative to 1440 × 900)
          float keep = step(fract(sin(float(gl_VertexID) * 12.9898) * 43758.5453), density);
          vec2 p = position.xy * stage + mix(off0, off1, star.y);
          p = mod(p + 40., stage + 80.) - 40.;
          float f = star.x, tw = 1. + .16 * sin(time * 6.2831853 / star.w + star.z) * smoothstep(.25, .8, f);
          vA = clamp(f * 1.15, 0., 1.5) * tw * gain * keep;
          vH = f > 1.1 ? .04 * f : 0.;                             // the brightest: a small halo, the star's own light
          vR = (.36 + .42 * min(f, 1.) + .25 * max(f - 1., 0.)) * dpr;
          vS = (f > 1.1 ? 22. : 6.) * dpr;
          vC = colour;
          gl_PointSize = vS;
          gl_Position = projectionMatrix * viewMatrix * vec4(p.x, -p.y, 0., 1.);
        }`,fragmentShader:le})),this.points.frustumCulled=!1}layout(a,e,t){this.uniforms.stage.value.set(a,e),this.uniforms.dpr.value=t,this.uniforms.density.value=Math.min(1,Math.max(.32,a*e/(1440*900)))}},Z=class{constructor(a=77){let e=re(a),t=9e3,o=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*4);for(let l=0;l<t;l++)o.set([e(),e(),0],l*3),n.set(ne(e,.1),l*3),s.set([ie(e,.12,1,2),e()*6.2832,8+7*e(),e()],l*4);let i=new z;i.setAttribute("position",new H(o,3)),i.setAttribute("colour",new H(n,3)),i.setAttribute("glint",new H(s,4)),this.uniforms={stage:{value:new x(1,1)},time:{value:0},dpr:{value:1},sea:{value:0},seaA:{value:1.6},density:{value:1},scene:{value:null},gain:{value:1}},this.points=new K(i,new b({uniforms:this.uniforms,transparent:!0,depthTest:!1,depthWrite:!1,blending:G,vertexShader:`
        attribute vec3 colour; attribute vec4 glint; uniform vec2 stage; uniform float time, dpr, sea, seaA, density, gain;
        uniform sampler2D scene; varying vec3 vC; varying float vS, vA, vH, vR;
        float surface(float x){ return sea + seaA * (.6 * sin(x * .01496 + time * .698) + .4 * sin(x * .03696 - time * .483)); }
        void main(){
          float keep = step(glint.w, density);
          float span = stage.y + 40. - sea;
          float v = position.y, d = span * pow(v, 2.4);
          float x = position.x * (stage.x + 40.) - 20.;
          // a slow swell carries the points sideways a little; nearer points move more
          x += sin(time * .21 + v * 9. + position.x * 17.) * (1.5 + 10. * v);
          float y = surface(x) + 1.2 + d;
          // a glint: the wave facet turns to the eye and away again (8–15 s), sharper near the horizon
          float ph = time * 6.2831853 / glint.z + glint.y + x * .004;
          float tw = .28 + .72 * pow(max(0., sin(ph)), mix(4., 1.8, v));
          // over a submerged cell (alpha 1 in the stage) the water shows less of its own light
          vec4 st = texture2D(scene, vec2(x, stage.y - y) / stage);
          float over = mix(1., .45, smoothstep(.2, .8, st.a));
          vA = glint.x * tw * mix(.62, 1.05, smoothstep(0., .5, v)) * over * gain * keep * step(sea, stage.y - 1.);
          vH = 0.;
          vR = mix(.38, .85, v) * dpr;
          vS = mix(3., 6.5, v) * dpr;
          vC = mix(colour, st.rgb / max(max(st.r, max(st.g, st.b)), .05), .4);    // and the light it reflects
          gl_PointSize = vS;
          gl_Position = projectionMatrix * viewMatrix * vec4(x, -y, 0., 1.);
        }`,fragmentShader:le})),this.points.frustumCulled=!1}layout(a,e,t){this.uniforms.stage.value.set(a,e),this.uniforms.dpr.value=t,this.uniforms.density.value=Math.min(1,Math.max(.3,a*e/(1440*900)))}},J=class{constructor(a=4242){let e=re(a),t=5200,o=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*4);for(let l=0;l<t;l++){let r=e()<.009;o.set([e(),e(),0],l*3),n.set(ne(e,r?oe(e)*.6:.25),l*3),s.set([r?1.1+1.1*e():ie(e,.07,1,2.7),e()*6.2832,8+8*e(),e()],l*4)}let i=new z;i.setAttribute("position",new H(o,3)),i.setAttribute("colour",new H(n,3)),i.setAttribute("star",new H(s,4)),this.uniforms={stage:{value:new x(1,1)},time:{value:0},dpr:{value:1},sea:{value:0},seaA:{value:1.6},density:{value:1},scene:{value:null},gain:{value:.62}},this.points=new K(i,new b({uniforms:this.uniforms,transparent:!0,depthTest:!1,depthWrite:!1,blending:G,vertexShader:`
        attribute vec3 colour; attribute vec4 star; uniform vec2 stage; uniform float time, dpr, sea, seaA, density, gain;
        uniform sampler2D scene; varying vec3 vC; varying float vS, vA, vH, vR;
        void main(){
          float keep = step(star.w, density);
          float x = position.x * stage.x;
          float d0 = max(sea - 90., 0.);                          // the depth at which the mirror of the stage ends
          float y = sea + d0 + position.y * (stage.y + 90.);
          float dd = y - sea;
          x += sin(time * .23 + position.y * 31. + position.x * 7.) * (.6 + dd * .006);
          y += sin(time * .17 + position.x * 23.) * (.4 + dd * .003);
          float fade = sea < 1. ? 0. : smoothstep(d0, d0 + 90., dd);
          vec4 st = texture2D(scene, vec2(x, stage.y - y) / stage);
          float over = mix(1., .35, smoothstep(.2, .8, st.a));
          float f = star.x, tw = 1. + .16 * sin(time * 6.2831853 / star.z + star.y) * smoothstep(.25, .8, f);
          vA = clamp(f * 1.15, 0., 1.5) * tw * gain * keep * fade * over * step(y, stage.y + 4.);
          vH = f > 1.1 ? .03 * f : 0.;
          vR = (.36 + .42 * min(f, 1.) + .2 * max(f - 1., 0.)) * dpr;
          vS = (f > 1.1 ? 18. : 6.) * dpr;
          vC = colour;
          gl_PointSize = vS;
          gl_Position = projectionMatrix * viewMatrix * vec4(x, -y, 0., 1.);
        }`,fragmentShader:le})),this.points.frustumCulled=!1}layout(a,e,t){this.uniforms.stage.value.set(a,e),this.uniforms.dpr.value=t,this.uniforms.density.value=Math.min(1,Math.max(.32,a*e/(1440*900)))}};var Le={centre:[0,0],top:[0,-2],"upper-right":[1,-1],"lower-right":[1,1],bottom:[0,2],"lower-left":[-1,1],"upper-left":[-1,-1]};var Ue={cyan:"wCyan",blue:"wBlue",violet:"wViolet"},_=24.4,Fe=.62,Pe=u=>u*u*(3-2*u),Ve=class{constructor(a,e={}){this.stage=a,this.canvas=a.querySelector("canvas"),this.hcEl=a.querySelector(".hc"),this.cellEls=[...a.querySelectorAll(".hc .cell")],this.frames=[...document.querySelectorAll("[data-sea]")],this.fins=[...document.querySelectorAll(".frames .fin")],this.reduced=e.reduced,this.fixed=e.fixed||{},this.level=this.fixed.sea??(this.reduced?Fe:0),this.shown=this.level,this.hover=new Map,this.par={x:0,y:0,tx:0,ty:0},this.slow=0,this.t0=performance.now();let t=this.renderer=new be({canvas:this.canvas,antialias:!1,alpha:!1,powerPreference:"high-performance"});t.outputColorSpace=ge,t.toneMapping=fe,t.autoClear=!1,this.dprMax=Math.min(window.devicePixelRatio||1,1.75),this.dpr=this.dprMax,this.cam=new Ee(0,1,0,-1,-50,50),this.aurora=new X,this.glass=new V;let o=s=>{let i=new ye().load(s,()=>{this.loaded=(this.loaded||0)+1,this.wake()});return i.wrapS=i.wrapT=de,i.colorSpace=pe,i.generateMipmaps=!1,i.minFilter=I,i};this.far=o(a.dataset.far),this.sky=N(ke,{aur:{value:null},far:{value:this.far},stage:{value:new x},farTile:{value:new x(+a.dataset.farTile,+a.dataset.farTile)},farOff:{value:new x},gain:{value:.87},starGain:{value:.5},...ce()}),this.skyStars=new $;let n=this.skyStars.points.material;n.blending=ve,n.blendSrc=j,n.blendDst=j,n.blendSrcAlpha=ue,n.blendDstAlpha=j,this.starScene=new V,this.starScene.add(this.skyStars.points),this.seaStars=new Z,this.mirrorStars=new J,this.seaStarScene=new V,this.seaStarScene.add(this.mirrorStars.points),this.seaStarScene.add(this.seaStars.points),this.blurH=N(se,{src:{value:null},stp:{value:new x}}),this.blurV=N(se,{src:{value:null},stp:{value:new x}}),this.sea=N(Ce,{scene:{value:null},seen:{value:null},stage:{value:new x},sea:{value:0},seaA:{value:1.6},time:{value:0},horizon:{value:900},aurGain:{value:.87},...ce()}),this.cells=this.cellEls.map(s=>{let i=s.dataset.colour,l=s.dataset.series==="01",r=Me[l?"wCore":Ue[i]],h=r.grad.map(A),d=new b({depthTest:!1,depthWrite:!1,vertexShader:qe,fragmentShader:Ae,uniforms:{seen:{value:null},stage:{value:new x},buf:{value:new x},c:{value:new x},t0:{value:new E(...h[0])},t1:{value:new E(...h[1])},t2:{value:new E(...h[2])},acc:{value:new E(...A(l?W.blue:W[i]))},alpha:{value:r.alpha},r:{value:1},bw:{value:1},gloss:{value:1},mmPx:{value:1},lit:{value:0},sea:{value:0},seaA:{value:1.6},time:{value:0},aurGain:{value:.87},hover:{value:0},...ce()}}),v=new B(new te(1,6),new we({color:132361})),f=new B(new te(1,6),d);v.renderOrder=0,f.renderOrder=1,this.glass.add(v),this.glass.add(f);let c={el:s,pos:s.dataset.pos,series:s.dataset.series,colour:i,mesh:f,back:v,mat:d,hover:0,lift:0},g=()=>{c.target=1,this.wake()},w=()=>{c.target=0,this.wake()};return s.addEventListener("pointerenter",g),s.addEventListener("pointerleave",w),s.addEventListener("focus",g),s.addEventListener("blur",w),c}),this.marks=new V,this.kernel=Be("float k = 1. - smoothstep(.42, .5, abs(q.y)); col = acc; a = k;",W.cyan),this.ports=this.cells.filter(s=>s.pos!=="centre"&&s.pos!=="top").map(s=>Be(`float d = length(q); float ring = 1. - smoothstep(.05, .10, abs(d - .78));
            a = 1. - smoothstep(.84, .90, d); col = mix(vec3(.02, .067, .106), acc, ring);`,W[s.colour]));for(let s of[this.kernel,...this.ports])this.marks.add(s);this.layout(),this.observe()}layout(){let a=this.stage.getBoundingClientRect(),e=this.hcEl.getBoundingClientRect(),t=Math.max(1,Math.round(a.width)),o=Math.max(1,Math.round(a.height));this.W=t,this.H=o;let n=e.width/5,s=Math.sqrt(3)/2*n,i=e.left-a.left+e.width/2,l=e.top-a.top+e.height/2,r=n/_,h=_/14.55;this.G={R:n,DY:s,cx:i,cy:l,mmPx:r,top:l-3*s,bottom:l+3*s};let d=this.renderer;d.setPixelRatio(this.dpr),d.setSize(t,o,!1);let v=d.getDrawingBufferSize(new x);this.cam.left=0,this.cam.right=t,this.cam.top=0,this.cam.bottom=-o,this.cam.updateProjectionMatrix();let f=(m,p)=>new xe(Math.max(2,Math.round(m)),Math.max(2,Math.round(p)),{minFilter:I,magFilter:I,depthBuffer:!1,type:me});for(let m of["aurRT","bA","bB","sceneRT"])this[m]?.dispose();this.aurRT=f(v.x/2,v.y/2),this.bA=f(v.x/4,v.y/4),this.bB=f(v.x/4,v.y/4),this.sceneRT=f(v.x,v.y);let c=t>=900&&t>o,g=Math.max(t,2.4*e.width)*1.06/816,w={x:i,y:l-.08*e.height};this.aurora.layout({K:g,X:i-.72*816*g,Y:l-700*g+(c?.02:-.04)*e.height,focus:w,fade:c?[.12*t,.64*t,.55]:[0,1,0]});let C=this.sky.material.uniforms;C.stage.value.set(t,o),C.aur.value=this.aurRT.texture,Q(C,t,o,w),this.blurH.material.uniforms.src.value=this.aurRT.texture,this.blurH.material.uniforms.stp.value.set(1/this.bA.width*1.6,0),this.blurV.material.uniforms.src.value=this.bA.texture,this.blurV.material.uniforms.stp.value.set(0,1/this.bA.height*1.6);let R=this.sea.material.uniforms;R.scene.value=this.sceneRT.texture,R.seen.value=this.bB.texture,R.stage.value.set(t,o),R.horizon.value=Math.max(o,600),Q(R,t,o,w),this.mirrorStars.layout(t,o,this.dpr),this.mirrorStars.uniforms.scene.value=this.sceneRT.texture,this.skyStars.layout(t,o,this.dpr),this.seaStars.layout(t,o,this.dpr),this.seaStars.uniforms.scene.value=this.sceneRT.texture;for(let m of this.cells){let[p,T]=Le[m.pos],F=i+p*1.5*n,M=l+T*s;m.x=F,m.y=M;let k=Math.max(.22,_*.018);m.mesh.scale.setScalar((_-k)*r),m.back.scale.setScalar((_+.06)*r);let y=m.mat.uniforms;y.seen.value=this.bB.texture,y.stage.value.set(t,o),y.buf.value.copy(v),y.c.value.set(F,M),y.r.value=_-k,y.bw.value=_*.05,y.mmPx.value=r,Q(y,t,o,w)}let D=l-s,L=n-1.6*h*r,O=.8*h*r;this.kernel.scale.set(L,O*2.2,1),this.kernel.position.set(i,-D,0),this.kernel.userData={x:i,y:D},this.ports.forEach((m,p)=>{let T=this.cells.filter(y=>y.pos!=="centre"&&y.pos!=="top")[p],F=(T.x+i)/2,M=(T.y+l)/2,k=.82*h*r*1.25;m.scale.set(2*k,2*k,1),m.position.set(F,-M,0),m.userData={x:F,y:M}}),this.levels=this.frames.map(m=>this.levelOf(m.dataset.sea)),this.dirty=!0}seaY(a){let{top:e,bottom:t,R:o}=this.G,n=t+.16*o,s=e-.22*o;return n+(s-n)*a}levelOf(a){if(a.startsWith("row:")){let e=+a.slice(4),{cy:t,DY:o,R:n}=this.G,s=t+(1-e)*o,i=this.seaY(0),l=this.seaY(1);return(i-(s-.1*n))/(i-l)}return+a}target(){if(this.fixed.sea!=null)return this.fixed.sea;if(this.reduced)return Fe;let a=innerHeight*.5,e=this.frames.map(t=>{let o=t.getBoundingClientRect();return o.top+o.height/2});if(!e.length||a<=e[0])return this.levels[0]??0;for(let t=0;t<e.length-1;t++)if(a<=e[t+1])return this.levels[t]+(this.levels[t+1]-this.levels[t])*Pe((a-e[t])/Math.max(1,e[t+1]-e[t]));return this.levels[this.levels.length-1]}observe(){this.visible=!0,new IntersectionObserver(e=>{this.visible=e[0].isIntersecting,this.wake()},{threshold:0}).observe(this.stage),document.addEventListener("visibilitychange",()=>this.wake()),addEventListener("scroll",()=>this.wake(),{passive:!0});let a=0;new ResizeObserver(()=>{cancelAnimationFrame(a),a=requestAnimationFrame(()=>{this.layout(),this.wake()})}).observe(this.stage),!this.reduced&&matchMedia("(pointer: fine)").matches&&addEventListener("pointermove",e=>{this.par.tx=(e.clientX/innerWidth-.5)*2,this.par.ty=(e.clientY/innerHeight-.5)*2,this.wake()},{passive:!0})}wake(){this.raf||(this.raf=requestAnimationFrame(a=>this.frame(a)))}frame(a){if(this.raf=0,!this.visible||document.hidden)return;let e=this.reduced||this.fixed.t!=null,t=this.fixed.t??(this.reduced?0:(a-this.t0)/1e3),o=Math.min(.1,Math.max(0,(a-(this.last||a))/1e3));this.last=a;let n=this.target();this.shown=e||this.fixed.sea!=null?n:this.shown+(n-this.shown)*(1-Math.exp(-o/.18));let s=Math.abs(n-this.shown)>1e-4,i=1-Math.exp(-o/.6);this.par.x+=(this.par.tx-this.par.x)*i,this.par.y+=(this.par.ty-this.par.y)*i,s||(s=Math.abs(this.par.tx-this.par.x)+Math.abs(this.par.ty-this.par.y)>.001);for(let r of this.cells){let h=r.target??0;r.hover+=(h-r.hover)*(1-Math.exp(-o/.12)),Math.abs(h-r.hover)>.001&&(s=!0)}if(this.draw(t,this.seaY(this.shown)),this.W<900||this.W<=this.H){let r=this.hcEl.getBoundingClientRect().bottom-64;for(let h of this.fins)h.style.setProperty("--cut",`${Math.round(r-h.getBoundingClientRect().top)}px`)}!this.ready&&this.loaded===1&&(this.ready=!0,this.stage.classList.add("gl-ready"),document.body.dataset.gl="ready");let l=performance.now();e?s&&this.wake():(this.slow=l-a>20?this.slow+1:0,this.slow>30&&this.dpr>1&&(this.dpr=1,this.layout()),this.wake())}draw(a,e){let t=this.renderer,{W:o,H:n}=this;this.aurora.tick(a);let s=this.par.x,i=this.par.y;this.sky.material.uniforms.farOff.value.set(s*2,i*1.5);let r=this.skyStars.uniforms;r.time.value=a,r.off0.value.set(s*3,i*2),r.off1.value.set(s*9,i*6-scrollY*.02),t.setRenderTarget(this.aurRT),t.setClearColor(0,1),t.clear(),t.render(this.aurora.scene,this.cam),t.setRenderTarget(this.bA),t.clear(),t.render(this.blurH.scene,this.cam),t.setRenderTarget(this.bB),t.clear(),t.render(this.blurV.scene,this.cam),t.setRenderTarget(this.sceneRT),t.clear(),t.render(this.sky.scene,this.cam),t.render(this.starScene,this.cam);let h=this.reduced?0:1.6;for(let c of this.cells){let g=4*Pe(Math.min(1,c.hover));c.mesh.position.set(c.x,-(c.y-g),0),c.back.position.set(c.x,-(c.y-g),0);let w=c.mat.uniforms;w.c.value.set(c.x,c.y-g),w.sea.value=e,w.seaA.value=h,w.time.value=a,w.hover.value=c.hover,c.el.classList.toggle("risen",e<c.y-.25*this.G.R)}for(let c of[this.kernel,...this.ports]){let g=c.material.uniforms;g.sea.value=e,g.seaA.value=h,g.time.value=a}this.fixed.nocells||(t.render(this.glass,this.cam),t.render(this.marks,this.cam));let d=this.sea.material.uniforms;d.sea.value=e,d.seaA.value=h,d.time.value=a,t.setRenderTarget(null),t.clear(),t.render(this.sea.scene,this.cam);let v=this.seaStars.uniforms;v.sea.value=e,v.seaA.value=h,v.time.value=a;let f=this.mirrorStars.uniforms;f.sea.value=e,f.seaA.value=h,f.time.value=a,t.render(this.seaStarScene,this.cam),this.stage.dataset.sea=String(+this.shown.toFixed(4))}},qe=`varying vec2 vp; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vp = vec2(w.x, -w.y);
  gl_Position = projectionMatrix * viewMatrix * w; }`;function ce(){return{gnd:{value:new P},gfoc:{value:new E},g0:{value:new E(...A("#040a10"))},g1:{value:new E(...A("#07131e"))},g2:{value:new E(...A("#10142a"))},g3:{value:new E(...A("#070b15"))}}}function Be(u,a){let e=new b({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{accU:{value:new E(...A(a))},sea:{value:0},seaA:{value:1.6},time:{value:0}},vertexShader:`varying vec2 q; varying vec2 vp; void main(){ q = position.xy * 2.; vec4 w = modelMatrix * vec4(position, 1.);
      vp = vec2(w.x, -w.y); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform vec3 accU; uniform float sea, seaA, time; varying vec2 q; varying vec2 vp;
      float surface(float x){ return sea + seaA * (.6 * sin(x * .01496 + time * .698) + .4 * sin(x * .03696 - time * .483)); }
      void main(){ vec3 col = vec3(0.); float a = 0.;
        float under = smoothstep(-.6, .6, vp.y - surface(vp.x));
        vec3 acc = mix(mix(vec3(.06, .09, .11), accU, .26), accU * 1.12, under);
        ${u}
        if (a < .003) discard; gl_FragColor = vec4(col, a); }`});return new B(new U(1,1),e)}export{Ve as Hero};
