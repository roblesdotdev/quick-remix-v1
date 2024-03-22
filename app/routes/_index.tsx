import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Quick Remix" },
    { name: "description", content: "Welcome to Quick Remix template!" },
  ];
};

export default function Index() {
  return (
    <div className="flex items-center min-h-screen justify-center">
      <h1 className="font-bold text-xl">Quick Remix</h1>
    </div>
  );
}
