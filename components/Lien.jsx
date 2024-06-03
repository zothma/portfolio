export default function Lien({ url, children, className, ...props}) {
  return (
    <a className={`underline underline-offset-4 ${className}`} href={url} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}