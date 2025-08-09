import cases from '../../data/cases.json';

export default function CasesPage() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Cases</h1>
      <ul>
        {cases.map((c) => (
          <li key={c.slug}>
            <a href={`/cases/${c.slug}`}>{c.title}</a> — {c.date}
          </li>
        ))}
      </ul>
    </main>
  );
}
