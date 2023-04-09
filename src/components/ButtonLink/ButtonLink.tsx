import Link from "next/link";

interface ButtonLinkProps {
  destination: string;
  label: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  destination,
  label,
}) => {
  return (
    <Link href={destination} className="btn">
      {label}
    </Link>
  );
};
