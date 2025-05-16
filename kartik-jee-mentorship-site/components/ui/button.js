export function Button({ children, className, variant = 'default' }) {
  return <button className={className}>{children}</button>;
}