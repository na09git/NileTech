import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import { z } from "zod";
import { NextAuthOptions } from "next-auth";


// import { validateSubscriberLogin } from "@/app/utils/validation";

let currentUser;
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
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const prisma = new PrismaClient();
        
        let userCredentials = {
          email: credentials.email,
          password: credentials.password,
        };
        
        console.log("userCredentails: ", userCredentials)
        await new Promise(resolve => setTimeout(resolve, 5000)); // Sleep for 2 seconds
        

        // validate Subscriber inputs
        // const { error } = validateSubscriberLogin(userCredentials);

        const validation = schema.safeParse(userCredentials);
        if (!validation.success)
          return NextResponse.json(validation.error.errors, {
            status: 400,
          });

        // if (error) {
        //   return NextResponse.json(
        //     { message: error.details[0].message },
        //     { status: 400 },
        //   );
        // }

        // account with the email exists
        const user: any = await prisma.user.findUnique({
          where: {
            email: userCredentials.email,
          },
        });

        if (!user) {
          console.log("No User:")
          throw new Error("Invalid Username or Password!");
        } else {
          const validPassword = await bcrypt.compare(
            userCredentials.password,
            user.password,
          );

          if (!validPassword) {
            throw new Error("Invalid Username or Password!");
          } else {
            console.log("From next auth");
            currentUser = {
              id: user.id,
              firstName: user.first_name,
              lastName: user.last_name,
              email: user.email,
              role: user.role_id,
            };
            console.log(req);
            console.log(currentUser);
            return currentUser;
          }
        }
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      // console.log('From Session token: ', token)

      // console.log('From session session: ', session)
      if (token) {
        session.user.name = token.firstName + " " + token.lastName;
        session.user.email = token.email;
        // session.user.role = token.role;
        // session.user.id = token.id;
      }
      return session;
    },
    // async jwt({ token }) {
    //     if(token) {
    //         console.log('From AuthOptions User: ', token)
    //         token.role = currentUser.role
    //     }
    //     console.log('From AuthOptions After User: ', token)
    //   return token
    // },
    async jwt({ token }) {
      if (currentUser) {
        // Check if user data exists
        token.email = currentUser.email;
        token.firstName = currentUser.firstName;
        token.lastName = currentUser.lastName;
        token.role = currentUser.role;
        token.id = currentUser.id;
        currentUser = null; // Clear the variable after usage
      }
      return token;
    },
  },
};
// export default authOptions;


// import { prisma } from "prisma/client";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";

// export const authOptions: NextAuthOptions = {
  
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "Email",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//           placeholder: "Password",
//         },
//       },
//       async authorize(credentials, req) {

//         if (!credentials?.email || !credentials.password)
//           return null;

//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//         });

//         if (!user) return null;

//         const passwordsMatch = await bcrypt.compare(
//           credentials.password,
//           user.hashedPassword!
//         );


//         return passwordsMatch ? user : null;
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },


// };
