import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h3 className="text-3xl">Welcome</h3>
      <Link href="/properties">Show Properties</Link>
    </div>
  );
};
export default HomePage;
