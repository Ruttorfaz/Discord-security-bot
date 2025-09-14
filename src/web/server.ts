import express from 'express';
import helmet from 'helmet';
import csurf from 'csurf';
import session from 'cookie-session';

const app = express();
app.use(helmet());
app.use(express.json());
app.use(session({ name: 'sess', keys: [process.env.SESSION_SECRET || 'fallback'], secure: true, httpOnly: true, sameSite: 'lax' }));
app.use(csurf());

app.get('/', (req, res) => res.send('Dashboard minimale'));
app.listen(3000, () => console.log('Web up'));