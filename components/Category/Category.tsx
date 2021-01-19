import Link from 'next/link'
import Image from 'next/image'

import { getImageUrl } from '@/lib/utils'
import { useCategory } from '@/lib/hooks/api-hooks'
import Articles from '@/components/Articles/Articles'
import * as S from './styled'

type Props = {
  categoryId: string
}

const Category: React.FC<Props> = ({ categoryId }) => {
  const { data: category, isLoading } = useCategory(categoryId)
  if (isLoading) {
    return null
  }
  const featuredArticle = category.featuredArticle

  return (
    <S.Wrapper>
      <S.SectionTitle>{category.name}</S.SectionTitle>
      {featuredArticle && (
        <S.Featured>
          <Link href={`/article/${featuredArticle.id}`}>
            <a>
              <S.FeaturedTitle>{featuredArticle.title}</S.FeaturedTitle>
            </a>
          </Link>
          <S.FeaturedExcerpt>{featuredArticle.excerpt}</S.FeaturedExcerpt>
          {featuredArticle.image && (
            <Link href={`/article/${featuredArticle.id}`}>
              <a>
                <Image
                  src={getImageUrl(featuredArticle.image.url)}
                  alt={featuredArticle.image.alternativeText}
                  width={featuredArticle.image.width}
                  height={featuredArticle.image.height}
                />
              </a>
            </Link>
          )}
        </S.Featured>
      )}
      <Articles articles={category.articles} />
    </S.Wrapper>
  )
}

export default Category
