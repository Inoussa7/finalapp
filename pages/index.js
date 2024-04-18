import Page from '../app/page';
import { sql } from '@vercel/postgres';

export async function getServerSideProps() {
    const returned = await sql`SELECT * FROM language_table`;
    return {
        props: { users: returned.rows },
    };
}

export default function HomePage(props) {
    return <Page {...props} />;
}
