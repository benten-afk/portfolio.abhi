/* Cyberpunk 3D scene. Original portfolio content and links remain untouched. */
(async()=>{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const mobile=matchMedia('(max-width: 760px)').matches;
 const root=document.getElementById('immersive-scene'); if(!root)return;
 try{
  const THREE=await import('https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js');
  const scene=new THREE.Scene(); scene.fog=new THREE.FogExp2(0x05020b,.038);
  const camera=new THREE.PerspectiveCamera(48,innerWidth/innerHeight,.1,120); camera.position.z=12;
  const renderer=new THREE.WebGLRenderer({alpha:true,antialias:!mobile,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,mobile?1.2:1.65));renderer.setSize(innerWidth,innerHeight);
  renderer.setClearColor(0,0);renderer.outputColorSpace=THREE.SRGBColorSpace;root.appendChild(renderer.domElement);
  document.body.classList.add('cyberpunk-3d-ready');
  const grid=new THREE.GridHelper(44,48,0xff2638,0x49205d);grid.position.set(0,-4.8,-5);grid.material.transparent=true;grid.material.opacity=.24;scene.add(grid);
  const knot=new THREE.Mesh(new THREE.TorusKnotGeometry(1.32,.32,180,20,2,3),new THREE.MeshStandardMaterial({color:0xff2638,metalness:.78,roughness:.2,emissive:0x6f001c,emissiveIntensity:1.25}));
  knot.position.set(3,.35,-2.6);scene.add(knot);
  const ring1=new THREE.Mesh(new THREE.TorusGeometry(2.05,.018,8,150),new THREE.MeshBasicMaterial({color:0xff2bd6,transparent:true,opacity:.95}));
  ring1.position.copy(knot.position);ring1.rotation.set(.9,.2,-.45);scene.add(ring1);
  const ring2=new THREE.Mesh(new THREE.TorusGeometry(2.38,.009,6,150),new THREE.MeshBasicMaterial({color:0x45f3ff,transparent:true,opacity:.82}));
  ring2.position.copy(knot.position);ring2.rotation.set(1.15,-.4,.2);scene.add(ring2);
  const mats=[
   new THREE.MeshStandardMaterial({color:0xff2bd6,metalness:.65,roughness:.24,emissive:0x35002b,emissiveIntensity:.9}),
   new THREE.MeshStandardMaterial({color:0x45f3ff,metalness:.65,roughness:.22,emissive:0x00313b,emissiveIntensity:.8}),
   new THREE.MeshStandardMaterial({color:0xff2638,metalness:.7,roughness:.23,emissive:0x39000b,emissiveIntensity:1})
  ];
  const geos=[new THREE.IcosahedronGeometry(.48,1),new THREE.OctahedronGeometry(.5),new THREE.TetrahedronGeometry(.55),new THREE.TorusGeometry(.38,.105,10,34)];
  const floaters=[];
  for(let i=0;i<(mobile?8:16);i++){
   const m=new THREE.Mesh(geos[i%geos.length],mats[i%3]);m.position.set((Math.random()-.5)*18,(Math.random()-.5)*15,-1-Math.random()*18);
   m.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3);m.scale.setScalar(.45+Math.random()*.75);
   m.userData={x:m.position.x,y:m.position.y,sx:(Math.random()-.5)*.003,sy:(Math.random()-.5)*.004,p:Math.random()*6.28,v:.25+Math.random()*.6};scene.add(m);floaters.push(m);
  }
  const count=mobile?360:780, pos=new Float32Array(count*3);
  for(let i=0;i<count;i++){pos[i*3]=(Math.random()-.5)*42;pos[i*3+1]=(Math.random()-.5)*28;pos[i*3+2]=-Math.random()*34}
  const sg=new THREE.BufferGeometry();sg.setAttribute('position',new THREE.BufferAttribute(pos,3));
  const stars=new THREE.Points(sg,new THREE.PointsMaterial({color:0xb9faff,size:mobile?.026:.032,transparent:true,opacity:.82}));scene.add(stars);
  scene.add(new THREE.AmbientLight(0xffffff,1.15));
  const lights=[[0xff1744,44,4,2,3],[0xff2bd6,34,-5,2,-1],[0x45f3ff,26,0,-3,-7]];
  lights.forEach(([c,p,x,y,z])=>{const l=new THREE.PointLight(c,p,30);l.position.set(x,y,z);scene.add(l)});
  const hud=document.createElement('div');hud.className='cyber-hud';hud.textContent='Neural interface · Scroll to navigate';document.body.appendChild(hud);
  let px=0,py=0,tx=0,ty=0,scroll=0,target=0,visible=true;
  addEventListener('pointermove',e=>{tx=(e.clientX/innerWidth-.5)*2;ty=(e.clientY/innerHeight-.5)*2},{passive:true});
  const readScroll=()=>target=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight);
  addEventListener('scroll',readScroll,{passive:true});readScroll();document.addEventListener('visibilitychange',()=>visible=!document.hidden);
  addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setPixelRatio(Math.min(devicePixelRatio||1,mobile?1.2:1.65));renderer.setSize(innerWidth,innerHeight)},{passive:true});
  const clock=new THREE.Clock();
  renderer.setAnimationLoop(()=>{
   if(!visible)return;const t=clock.getElapsedTime(),motion=reduced?.12:1;
   px+=(tx-px)*.035;py+=(ty-py)*.035;scroll+=(target-scroll)*.04;const travel=scroll*6.1;
   camera.position.set(px*.45,-travel*.46-py*.25,12-travel*.62);camera.rotation.x=py*.025+scroll*.025;camera.rotation.y=-px*.035;camera.lookAt(px*.35,-travel*.4,-4);
   knot.rotation.x=t*.14*motion+scroll*.48;knot.rotation.y=t*.22*motion;ring1.rotation.z=-t*.085*motion;ring2.rotation.x=1.15+Math.sin(t*.2)*.12;grid.position.z=-5+(scroll*4)%4;
   floaters.forEach(m=>{const d=m.userData;m.rotation.x+=d.sx*motion;m.rotation.y+=d.sy*motion;m.position.y=d.y+Math.sin(t*d.v+d.p)*.22*motion;m.position.x=d.x+Math.sin(t*.15+d.p)*.15*motion});
   stars.rotation.y=t*.004*motion;renderer.render(scene,camera);
  });
  if(!reduced&&!mobile)document.querySelectorAll('.project-card,.project-card-premium,.skill-card,.education-card,.experience-card,.certificate-card').forEach(card=>{
   card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;card.style.transform=`perspective(900px) rotateX(${(.5-y)*5}deg) rotateY(${(x-.5)*7}deg) translateY(-3px)`});
   card.addEventListener('pointerleave',()=>card.style.transform='');
  });
 }catch(err){console.warn('Cyberpunk 3D layer unavailable; original portfolio remains active.',err)}
})();
