import Link from 'next/link'
import Image from 'next/image'

import { getImageUrl } from '@/lib/utils/getImageUrl'
import { useCategory } from '@/lib/hooks/api-hooks'
import Markdown from '@/components/Markdown/Markdown'
import * as S from './styled'

type Props = {
  categoryId: string
}

const CategorySection: React.FC<Props> = ({ categoryId }) => {
  const { data: category, isSuccess } = useCategory(categoryId, 4)
  if (!isSuccess) {
    return null
  }
  if (!category.featuredArticle && !category.articles?.length) {
    return null
  }
  const featuredArticle = category.featuredArticle || category.articles[0]

  return (
    <S.Wrapper>
      <Link href={`/category/${category.id}`}>
        <a>
          <S.CategoryName>{category.name}</S.CategoryName>
        </a>
      </Link>
      <S.ContentWrapper>
        {featuredArticle && (
          <Link
            href={`/article/${featuredArticle.id}`}
            key={featuredArticle.id}
          >
            <a>
              <S.Featured>
                {featuredArticle.image && (
                  <Image
                    src={getImageUrl(featuredArticle.image.url)}
                    alt={featuredArticle.image.alternativeText}
                    width={featuredArticle.image.width}
                    height={featuredArticle.image.height}
                  />
                )}
                <h2>{featuredArticle.title}</h2>
                <Markdown source={featuredArticle.excerpt} />
              </S.Featured>
            </a>
          </Link>
        )}
        <S.TheLatest>
          <h4>The Latest</h4>
          {category.articles.map(article => (
            <Link href={`/article/${article.id}`} key={article.id}>
              <a>
                <S.LatestArticle>
                  {article.image && (
                    <Image
                      src={getImageUrl(article.image.url)}
                      alt={article.image.alternativeText}
                      height={200}
                      width={120}
                    />
                  )}
                  <div>
                    <h4>{article.title}</h4>
                    <S.ReadMore>Read more</S.ReadMore>
                  </div>
                </S.LatestArticle>
              </a>
            </Link>
          ))}
        </S.TheLatest>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default CategorySection
