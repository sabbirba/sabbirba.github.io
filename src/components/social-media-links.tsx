import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SiDiscord,
  SiGithub,
  SiX,
  SiInstagram,
  SiFacebook,
} from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://sabbirbinabbas.web.app",
    label: "Website",
    icon: <Globe />,
  },
  {
    href: "https://www.facebook.com/Sabbirba10",
    label: "Facebook",
    icon: <SiFacebook />,
  },
  {
    href: "https://instagram.com/sabbir_bin_abbas",
    label: "Instagram",
    icon: <SiInstagram />,
  },
  {
    href: "https://x.com/Sabbirba10",
    label: "X",
    icon: <SiX />,
  },
  {
    href: "https://discord.com/channels/@sabbirba10",
    label: "Discord",
    icon: <SiDiscord />,
  },
  {
    href: "https://github.com/sabbirba",
    label: "GitHub",
    icon: <SiGithub />,
  },
];

export function SocialMediaLinks() {
  return (
    <div className="flex items-center justify-center space-x-2">
      {socialLinks.map(({ href, label, icon }) => (
        <Tooltip key={label}>
          <TooltipTrigger>
            <Button asChild variant="outline" size="icon">
              <Link href={href} target="_blank" rel="noopener noreferrer">
                {icon}
              </Link>
            </Button>
          </TooltipTrigger>

          <TooltipContent>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
