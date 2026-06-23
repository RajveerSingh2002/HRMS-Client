export function Field({ children, ...props }) {
  return (
    <div className="field" {...props}>
      {children}
    </div>
  );
}

export function FieldGroup({ children, ...props }) {
  return (
    <div className="field-group" {...props}>
      {children}
    </div>
  );
}
