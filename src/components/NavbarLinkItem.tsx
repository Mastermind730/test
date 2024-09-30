import Link from "next/link";

const LinkItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <li className="hover:text-sky-400  border-none">
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default LinkItem;
