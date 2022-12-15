export async function getUserInformation(session: string) {
	// here you should validate the correctness of the session
	if (session === 'correct_session') {
		return {
			role: 'USER',
			username: 'John'
		};
	}
	return null;
}
