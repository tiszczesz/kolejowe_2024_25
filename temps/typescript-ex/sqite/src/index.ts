import express, { Request, Response } from 'express';
import sqlite3 from 'sqlite3';
import { Database } from 'sqlite';
import { open } from 'sqlite';
import cors from 'cors';

const app = express();
const port = 3000;
type User = {
    id: number;
    name: string;
};

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Initialize SQLite database
async function initDb() {
    const db:Database = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

    await db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');
    return db;
}

app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.get('/users', async (req: Request, res: Response) => {
    try {
        const db = await initDb();
        const users: User[] = await db.all('SELECT * FROM users');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});
app.post('/users', async (req, res) => {
    try {
        const db = await initDb();
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
        const result = await db.run('INSERT INTO users (name) VALUES (?)', name);
        res.json({ id: result.lastID });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});
app.get('/users/:id', async (req, res) => {
    try {
        const db = await initDb();
        const { id } = req.params;
        const user: User | undefined = await db.get('SELECT * FROM users WHERE id = ?', id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});
app.put('/users/:id', async (req, res) => {
    try {
        const db: Database = await initDb();
        const { id } = req.params;
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
        const result = await db.run('UPDATE users SET name = ? WHERE id = ?', name, id);
        if (result.changes === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
});
app.delete('/users/:id', async (req, res) => {
    try {
        const db = await initDb();
        const { id } = req.params;
        const result = await db.run('DELETE FROM users WHERE id = ?', id);
        if (result.changes === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
});
app.listen(port, async () => {
    const db = await initDb();
    console.log(`Server is running on http://localhost:${port}`);
});