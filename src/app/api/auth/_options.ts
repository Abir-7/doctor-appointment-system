import UserModel from "@/MongooseModels/UserModel"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt';
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              email: { label: "Email", type: "email", placeholder: "Your Email" },
              password: { label: "Password", type: "password",placeholder: "Your Password" }
            },
            async authorize(credentials, req) {
           if(!credentials?.email || !credentials.password) return null
       
           const userExist=await UserModel.findOne({email:credentials.email})
           if(!userExist) return null

          const passMatch = await bcrypt.compare(credentials.password,userExist.hashedPassword)
        
           return passMatch? userExist : null

            }
           
          })
    ],
  }