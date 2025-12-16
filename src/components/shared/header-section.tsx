import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

type HeaderSectionProps = {
  title: string;
  description: string;
  badge?: string;
};

export function HeaderSection({ title, description, badge }: HeaderSectionProps) {
  return (
    <div>
      <div className="space-y-4">
        {badge && (
          <Badge variant="secondary" className="rounded-full">
            {badge}
          </Badge>
        )}
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
        <p className="text-base text-muted-foreground md:text-lg">{description}</p>
      </div>
      <Separator className="my-7" />
    </div>
  );
}
