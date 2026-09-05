function LegalSection({ title, children }) {
  return (
    <div className="legal-block">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default LegalSection;