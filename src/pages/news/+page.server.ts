import type { PageServerLoad } from './$types';
import prisma from '$lib/prismaClient';

export const prerender = false;
export const ssr = false;
export const csr = true;

export const load = (async () => {
	const posts = await prisma.post.findMany();

	return { posts };
}) satisfies PageServerLoad;
