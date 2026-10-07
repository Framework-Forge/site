import React from 'react';

const KEYWORDS = new Set([
  'and','break','do','else','elseif','end','false','for','function','goto','if','in',
  'local','nil','not','or','repeat','return','then','true','until','while'
]);

const BUILTINS = new Set([
  'assert','collectgarbage','dofile','error','getmetatable','ipairs','load','loadfile',
  'next','pairs','pcall','print','rawequal','rawget','rawlen','rawset','require',
  'select','setmetatable','tonumber','tostring','type','xpcall',
  'GetHashKey','PlayerPedId','GetEntityCoords','CreateThread','Wait','TriggerEvent',
  'TriggerServerEvent','TriggerClientEvent','RegisterNetEvent','RegisterCommand',
  'RegisterKeyMapping','json','vec2','vec3','vec4','vector2','vector3','vector4'
]);

function tokenizeLine(line, lineIndex) {
  const nodes = [];
  let i = 0;
  let tokenIndex = 0;

  const push = (text, cls) => {
    if (!text) return;
    nodes.push(
      <span key={lineIndex + '-' + tokenIndex++} className={cls ? 'lua-' + cls : undefined}>
        {text}
      </span>
    );
  };

  while (i < line.length) {
    if (line.startsWith('--', i)) {
      push(line.slice(i), 'comment');
      break;
    }

    const ch = line[i];

    if (ch === '"' || ch === "'") {
      const quote = ch;
      let j = i + 1;
      let escaped = false;
      while (j < line.length) {
        const current = line[j];
        if (escaped) {
          escaped = false;
        } else if (current === '\\') {
          escaped = true;
        } else if (current === quote) {
          j += 1;
          break;
        }
        j += 1;
      }
      push(line.slice(i, j), 'string');
      i = j;
      continue;
    }

    if (/\d/.test(ch) || (ch === '.' && /\d/.test(line[i + 1] || ''))) {
      const match = line.slice(i).match(/^(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|\.\d+(?:[eE][+-]?\d+)?)/);
      if (match) {
        push(match[0], 'number');
        i += match[0].length;
        continue;
      }
    }

    if (/[A-Za-z_]/.test(ch)) {
      const match = line.slice(i).match(/^[A-Za-z_][A-Za-z0-9_]*/);
      const word = match ? match[0] : ch;
      const rest = line.slice(i + word.length);
      const isFunction = /^\s*\(/.test(rest);
      const prev = line.slice(0, i);
      const isProperty = /[.:]\s*$/.test(prev);

      if (KEYWORDS.has(word)) push(word, 'keyword');
      else if (word === 'pr_lib') push(word, 'namespace');
      else if (BUILTINS.has(word)) push(word, 'builtin');
      else if (isFunction) push(word, 'function');
      else if (isProperty) push(word, 'property');
      else push(word, 'identifier');

      i += word.length;
      continue;
    }

    if ('{}[]()'.includes(ch)) push(ch, 'punctuation');
    else if ('=+-*/%^#<>~'.includes(ch)) push(ch, 'operator');
    else push(ch);

    i += 1;
  }

  return nodes;
}

export function LuaCode({ code }) {
  const lines = String(code ?? '').split('\n');

  return (
    <code className="lua-highlight">
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {tokenizeLine(line, index)}
          {index < lines.length - 1 ? '\n' : null}
        </React.Fragment>
      ))}
    </code>
  );
}

export default function LuaCodeBlock({ children, className = '' }) {
  return (
    <pre className={('bridge-code lua-code-block ' + className).trim()}>
      <LuaCode code={children} />
    </pre>
  );
}
