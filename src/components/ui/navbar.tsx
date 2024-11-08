"use client"
import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./navigation-menu"
import { type INavItem, navItemsSonstiges, navItemsVerein } from "~/app/config";
import { ListItem } from "./list-item";
import { Button } from "./button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { MobileLink } from "./mobile-link";
import { ScrollArea } from "./scroll-area";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

interface NavItemsMannschaftenProps {
  navItemsMannschaften: INavItem[];
  navItemsVeranstaltungen: INavItem[];
}

const Navbar: React.FC<NavItemsMannschaftenProps> = ({ navItemsMannschaften, navItemsVeranstaltungen }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [browserWidth, setBrowserWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setBrowserWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pathname = usePathname()

  const currentPage = (href: string) => {
    if (pathname === href) {
      return "font-bold"
    }
    else return ""
  }

    return (
      <>
        <div className="flex lg:hidden pt-4 pl-5 border-b border-slate-300 shadow-lg">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                    variant="ghost"
                    className="mb-3 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                        <Image src="/favicon.ico" alt="Logo" width={50} height={60} />
                </Button>
            </SheetTrigger>
            <SheetContent size={browserWidth > 442 ? "lg" : "xl"} position="left" className="pr-0">
              <MobileLink href="/" className="flex items-center" onOpenChange={setIsOpen}>
                <Button
                      variant="ghost"
                      className="mr-2 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                          <Image src="/favicon.ico" alt="Logo" width={60} height={60} />
                          <span className="ml-3 font-bold text-lg">HCKW</span>
                  </Button>
              </MobileLink>
              <ScrollArea className="my-1 h-[calc(100vh-8rem)] pb-10 sm:pl-6 pl-3">
                <div className="flex flex-col space-y-3">
                    <div className="flex flex-col space-y-3 pt-10">
                      <h4 className="font-semibold">Verein</h4>
                      {navItemsVerein.map((navItemVerein) => (
                        <MobileLink key={navItemVerein.title} href={navItemVerein.href} className="ml-2">
                          {navItemVerein.title}
                        </MobileLink>
                      ))}
                    </div>
                    <div className="flex flex-col space-y-3 pt-3">
                      <h4 className="font-semibold">Mannschaften</h4>
                      {navItemsMannschaften.map((navItemMannschaften) => (
                        <MobileLink key={navItemMannschaften.title} href={navItemMannschaften.href} className="ml-2">
                          {navItemMannschaften.title}
                        </MobileLink>
                      ))}
                    </div>
                    <h4 className="flex flex-col pt-3 font-semibold"><Link href="/news">News</Link></h4>
                    <div className="flex flex-col space-y-3 pt-3">
                      <h4 className="font-semibold">Veranstaltungen</h4>
                      {navItemsVeranstaltungen.map((navItemsVeranstaltungen) => (
                        <MobileLink key={navItemsVeranstaltungen.title} href={navItemsVeranstaltungen.href} className="ml-2">
                          {navItemsVeranstaltungen.title}
                        </MobileLink>
                      ))}
                    </div>
                    <div className="flex flex-col space-y-3 pt-3">
                      <h4 className="font-semibold">Sonstiges</h4>
                      {navItemsSonstiges.map((navItemSonstiges) => (
                        <MobileLink key={navItemSonstiges.title} href={navItemSonstiges.href} className="ml-2">
                          {navItemSonstiges.title}
                        </MobileLink>
                      ))}
                    </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>

        <NavigationMenu className="p-6 pb-4 hidden lg:flex w-full z-10 bg-white border-b border-slate-300 shadow-lg">
          <NavigationMenuList>
            <Link href="/" className="mr-2 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                    <Image src="/favicon.ico" alt="Logo" width={50} height={60} />
            </Link>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Verein</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {navItemsVerein.map((navItemVerein) => (
                    <ListItem
                    key={navItemVerein.title}
                    title={navItemVerein.title}
                    href={navItemVerein.href}
                    classNameTitle={currentPage(navItemVerein.href)}
                  >
                    {navItemVerein.description}
                  </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger><Link href="/mannschaften" className={currentPage("/mannschaften")}>Mannschaften</Link></NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {navItemsMannschaften.map((navItemMannschaften) => (
                    <ListItem
                    key={navItemMannschaften.title}
                    title={navItemMannschaften.title}
                    href={navItemMannschaften.href}
                    classNameTitle={currentPage(navItemMannschaften.href)}
                  >
                    {navItemMannschaften.description}
                  </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/news" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), currentPage("/news"))}>
                  News
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Veranstaltungen</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {navItemsVeranstaltungen.map((navItemsVeranstaltungen) => (
                    <ListItem
                    key={navItemsVeranstaltungen.title}
                    title={navItemsVeranstaltungen.title}
                    href={navItemsVeranstaltungen.href}
                    classNameTitle={currentPage(navItemsVeranstaltungen.href)}
                  >
                    {navItemsVeranstaltungen.description}
                  </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sonstiges</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {navItemsSonstiges.map((navItemsSonstiges) => (
                      <ListItem
                      key={navItemsSonstiges.title}
                      title={navItemsSonstiges.title}
                      href={navItemsSonstiges.href}
                      classNameTitle={currentPage(navItemsSonstiges.href)}
                    >
                      {navItemsSonstiges.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </>
    )
}

export default Navbar;
