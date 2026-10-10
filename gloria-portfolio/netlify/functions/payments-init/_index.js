export default async function handler() {
	return {
		statusCode: 410,
		body: JSON.stringify({ error: 'payments-init archived' }),
	};
}

