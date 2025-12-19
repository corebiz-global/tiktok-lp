import { MailIcon } from "lucide-react";

interface EmailContactProps {
  email: string;
  label?: string;
}

export function EmailContact({ email, label }: EmailContactProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <MailIcon className="h-4 w-4" />
      <span>
        {label && <span className="mr-1">{label}</span>}
        <a href={`mailto:${email}`} className="text-primary hover:underline font-semibold">
          {email}
        </a>
      </span>
    </div>
  );
}
