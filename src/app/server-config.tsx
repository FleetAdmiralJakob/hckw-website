import "server-only"
import { contentfulClient } from "~/lib/contentful/client"
import type { INavItem } from "./config"

export const navItemsMannschaften = async (): Promise<INavItem[]> => {
    const contentfulMannschaften = await contentfulClient.getEntries({ content_type: "mannschaften" })
    return contentfulMannschaften.items.map((item) => ({
        href: `/mannschaften/${(item.fields.kurzerMannschaftsname ?? '').toString()}}`,
        title: item.fields.kurzerMannschaftsname,
    })) as INavItem[]
}

export const navItemsVeranstaltungen = async (): Promise<INavItem[]> => {
    const contentfulVeranstaltungen = await contentfulClient.getEntries({ content_type: "veranstaltungen" })
    return contentfulVeranstaltungen.items.map((item) => ({
        href: `/veranstaltungen/${(item.fields.kurzertitel ?? '').toString()}`,
        title: item.fields.kurzertitel,
    })) as INavItem[]
}