# Environment Variables

This project uses several environment variables. You can copy the template below into a `.env.local` (for development) or `.env.production` (for production) file and fill in the required values.

Refer to the documentation linked for each service to learn how to obtain and use the necessary credentials.

```bash
# https://www.prisma.io/docs/orm/reference/connection-urls
DATABASE_URL=""

# https://www.better-auth.com/docs/reference/options
BETTER_AUTH_URL=""
BETTER_AUTH_SECRET=""

# https://www.better-auth.com/docs/authentication/github
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# https://www.better-auth.com/docs/authentication/google
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```
