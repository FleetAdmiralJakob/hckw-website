import React from "react"
import { NavigationMenuLink } from "./navigation-menu"
import { cn } from "~/lib/utils"

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    classNameTitle?: string
  }
>(({ classNameTitle, className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className={cn("text-sm font-medium leading-none", classNameTitle)}>{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-normal">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"