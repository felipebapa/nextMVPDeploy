
// line for auth to the entire project:
export { default} from "next-auth/middleware"


// line for specific pages.
export const config = {matcher: ["/GAPO", "/MainGroovy"]}