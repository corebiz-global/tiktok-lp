import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type Option = {
  disabled?: boolean | undefined;
  value: string;
  label: string;
  onClick?: () => void;
  href?: string;
};

type CustomDropdownProps = Omit<React.ComponentProps<typeof DropdownMenu>, "children"> & {
  options: Option[];
  children: React.ReactNode;
};

export function CustomDropdown({ options, children, ...props }: CustomDropdownProps) {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <div>{children}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map((option) => {
          const Component = (
            <DropdownMenuItem key={option.value} onClick={option.onClick}>
              {option.label}
            </DropdownMenuItem>
          );

          if (option.href) {
            return (
              <Link key={option.value} href={option.href}>
                {Component}
              </Link>
            );
          }
          return Component;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
