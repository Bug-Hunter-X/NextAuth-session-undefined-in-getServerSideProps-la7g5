# NextAuth session undefined in getServerSideProps

This repository demonstrates a common issue when using NextAuth.js with `getServerSideProps`:
The session object is undefined even after successful authentication.

## Bug Description

The code uses `unstable_getServerSession` to retrieve the user's session. This works fine when used in a regular component using `getServerSession`.  However, when attempting to use it within `getServerSideProps`  the session is always undefined.

## Solution

The solution involves using a custom function to resolve the session and passing it as a prop to the component.