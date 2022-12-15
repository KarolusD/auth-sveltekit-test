import type { Handle } from '@sveltejs/kit';
import { getUserInformation } from './lib/server/getUserInformation';

export const handle = (async ({ event, resolve }) => {
	event.locals.user = await getUserInformation(event.cookies.get('session') ?? '');
	// if (event.url.pathname.startsWith('/custom')) {
	// 	return new Response('custom response');
	// }

	const response = await resolve(event);
	return response;
}) satisfies Handle;
