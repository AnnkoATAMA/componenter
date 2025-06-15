import ArticlePreview, {type Article } from '../molecules/ArticlePreview';

type ArticlePreviewListProps = {
    articles?: Article[];
};

export default function ArticlePreviewList({ articles = [] }: ArticlePreviewListProps) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {articles.length === 0 ? (
                <div
                    style={{
                        color: '#aaa',
                        fontStyle: 'italic',
                        backgroundColor: 'var(--color-surface)',
                        padding: '16px',
                        borderRadius: 'var(--radius)',
                    }}
                >
                    No articles to display.
                </div>
            ) : (
                articles.map((article) => (
                    <ArticlePreview key={article.id} article={article} />
                ))
            )}
        </div>
    );
}
