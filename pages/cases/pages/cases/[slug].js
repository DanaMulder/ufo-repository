import cases from '../../data/cases.json';

export default function CasePage({ caseData }) {
  if (!caseData) return <main style={{ padding: '2rem' }}>Case not found.</main>;
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>{caseData.title}</h1>
      <p><strong>Date:</strong> {caseData.date}</p>
      <p><strong>Location:</strong> {caseData.location}</p>
      <p>{caseData.summary}</p>

      <h2>Dossier</h2>
      <ul>
        {caseData.claims?.map((claim, i) => (
          <li key={i}>{claim.text} — Evidence: {claim.evidence}</li>
        ))}
      </ul>

      <h2>Editor’s Notes</h2>
      <div dangerouslySetInnerHTML={{ __html: caseData.editorsNotesHtml || '' }} />
    </main>
  );
}

export async function getStaticPaths() {
  return { paths: cases.map((c) => ({ params: { slug: c.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const caseData = cases.find((c) => c.slug === params.slug) || null;
  return { props: { caseData } };
}
