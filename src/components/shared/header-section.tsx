import { Separator } from "../ui/separator";

export function HeaderSection({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
        <p className="text-base text-muted-foreground md:text-lg">{description}</p>
      </div>
      <Separator className="my-7" />
    </div>
  );
}
