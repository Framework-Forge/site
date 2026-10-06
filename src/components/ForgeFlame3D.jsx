import { useEffect, useRef } from 'react';

const SHAPE = [
  [0.0617,-1.0011],[-0.1449,-0.9946],[-0.3486,-0.9558],[-0.5208,-0.8932],[-0.6671,-0.8112],
  [-0.8034,-0.7001],[-0.9125,-0.562],[-0.9727,-0.4347],[-1.0014,-0.2945],[-0.9584,-0.0572],
  [-0.8867,0.0529],[-0.8192,0.1057],[-0.7288,0.0852],[-0.6714,-0.0572],[-0.5466,-0.1294],
  [-0.3687,-0.1273],[-0.2382,-0.0399],[-0.2152,0.1133],[-0.3788,0.4024],[-0.3989,0.5858],
  [-0.3587,0.6936],[-0.2812,0.7994],[-0.1693,0.9029],[-0.0158,1.0011],[0.0689,0.972],
  [0.1664,0.7433],[0.3185,0.5469],[0.7374,0.2319],[0.8666,0.1046],[0.9641,-0.055],
  [1.0014,-0.206],[0.9928,-0.3571],[0.9412,-0.5102],[0.858,-0.6397],[0.7489,-0.7497],
  [0.6011,-0.8522],[0.4175,-0.9342],[0.2482,-0.9795],
];

function rotate([x,y,z], rx, ry, rz) {
  let cy=Math.cos(rx), sy=Math.sin(rx);
  let y1=y*cy-z*sy, z1=y*sy+z*cy; y=y1; z=z1;
  cy=Math.cos(ry); sy=Math.sin(ry);
  let x1=x*cy+z*sy, z2=-x*sy+z*cy; x=x1; z=z2;
  cy=Math.cos(rz); sy=Math.sin(rz);
  x1=x*cy-y*sy; y1=x*sy+y*cy;
  return [x1,y1,z];
}

function project(point, width, height, rx, ry, rz) {
  const [x,y,z]=rotate(point,rx,ry,rz);
  const camera=4.4;
  const scale=Math.min(width,height)*0.31;
  const p=camera/(camera-z);
  return [width/2+x*scale*p,height/2-y*scale*p,z,p];
}

export default function ForgeFlame3D() {
  const canvasRef=useRef(null);
  const pointer=useRef({x:0,y:0});
  const target=useRef({x:0,y:0});

  useEffect(()=>{
    const canvas=canvasRef.current;
    const ctx=canvas.getContext('2d');
    let raf=0;
    let start=performance.now();

    const resize=()=>{
      const dpr=Math.min(window.devicePixelRatio||1,2);
      const rect=canvas.getBoundingClientRect();
      canvas.width=Math.max(1,Math.floor(rect.width*dpr));
      canvas.height=Math.max(1,Math.floor(rect.height*dpr));
      ctx.setTransform(dpr,0,0,dpr,0,0);
    };

    const onMove=(event)=>{
      const rect=canvas.getBoundingClientRect();
      target.current.x=((event.clientX-rect.left)/rect.width-.5)*.8;
      target.current.y=((event.clientY-rect.top)/rect.height-.5)*-.5;
    };
    const onLeave=()=>{ target.current.x=0; target.current.y=0; };

    resize();
    window.addEventListener('resize',resize);
    canvas.addEventListener('pointermove',onMove);
    canvas.addEventListener('pointerleave',onLeave);

    const drawPolygon=(pts,fill,stroke,lineWidth=1)=>{
      ctx.beginPath();
      pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));
      ctx.closePath();
      if(fill){ctx.fillStyle=fill;ctx.fill();}
      if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=lineWidth;ctx.stroke();}
    };

    const render=(now)=>{
      const rect=canvas.getBoundingClientRect();
      const w=rect.width,h=rect.height;
      ctx.clearRect(0,0,w,h);
      const t=(now-start)/1000;
      pointer.current.x+=(target.current.x-pointer.current.x)*.055;
      pointer.current.y+=(target.current.y-pointer.current.y)*.055;
      const rx=-0.10+pointer.current.y+Math.sin(t*.45)*.035;
      const ry=t*.42+pointer.current.x;
      const rz=Math.sin(t*.33)*.025;
      const depth=.34;

      const front=SHAPE.map(([x,y])=>project([x,y,depth],w,h,rx,ry,rz));
      const back=SHAPE.map(([x,y])=>project([x,y,-depth],w,h,rx,ry,rz));

      // ambient glow
      const g=ctx.createRadialGradient(w/2,h/2,10,w/2,h/2,Math.min(w,h)*.42);
      g.addColorStop(0,'rgba(255,122,26,.13)');
      g.addColorStop(.48,'rgba(255,122,26,.045)');
      g.addColorStop(1,'rgba(255,122,26,0)');
      ctx.fillStyle=g; ctx.fillRect(0,0,w,h);

      // particles
      ctx.save();
      for(let i=0;i<90;i++){
        const px=(Math.sin(i*91.17+t*.08+i)*.5+.5)*w;
        const py=(Math.cos(i*47.31-t*.06+i*.7)*.5+.5)*h;
        const alpha=.09+((i%7)/7)*.18;
        ctx.fillStyle=`rgba(255,153,61,${alpha})`;
        ctx.fillRect(px,py,i%9===0?1.5:1,i%9===0?1.5:1);
      }
      ctx.restore();

      // side faces, sorted by depth
      const sides=SHAPE.map((_,i)=>{
        const j=(i+1)%SHAPE.length;
        return {i,j,z:(front[i][2]+front[j][2]+back[i][2]+back[j][2])/4};
      }).sort((a,b)=>a.z-b.z);

      sides.forEach(({i,j})=>{
        const shade=.20+Math.max(0,(front[i][2]+front[j][2]+1.5)/5);
        drawPolygon([back[i],back[j],front[j],front[i]],`rgba(255,94,12,${shade})`,'rgba(255,145,55,.52)',.8);
      });

      drawPolygon(back,'rgba(255,86,10,.05)','rgba(255,122,26,.22)',1);
      ctx.save();
      ctx.shadowBlur=28; ctx.shadowColor='rgba(255,122,26,.85)';
      drawPolygon(front,'rgba(255,122,26,.16)','rgba(255,167,78,.95)',1.8);
      ctx.restore();

      // inner highlight
      ctx.save();
      ctx.globalCompositeOperation='lighter';
      drawPolygon(front,'rgba(255,170,84,.035)','rgba(255,198,124,.30)',.7);
      ctx.restore();

      raf=requestAnimationFrame(render);
    };

    raf=requestAnimationFrame(render);
    return ()=>{
      cancelAnimationFrame(raf);
      window.removeEventListener('resize',resize);
      canvas.removeEventListener('pointermove',onMove);
      canvas.removeEventListener('pointerleave',onLeave);
    };
  },[]);

  return (
    <div className="forge-flame-stage" aria-label="Interactive 3D Forge flame">
      <div className="forge-flame-grid" />
      <canvas ref={canvasRef} className="forge-flame-canvas" />
      <div className="forge-flame-orbit forge-flame-orbit--one" />
      <div className="forge-flame-orbit forge-flame-orbit--two" />
    </div>
  );
}
