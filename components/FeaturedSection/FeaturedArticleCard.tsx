import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTransition, animated } from 'react-spring'

import Markdown from '@/components/Markdown/Markdown'
import { getImageUrl } from '@/lib/utils'
import { FeaturedArticlesType } from '@/lib/api/types'
import * as S from './styled'

type Props = {
  articles: FeaturedArticlesType
}

const FeaturedArticleCard: React.FC<Props> = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentIndexRef = useRef(currentIndex)
  currentIndexRef.current = currentIndex

  useEffect(() => {
    function callback() {
      setCurrentIndex(
        currentIndexRef.current >= articles.length - 1
          ? 0
          : currentIndexRef.current + 1
      )
    }

    const intervalId = setInterval(callback, 3_000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const transitions = useTransition(currentIndex, currentIndex, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  if (!articles || !articles.length) {
    return null
  }

  return (
    <div style={{ position: 'relative', minHeight: '670px' }}>
      {transitions.map(({ item, key, props }) => {
        const currentArticle = articles[item].article

        return (
          <animated.div key={key} style={props}>
            <S.Article>
              <div>
                {currentArticle.image && (
                  <Link href={`/article/${currentArticle.id}`}>
                    <a>
                      <Image
                        src={getImageUrl(currentArticle.image.url)}
                        alt={currentArticle.image.alternativeText}
                        layout="responsive"
                        width={currentArticle.image.width}
                        height={currentArticle.image.height}
                      />
                    </a>
                  </Link>
                )}
              </div>
              <div>
                {currentArticle.category && (
                  <Link href={`/category/${currentArticle.category.id}`}>
                    <a>
                      <h4>{currentArticle.category.name}</h4>
                    </a>
                  </Link>
                )}

                <Link href={`/article/${currentArticle.id}`}>
                  <a>
                    <S.Title>{currentArticle.title}</S.Title>
                  </a>
                </Link>

                <Markdown source={currentArticle.excerpt} />
              </div>
            </S.Article>
          </animated.div>
        )
      })}
    </div>
  )
}

export default FeaturedArticleCard
