import { useState } from 'react'
import { CommentsByArticleIdQuery } from 'generated/graphql'
import * as S from './styled'

type Props = {
  comments: CommentsByArticleIdQuery['comments']
}

const Comments: React.FC<Props> = ({ comments }) => {
  const [showComments, setShowComments] = useState(false)

  return (
    <S.Comments>
      <S.CommentsTop>
        <div>
          <S.CommentsTitle>Comments</S.CommentsTitle>
          <S.CommentsCount>
            {`${comments ? comments.length : 0} Comments`}
          </S.CommentsCount>
        </div>
        <S.ToggleCommentsButton onClick={() => setShowComments(!showComments)}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </S.ToggleCommentsButton>
      </S.CommentsTop>
      {showComments &&
        comments.map(comment => (
          <S.Comment key={comment.id}>
            <S.CommentAuthor>{comment.user.username}:</S.CommentAuthor>
            <S.CommentText>&nbsp;&nbsp;-&nbsp;{comment.text}</S.CommentText>
          </S.Comment>
        ))}
    </S.Comments>
  )
}

export default Comments
