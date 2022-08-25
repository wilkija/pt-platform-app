import { getSession } from "next-auth/react";

export const ensureAuth = async (context, cb) => {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return cb({ session });
}