import { useEffect, useRef } from 'react';

// Silhouette sampled directly from the Forge flame mark.
// The 3D mesh is generated as a closed rounded volume: the exact silhouette
// sits at the widest cross-section and smoothly curves toward front/back poles.
const SHAPE = [
  [0.06169,-1.00108],[-0.02692,-1.00108],[-0.11315,-0.99676],[-0.19688,-0.98789],
  [-0.27719,-0.97282],[-0.35497,-0.95317],[-0.43024,-0.92894],[-0.50298,-0.90013],
  [-0.5732,-0.86675],[-0.64006,-0.82727],[-0.7044,-0.78321],[-0.76503,-0.73546],
  [-0.81754,-0.68519],[-0.86194,-0.63239],[-0.901,-0.57793],[-0.9345,-0.52174],
  [-0.96126,-0.46345],[-0.98135,-0.40307],[-0.99465,-0.34059],[-1.00143,-0.27608],
  [-0.99857,-0.21034],[-0.98996,-0.1464],[-0.96987,-0.08603],[-0.94247,-0.02794],
  [-0.90618,0.02739],[-0.85976,0.07956],[-0.78843,0.10787],[-0.7212,0.07516],
  [-0.70875,0.01241],[-0.68006,-0.04528],[-0.62572,-0.09372],[-0.5555,-0.1271],
  [-0.47412,-0.14024],[-0.39026,-0.13161],[-0.31625,-0.1051],[-0.25597,-0.05978],
  [-0.22095,-0.00406],[-0.20947,0.05899],[-0.21808,0.12294],[-0.24113,0.18238],
  [-0.27547,0.23832],[-0.31564,0.29243],[-0.35007,0.34834],[-0.37877,0.40602],
  [-0.39598,0.46729],[-0.40172,0.53213],[-0.39598,0.59697],[-0.3759,0.65734],
  [-0.34535,0.71445],[-0.30703,0.76914],[-0.25858,0.82068],[-0.20607,0.87095],
  [-0.14747,0.91933],[-0.08397,0.96491],[-0.01528,1.00108],[0.06152,0.97963],
  [0.08608,0.92066],[0.10904,0.86118],[0.13486,0.8026],[0.16643,0.7458],
  [0.20235,0.69036],[0.24268,0.6363],[0.28694,0.58346],[0.33554,0.53196],
  [0.38805,0.48169],[0.44665,0.43332],[0.51015,0.38773],[0.57533,0.3452],
  [0.64051,0.30266],[0.70401,0.25707],[0.76327,0.20891],[0.81715,0.15906],
  [0.86357,0.10689],[0.90391,0.05283],[0.93831,-0.00309],[0.9643,-0.06162],
  [0.98435,-0.122],[0.99857,-0.1842],[1.00143,-0.24993],[0.99857,-0.31566],
  [0.98709,-0.37872],[0.96987,-0.43998],[0.94489,-0.49883],[0.9147,-0.55605],
  [0.87841,-0.61138],[0.83501,-0.66448],[0.78556,-0.71571],[0.72899,-0.76472],
  [0.666,-0.81122],[0.59997,-0.85221],[0.53093,-0.88775],[0.45903,-0.91808],
  [0.3846,-0.94383],[0.30766,-0.96501],[0.22822,-0.98166],[0.1462,-0.99363],
];

