import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth";
import { z } from "zod";

declare global {
  // Prevents multiple Prisma Client instances in development
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const userCredentials = {
          email: credentials?.email,
          password: credentials?.password,
        };

        const validation = schema.safeParse(userCredentials);
        if (!validation.success) {
          throw new Error("Invalid input");
        }

        const user = await prisma.user.findUnique({
          where: { email: userCredentials.email },
        });

        if (!user) {
          throw new Error("Invalid Username or Password!");
        }

        const validPassword = await bcrypt.compare(
          userCredentials.password,
          user.hashedPassword,
        );

        if (!validPassword) {
          throw new Error("Invalid Username or Password!");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      if (token) {
        session.user = {
          id: token.id,
          name: token.name,
          email: token.email,
          role: token.role,
        };
      }
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);

// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcrypt";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { NextResponse } from "next/server";
// import { z } from "zod";
// import { NextAuthOptions } from "next-auth";

// // import { validateSubscriberLogin } from "@/app/utils/validation";

// let currentUser;
// const schema = z.object({
//   email: z.string().email(),
//   password: z.string().min(5),
// });
// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",

//       credentials: {
//         email: {},
//         password: {},
//       },
//       async authorize(credentials, req) {
//         // await new Promise(resolve => setTimeout(resolve, 5000)); // Sleep for 2 seconds
//         const prisma = new PrismaClient();

//         let userCredentials = {
//           email: credentials.email,
//           password: credentials.password,
//         };

//         console.log("userCredentails: ", userCredentials);

//         // validate Subscriber inputs
//         // const { error } = validateSubscriberLogin(userCredentials);

//         const validation = schema.safeParse(userCredentials);
//         if (!validation.success)
//           return NextResponse.json(validation.error.errors, {
//             status: 400,
//           });

//         // if (error) {
//         //   return NextResponse.json(
//         //     { message: error.details[0].message },
//         //     { status: 400 },
//         //   );
//         // }

//         // account with the email exists
//         const user: any = await prisma.user.findUnique({
//           where: {
//             email: userCredentials.email,
//           },
//         });
//         console.log("user: ", user);

//         if (!user) {
//           console.log("No User:");
//           throw new Error("Invalid Username or Password!");
//         } else {
//           const validPassword = await bcrypt.compare(
//             userCredentials.password,
//             user.hashedPassword,
//           );

//           if (!validPassword) {
//             console.log("NOt valid password");
//             throw new Error("Invalid Username or Password!");
//           } else {
//             console.log("From next auth");
//             currentUser = {
//               id: user.id,
//               name: user.name,
//               email: user.email,
//               // role: user.role_id,
//             };
//             console.log(req);
//             console.log("currentUser:: ", currentUser);
//             return currentUser;
//           }
//         }
//       },
//     }),
//   ],

//   callbacks: {
//     async session({ session, token }) {
//       // console.log('From Session token: ', token)

//       // console.log('From session session: ', session)
//       if (token) {
//         session.user.name = token.firstName + " " + token.lastName;
//         session.user.email = token.email;
//         // session.user.role = token.role;
//         // session.user.id = token.id;
//       }
//       return session;
//     },
//     // async jwt({ token }) {
//     //     if(token) {
//     //         console.log('From AuthOptions User: ', token)
//     //         token.role = currentUser.role
//     //     }
//     //     console.log('From AuthOptions After User: ', token)
//     //   return token
//     // },
//     async jwt({ token }) {
//       if (currentUser) {
//         // Check if user data exists
//         token.email = currentUser.email;
//         token.firstName = currentUser.firstName;
//         token.lastName = currentUser.lastName;
//         token.role = currentUser.role;
//         token.id = currentUser.id;
//         currentUser = null; // Clear the variable after usage
//       }
//       return token;
//     },
//   },
// };
// // export default authOptions;

// // import { prisma } from "prisma/client";
// // import { PrismaAdapter } from "@next-auth/prisma-adapter";
// // import { NextAuthOptions } from "next-auth";
// // import GoogleProvider from "next-auth/providers/google";
// // import CredentialsProvider from "next-auth/providers/credentials";
// // import bcrypt from "bcrypt";

// // export const authOptions: NextAuthOptions = {

// //   adapter: PrismaAdapter(prisma),
// //   providers: [
// //     CredentialsProvider({
// //       name: "Credentials",
// //       credentials: {
// //         email: {
// //           label: "Email",
// //           type: "email",
// //           placeholder: "Email",
// //         },
// //         password: {
// //           label: "Password",
// //           type: "password",
// //           placeholder: "Password",
// //         },
// //       },
// //       async authorize(credentials, req) {

// //         if (!credentials?.email || !credentials.password)
// //           return null;

// //         const user = await prisma.user.findUnique({
// //           where: { email: credentials.email },
// //         });

// //         if (!user) return null;

// //         const passwordsMatch = await bcrypt.compare(
// //           credentials.password,
// //           user.hashedPassword!
// //         );

// //         return passwordsMatch ? user : null;
// //       },
// //     }),
// //     GoogleProvider({
// //       clientId: process.env.GOOGLE_CLIENT_ID!,
// //       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
// //     }),
// //   ],
// //   session: {
// //     strategy: "jwt",
// //   },

// // };
