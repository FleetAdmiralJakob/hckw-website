import "server-only"
import { contentfulClient } from "~/lib/contentful/client"
import type { INavItem } from "./config"

export const navItemsMannschaften = async (): Promise<INavItem[]> => {
    const contentfulMannschaften = await contentfulClient.getEntries({ content_type: "mannschaften" })
    return contentfulMannschaften.items
    .sort((a, b) => ((a.fields.kurzerMannschaftsname ?? '') as string).localeCompare((b.fields.kurzerMannschaftsname ?? '') as string))
    .map((item) => ({
        href: `/mannschaften/${(item.fields.kurzerMannschaftsname ?? '').toString().replace(/\s+/g, '-').toLowerCase()}`,
        title: item.fields.kurzerMannschaftsname,
    })) as INavItem[]
}

export const navItemsVeranstaltungen = async (): Promise<INavItem[]> => {
    const contentfulVeranstaltungen = await contentfulClient.getEntries({ content_type: "veranstaltungen" })
    return contentfulVeranstaltungen.items
        .sort((a, b) => ((a.fields.kurzertitel ?? '') as string).localeCompare((b.fields.kurzertitel ?? '') as string))
        .map((item) => ({
            href: `/veranstaltungen/${(item.fields.kurzertitel ?? '').toString().replace(/\s+/g, '-').toLowerCase()}`,
            title: item.fields.kurzertitel,
        })) as INavItem[]
}