function buildRoundedFlame() {
  const count = SHAPE.length;
  const rings = 36;
  const depth = 0.72;

  const cx = SHAPE.reduce((sum, p) => sum + p[0], 0) / count;
  const cy = SHAPE.reduce((sum, p) => sum + p[1], 0) / count;

  const positions = [];
  const indices = [];

  // Back pole.
  positions.push(cx * 1.08, cy * 1.38, -depth);
  const backPole = 0;

  // Rounded nested silhouette rings.
  for (let r = 1; r < rings; r += 1) {
    const theta = -Math.PI / 2 + (Math.PI * r) / rings;
    const scale = Math.pow(Math.max(0, Math.cos(theta)), 0.56);
    const z = Math.sin(theta) * depth;

    for (let i = 0; i < count; i += 1) {
      const [px, py] = SHAPE[i];
      positions.push(
        (cx + (px - cx) * scale) * 1.08,
        (cy + (py - cy) * scale) * 1.38,
        z,
      );
    }
  }

  const frontPole = positions.length / 3;
  positions.push(cx * 1.08, cy * 1.38, depth);

  const firstRing = 1;
  for (let i = 0; i < count; i += 1) {
    const next = (i + 1) % count;
    indices.push(backPole, firstRing + next, firstRing + i);
  }

  const interiorRingCount = rings - 1;
  for (let r = 0; r < interiorRingCount - 1; r += 1) {
    const a = 1 + r * count;
    const b = a + count;
    for (let i = 0; i < count; i += 1) {
      const next = (i + 1) % count;
      indices.push(a + i, b + next, b + i);
      indices.push(a + i, a + next, b + next);
    }
  }

  const lastRing = 1 + (interiorRingCount - 1) * count;
  for (let i = 0; i < count; i += 1) {
    const next = (i + 1) % count;
    indices.push(lastRing + i, lastRing + next, frontPole);
  }

  const normals = new Float32Array(positions.length);
  const p = positions;

  const addFaceNormal = (ia, ib, ic) => {
    const ax = p[ia * 3], ay = p[ia * 3 + 1], az = p[ia * 3 + 2];
    const bx = p[ib * 3], by = p[ib * 3 + 1], bz = p[ib * 3 + 2];
    const cxv = p[ic * 3], cyv = p[ic * 3 + 1], czv = p[ic * 3 + 2];

    const abx = bx - ax, aby = by - ay, abz = bz - az;
    const acx = cxv - ax, acy = cyv - ay, acz = czv - az;
    const nx = aby * acz - abz * acy;
    const ny = abz * acx - abx * acz;
    const nz = abx * acy - aby * acx;

    for (const idx of [ia, ib, ic]) {
      normals[idx * 3] += nx;
      normals[idx * 3 + 1] += ny;
      normals[idx * 3 + 2] += nz;
    }
  };

  for (let i = 0; i < indices.length; i += 3) {
    addFaceNormal(indices[i], indices[i + 1], indices[i + 2]);
  }

  for (let i = 0; i < normals.length; i += 3) {
    const len = Math.hypot(normals[i], normals[i + 1], normals[i + 2]) || 1;
    normals[i] /= len;
    normals[i + 1] /= len;
    normals[i + 2] /= len;
  }

  return {
    positions: new Float32Array(positions),
    normals,
    indices: new Uint16Array(indices),
  };
}

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const error = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(error || 'Shader compilation failed');
  }
  return shader;
}

