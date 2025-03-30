import { Container } from '@/components/shared';
import { OrdersList } from '@/components/shared/orders-list';
import { ProfileForm } from '@/components/shared/profile/profile-form';
import { getUserSession } from '@/lib/get-user-session';
import prisma from '@/prisma/prisma-client';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
	const session = await getUserSession();

	if (!session) {
		return redirect('/');
	}

	const user = await prisma.user.findFirst({
		where: {
			id: Number(session?.id),
		},
	});

	if (!user) {
		return redirect('/');
	}

	return (
		<Container className="flex flex-col lg:flex-row gap-[20px] lg:gap-[125px] px-5 xl:px-0">
			<ProfileForm data={user} />
			<OrdersList />
		</Container>
	);
}
