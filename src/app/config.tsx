export interface INavItem {
  href: string;
  title: string;
  description?: string;
}

export const navItemsVerein: INavItem[] = [
  {
    href: "/vorstand",
    title: "Vorstand 🤵",
  },
  {
    href: "/trainingszeiten",
    title: "Trainingszeiten 🏑",
  },
  {
    href: "/downloads",
    title: "Downloads 📃",
    description: "Hier habe wir alle wichtigen Dokumente für euch zusammengestellt."
  },
  {
    href: "/kontakt",
    title: "Kontakt 📧",
    description: "Schreiben Sie uns!"
  },
  {
    href: "/wegbeschreibung",
    title: "Wegbeschreibung 📍",
    description: "So finden Sie uns!"
  }
];

export const navItemsSonstiges: INavItem[] = [
    {
        href: "/feldhockey",
        title: "Feldhockey",
    },
    {
        href: "/hallenhockey",
        title: "Hallenhockey",
    },
    {
        href: "/unterstützer",
        title: "Unterstützer",
    },
    {
        href: "/unterstützer-werden",
        title: "Unterstützer werden",
    },
    {
        href: "https://sportinkw.de/",
        title: "Sport in KW",
        description: "Die offizielle Seite von Sport in KW"
    }
  ]    