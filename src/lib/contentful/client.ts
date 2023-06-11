import "server-only"
import { env } from '../../env.mjs';
import * as contentful from 'contentful';

export const contentfulClient = contentful.createClient({
    space: env.CONTENTFUL_SPACE_ID,
    accessToken: env.CONTENTFUL_ACCESS_TOKEN,
});