function createProgram(gl) {
  const vertex = compile(gl, gl.VERTEX_SHADER, `
    attribute vec3 aPosition;
    attribute vec3 aNormal;

    uniform float uAspect;
    uniform vec3 uRotation;

    varying vec3 vNormal;
    varying vec3 vPosition;

    mat3 rotateX(float a) {
      float c = cos(a), s = sin(a);
      return mat3(1.0,0.0,0.0, 0.0,c,s, 0.0,-s,c);
    }

    mat3 rotateY(float a) {
      float c = cos(a), s = sin(a);
      return mat3(c,0.0,-s, 0.0,1.0,0.0, s,0.0,c);
    }

    mat3 rotateZ(float a) {
      float c = cos(a), s = sin(a);
      return mat3(c,s,0.0, -s,c,0.0, 0.0,0.0,1.0);
    }

    void main() {
      mat3 rotation = rotateZ(uRotation.z) * rotateY(uRotation.y) * rotateX(uRotation.x);
      vec3 position = rotation * aPosition;
      vec3 normal = normalize(rotation * aNormal);

      vPosition = position;
      vNormal = normal;

      float cameraDistance = 4.65;
      float distanceToCamera = cameraDistance - position.z;
      float perspective = 2.05 / distanceToCamera;

      gl_Position = vec4(
        position.x * perspective / uAspect,
        position.y * perspective,
        (distanceToCamera - 2.0) / 4.0,
        1.0
      );
    }
  `);

  const fragment = compile(gl, gl.FRAGMENT_SHADER, `
    precision highp float;

    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 cameraPosition = vec3(0.0, 0.0, 4.65);
      vec3 viewDirection = normalize(cameraPosition - vPosition);

      vec3 keyLight = normalize(vec3(-0.55, 0.75, 1.0));
      vec3 fillLight = normalize(vec3(0.85, -0.25, 0.55));

      float key = max(dot(normal, keyLight), 0.0);
      float fill = max(dot(normal, fillLight), 0.0) * 0.30;

      vec3 halfVector = normalize(keyLight + viewDirection);
      float specular = pow(max(dot(normal, halfVector), 0.0), 46.0);

      float rim = pow(1.0 - max(dot(normal, viewDirection), 0.0), 2.35);

      vec3 darkOrange = vec3(0.72, 0.145, 0.015);
      vec3 forgeOrange = vec3(1.0, 0.478, 0.102);
      vec3 warmHighlight = vec3(1.0, 0.80, 0.52);

      vec3 color = mix(darkOrange, forgeOrange, 0.30 + key * 0.70);
      color += forgeOrange * fill;
      color += warmHighlight * specular * 0.78;
      color += forgeOrange * rim * 0.22;

      gl_FragColor = vec4(color, 1.0);
    }
  `);

  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);

  gl.deleteShader(vertex);
  gl.deleteShader(fragment);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const error = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(error || 'Program link failed');
  }

  return program;
}

export default function ForgeFlame3D() {
  const canvasRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const gl = canvas.getContext('webgl', {
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
    });

    if (!gl) return undefined;

    let program;
    try {
      program = createProgram(gl);
    } catch (error) {
      console.error('[ForgeFlame3D]', error);
      return undefined;
    }

    const geometry = buildRoundedFlame();

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, geometry.positions, gl.STATIC_DRAW);

    const normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, geometry.normals, gl.STATIC_DRAW);

    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, geometry.indices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, 'aPosition');
    const aNormal = gl.getAttribLocation(program, 'aNormal');
    const uAspect = gl.getUniformLocation(program, 'uAspect');
    const uRotation = gl.getUniformLocation(program, 'uRotation');

    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    gl.clearColor(0, 0, 0, 0);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.floor(rect.width * dpr));
      const height = Math.max(1, Math.floor(rect.height * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      gl.viewport(0, 0, width, height);
    };

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      target.current.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.72;
      target.current.y = ((event.clientY - rect.top) / rect.height - 0.5) * -0.42;
    };

    const onLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerleave', onLeave);

    let frame = 0;
    const start = performance.now();

    const draw = (now) => {
      resize();

      const t = (now - start) / 1000;
      pointer.current.x += (target.current.x - pointer.current.x) * 0.045;
      pointer.current.y += (target.current.y - pointer.current.y) * 0.045;

      const rect = canvas.getBoundingClientRect();
      const aspect = Math.max(0.001, rect.width / rect.height);

      const rotationX = -0.08 + pointer.current.y + Math.sin(t * 0.42) * 0.035;
      const rotationY = 0.12 + pointer.current.x + Math.sin(t * 0.34) * 0.22;
      const rotationZ = Math.sin(t * 0.27) * 0.018;

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.useProgram(program);

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(aPosition);
      gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
      gl.enableVertexAttribArray(aNormal);
      gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.uniform1f(uAspect, aspect);
      gl.uniform3f(uRotation, rotationX, rotationY, rotationZ);

      gl.drawElements(gl.TRIANGLES, geometry.indices.length, gl.UNSIGNED_SHORT, 0);

      frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
      gl.deleteBuffer(positionBuffer);
      gl.deleteBuffer(normalBuffer);
      gl.deleteBuffer(indexBuffer);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <div className="forge-flame-stage forge-flame-stage--volume" aria-label="Interactive 3D Forge flame">
      <div className="forge-flame-grid" />
      <div className="forge-flame-halo" />
      <canvas ref={canvasRef} className="forge-flame-canvas" />
    </div>
  );
}
