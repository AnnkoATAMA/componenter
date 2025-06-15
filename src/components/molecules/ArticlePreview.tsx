export type Article = {
    id: string;
    title: string;
    summary: string;
    date: string;
};

type Props = {
    article?: Article;
};

export default function ArticlePreview({ article }: Props) {
    if (!article) {
        return (
            <div
                style={{
                    padding: '16px',
                    borderRadius: 'var(--radius)',
                    backgroundColor: 'var(--color-surface)',
                    color: '#aaa',
                    fontStyle: 'italic',
                }}
            >
                No article provided.
            </div>
        );
    }

    return (
        <div
            style={{
                border: '1px solid var(--color-surface-light)',
                borderRadius: 'var(--radius)',
                padding: '16px',
                backgroundColor: 'var(--color-surface)',
                transition: 'var(--transition)',
            }}
        >
            <h3
                style={{
                    fontSize: '1.25rem',
                    marginBottom: '8px',
                    color: 'var(--color-cyan)',
                }}
            >
                {article.title}
            </h3>
            <p
                style={{
                    fontSize: '0.875rem',
                    color: '#ccc',
                    marginBottom: '8px',
                }}
            >
                {article.summary}
            </p>
            <span style={{ fontSize: '0.75rem', color: '#999' }}>{article.date}</span>
        </div>
    );
}
