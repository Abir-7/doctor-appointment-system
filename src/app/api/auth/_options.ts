import UserModel from "@/MongooseModels/UserModel";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import connectDB from "@/lib/Database/Connection";

export const authOptions: NextAuthOptions = {

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Your Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your Password",
        },
      },
      async authorize(credentials, req) {
        //  console.log(credentials,'gg')
        try {
          if (!credentials?.email || !credentials.password)
            throw new Error("Password not match");

          await connectDB(); // db connection

          const userExist = await UserModel.findOne({
            email: credentials.email,
          });

          // console.log(credentials,userExist)

          if (!userExist) throw new Error("Email not found");

          const passMatch = await bcrypt.compare(
            credentials.password,
            userExist.password
          );

         // console.log(userExist);

          if (!passMatch) throw new Error("Password not matched");

            const data:any= {name:userExist.firstName+' '+userExist.lastName,email:userExist.email,image:'',role:'user'}

          return data ;

        } catch (error) {
          throw new Error(`${error}`);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  // session: {
  //   // Set custom expiration time for sessions
  //   maxAge: 30, // 2 minutes in seconds
  // }
};
