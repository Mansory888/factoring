import { notFound } from 'next/navigation';
import { Article } from '@/types/article';
import Data from '../../../../public/data.json';
import { Metadata } from 'next';

// Ensure your data.json is properly typed
const articles: Article[] = Data;

// Function to fetch an article by slug
const fetchArticleBySlug = (slug: string): Article | undefined => {
    return articles.find((article) => article.slug === slug);
};

// Generate static paths for all articles
export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const article = fetchArticleBySlug(params.slug);

    if (!article) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: article.title,
        description: `Read the latest article in the ${article.category} category by ${article.authorName}.`,
    };
}

interface ArticlePageProps {
    params: { slug: string };
}

export default function ArticlePage({ params }: ArticlePageProps) {
    const article = fetchArticleBySlug(params.slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-secondary mb-4">{article.title}</h1>
            <p className="text-secondary mb-6">
                Door {article.authorName} | {new Date(article.date).toLocaleDateString()}
            </p>
            <div className="mb-6">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-auto rounded-lg"
                />
            </div>
            <div
                className="prose prose-lg text-secondary"
                dangerouslySetInnerHTML={{ __html: article.content }}
            ></div>
        </div>
    );
}
