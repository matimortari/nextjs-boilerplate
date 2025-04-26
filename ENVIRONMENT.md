# Environment Variables

This project uses several environment variables. You can copy the template below into a `.env.local` (for development) or `.env.production` (for production) file and fill in the required values.

Refer to the documentation linked for each service to learn how to obtain and use the necessary credentials.

```bash
# https://www.prisma.io/docs/orm/reference/connection-urls
DATABASE_URL=""

# https://next-auth.js.org/configuration/options
NEXTAUTH_URL=""
NEXTAUTH_SECRET=""

# https://next-auth.js.org/providers/github
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# https://next-auth.js.org/providers/google
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```
