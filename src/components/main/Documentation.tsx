export const Documentation = function ({ schema }: { schema: string }) {
  // return <div className="documentation_container">{schema.replace(/"\\/g, '')}</div>;
  return (
    <div className="documentation_container">
      {schema.split('\\n').map((string, iterator) => (
        <p key={iterator}>{string.replace(/"\\/g, '')}</p>
      ))}
    </div>
  );
};
