## Info

Initialize the Project:
```console
# Step 1: Initialize the project
mkdir my-express-app
cd my-express-app
npm init -y
```

Create a new directory for your project.
Initialize a new Node.js project with npm init -y.
Install necessary dependencies.

```console
# Step 2: Install dependencies
npm install express sqlite3
npm install --save-dev typescript @types/node @types/express ts-node
```
Install Dependencies:

Install Express, SQLite, and TypeScript.
Install development dependencies for TypeScript and types for Node.js and Express.
Setup TypeScript Configuration:
```console
# Step 3: Setup TypeScript configuration
npx tsc --init
npm install sqlite
npm install @types/sqlite3 --save-dev
npm install cors
```

Create a tsconfig.json file to configure TypeScript.
Create Express Application:

Create an entry point file (index.ts).
Setup Express server.
Setup SQLite Connection:

Use sqlite3 or better-sqlite3 to connect to SQLite.
Run the Application:

Compile TypeScript files and run the server.
