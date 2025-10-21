export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#111827',
      color: '#06B6D4',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ maxWidth: '600px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#06B6D4' }}>
          ✨ Admix Digital - Next.js
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#9CA3AF' }}>
          This project has been migrated to Next.js!
        </p>
        <div style={{
          background: 'rgba(6, 182, 212, 0.1)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem',
          textAlign: 'left'
        }}>
          <p style={{ fontWeight: '600', marginBottom: '1rem', color: '#F9FAFB' }}>
            📂 Main application files:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, color: '#9CA3AF' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              ✓ <code style={{ color: '#84CC16' }}>/app/page.tsx</code> - Homepage
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              ✓ <code style={{ color: '#84CC16' }}>/app/layout.tsx</code> - Root layout
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              ✓ <code style={{ color: '#84CC16' }}>/components/*</code> - All components
            </li>
          </ul>
        </div>
        <div style={{
          background: 'rgba(132, 204, 22, 0.1)',
          border: '1px solid rgba(132, 204, 22, 0.3)',
          borderRadius: '12px',
          padding: '1.5rem',
          textAlign: 'left'
        }}>
          <p style={{ fontWeight: '600', marginBottom: '1rem', color: '#F9FAFB' }}>
            🚀 To run this app:
          </p>
          <ol style={{ paddingLeft: '1.5rem', color: '#9CA3AF' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <code style={{ color: '#06B6D4' }}>npm install</code>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <code style={{ color: '#06B6D4' }}>npm run dev</code>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Open <code style={{ color: '#06B6D4' }}>http://localhost:3000</code>
            </li>
          </ol>
        </div>
        <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#6B7280' }}>
          📖 See <code>README.md</code> and <code>MIGRATION.md</code> for full documentation
        </p>
      </div>
    </div>
  );
}
