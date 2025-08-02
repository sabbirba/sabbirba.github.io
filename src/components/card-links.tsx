import { Button } from "@/components/ui/button";
import { Github, Heart, Mail, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface CardLinkProps {
	href: string;
	icon: ReactNode;
	text: string;
};

const cardLinks: CardLinkProps[] = [
	{
		href: "https://github.com/Sabbirba10",
		icon: <Github />,
		text: "Visit my GitHub Profile"
	},
	{
		href: "https://github.com/sponsors/Sabbirba10",
		icon: <Heart />,
		text: "Sponsor me on GitHub"
	},
	{
		href: "mailto:sabbirba10@gmail.com",
		icon: <Mail />,
		text: "Hire me for Freelancing"
	},
	{
		href: "https://www.youtube.com/@Sabbirba10?sub_confirmation=1",
		icon: <YoutubeIcon />,
		text: "Subscribe my YouTube Channel"
	}
];

function CardLink({
	href,
	icon,
	text
}: CardLinkProps) {
	return (
		<Button asChild variant="outline" className="w-full">
			<Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
				{icon}

				<span>
					{text}
				</span>
			</Link>
		</Button>
	);
};

export function CardLinks() {
	return (
		<div className="space-y-2">
			{cardLinks.map(({
				href,
				icon,
				text
			}) => (
				<CardLink key={href} href={href} icon={icon} text={text} />
			))}
		</div>
	);
};