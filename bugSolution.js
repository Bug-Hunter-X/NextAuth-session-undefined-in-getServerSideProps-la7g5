```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function getSession(ctx) {
  return unstable_getServerSession(ctx.req, ctx.res, authOptions);
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  };
}

export default function MyComponent({ session }) {
  if (!session) {
    return <p>Please sign in</p>;
  }

  // ... rest of component
}
```