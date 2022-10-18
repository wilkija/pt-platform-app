import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export const options = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        // Providers.Email({
        //     server: {
        //         host: "",
        //         port: "",
        //         auth: {
        //             user: "",
        //             pass: ""
        //         }
        //     },
        //     from: "",
        // }),
    ],
    secret: process.env.JWT_SECRET,
    database: process.env.MONGODB_URI,
    callbacks: {
        async jwt({token, user, account, profile, isNewUser}) {
            user && (token.user = user)
            return token
        },
        async session({session, token, user}) {
            session = {
                ...session,
                user: {
                    id: user.id,
                    ...session.user
                }
            }
            return session
        }
    },
};

export default NextAuth(options);