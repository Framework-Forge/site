import React, { useState } from 'react';

export default function Table({
  headers = [],
  data = [],
  rowsPerPage = 5,
  className = '',
  ...props
}) {
  const [currentPage, setCurrentPage] = useState(1);

  // Paginação
  const totalPages = Math.ceil(data.length / rowsPerPage) || 1;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div
      className={`table-responsive-container ${className}`}
      style={{
        width: '100%',
        backgroundColor: 'var(--space-bg-card)',
        border: '1px solid var(--space-border-color)',
        borderRadius: 'var(--space-radius-lg)',
        overflow: 'hidden',
        ...props.style
      }}
      {...props}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        {/* Header */}
        <thead>
          <tr style={{ borderBottom: '1px solid var(--space-border-color)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  padding: '14px 18px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '12px',
                  fontWeight: '700',
                  color: 'var(--space-text-white)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {currentRows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              style={{
                borderBottom: rowIdx === currentRows.length - 1 ? 'none' : '1px solid var(--space-border-color)',
                backgroundColor: rowIdx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.005)',
                transition: 'var(--space-transition)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 122, 26, 0.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = rowIdx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.005)';
              }}
            >
              {Object.values(row).map((val, cellIdx) => (
                <td
                  key={cellIdx}
                  style={{
                    padding: '14px 18px',
                    fontSize: '13px',
                    color: 'var(--space-text-grey)'
                  }}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginação */}
      {data.length > rowsPerPage && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 18px',
            borderTop: '1px solid var(--space-border-color)',
            backgroundColor: 'rgba(0,0,0,0.1)'
          }}
        >
          <span style={{ fontSize: '11px', color: 'var(--space-text-muted)' }}>
            Mostrando {indexOfFirstRow + 1} - {Math.min(indexOfLastRow, data.length)} de {data.length}
          </span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button
              onClick={() => paginate(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--space-border-color)',
                color: currentPage === 1 ? 'var(--space-text-muted)' : 'var(--space-text-white)',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                borderRadius: '4px',
                padding: '4px 8px',
                fontSize: '11px'
              }}
            >
              Anterior
            </button>
            <button
              onClick={() => paginate(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--space-border-color)',
                color: currentPage === totalPages ? 'var(--space-text-muted)' : 'var(--space-text-white)',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                borderRadius: '4px',
                padding: '4px 8px',
                fontSize: '11px'
              }}
            >
              Próximo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
