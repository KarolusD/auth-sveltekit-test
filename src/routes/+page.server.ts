import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
  login: async ({ cookies }) => {
    cookies.set('session', 'correct_session', {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
      maxAge: 60 * 60 * 24 * 30
    });
    throw redirect(302, '/protected');
  }
};
