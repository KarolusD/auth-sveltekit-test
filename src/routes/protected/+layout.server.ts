import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ url, locals }) => {
  console.info('Hello from protected routes! You are in:', url.pathname);
  if (url.pathname.startsWith('/protected') && !locals.user) {
    throw redirect(302, '/');
  }
}) satisfies LayoutServerLoad;
