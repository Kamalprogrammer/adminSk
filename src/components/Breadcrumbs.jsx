import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);

  return (
    <nav className="text-sm p-3 bg-gray-100">
      <Link to="/">Home</Link>

      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={to}>
            {" > "}
            {isLast ? (
              <span className="text-gray-500 capitalize">{value}</span>
            ) : (
              <Link to={to} className="capitalize text-blue-600">
                {value}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

