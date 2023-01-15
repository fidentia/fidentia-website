import * as prismic from '@prismicio/client'

export function getPrismicClient(){

  const client = prismic.createClient("https://space-traveling-gio.cdn.prismic.io/api/v2", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    defaultParams:{
      pageSize: 5
    }
  });

  return client;
}