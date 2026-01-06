import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);

  return (
    <nav className="text-sm p-3 bg-[var(--color-section-bg)] border border-[var(--color-border-light)] rounded-xl">
      <Link to="/" className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors">Home</Link>

      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={to}>
            <span className="text-[var(--color-text-muted)] mx-2">&gt;</span>
            {isLast ? (
              <span className="text-[var(--color-text-gray)] capitalize">{value}</span>
            ) : (
              <Link to={to} className="capitalize text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors">
                {value}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

