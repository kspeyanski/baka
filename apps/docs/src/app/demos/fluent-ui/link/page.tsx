import { Link } from "baka-fluent-ui";

export default function LabelDemo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-center flex-row gap-2">
        <Link>Link</Link>
        <Link state={{ hover: true }}>Link</Link>
        <Link state={{ pressed: true }}>Link</Link>
        <Link state={{ focus: true }}>Link</Link>
        <Link state={{ disabled: true }}>Link</Link>
      </div>
      <div className="flex justify-center flex-row gap-2">
        <Link variant={["subtle"]}>Link</Link>
        <Link variant={["subtle"]} state={{ hover: true }}>
          Link
        </Link>
        <Link variant={["subtle"]} state={{ pressed: true }}>
          Link
        </Link>
        <Link variant={["subtle"]} state={{ focus: true }}>
          Link
        </Link>
        <Link variant={["subtle"]} state={{ disabled: true }}>
          Link
        </Link>
      </div>
      <div className="flex flex-row p-4 rounded-md gap-2 bg-brand-background-1">
        <Link variant={["over-brand"]}>Link</Link>
        <Link variant={["over-brand"]} state={{ hover: true }}>
          Link
        </Link>
        <Link variant={["over-brand"]} state={{ pressed: true }}>
          Link
        </Link>
        <Link variant={["over-brand"]} state={{ focus: true }}>
          Link
        </Link>
        <Link variant={["over-brand"]} state={{ disabled: true }}>
          Link
        </Link>
      </div>
    </div>
  );
}
