import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ params, request }) => {
  return new Response(JSON.stringify({
      path: new URL(request.url).pathname,
      title: 'Vengardus',
    })
  )
}
