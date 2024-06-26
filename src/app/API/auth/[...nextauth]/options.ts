import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { capitalize } from 'lodash'

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,

        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: capitalize("text"),
                    placeholder: "your-cool-username"
                },
                password:{
                    label: "Password:",
                    type: "password",
                    placeholder: "your-Groovy-password"

                }
            },
            async authorize(credentials){
                // This is where we need to retrieve user data
                // to verify credentials
                //http://next-auth.js.org/configuration/providers/credentials

                const user = { id: "42", name: capitalize("Felipe"), password: "sandax" }

                if(credentials?.username === user.name && credentials?.password === user.password){

                    return user
                } else {

                    return null
                }

            }

        })
    ],
}