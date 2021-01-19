import { useContext } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { useSocket } from '@/lib/hooks/hooks'
import { authContext } from '@/lib/context/auth/context'
import { useComments } from '@/lib/hooks/api-hooks'
import Comments from './Comments'
import * as S from './styled'

type Props = {
  articleId: string
}

type Inputs = {
  comment: string
}

const CommentSection: React.FC<Props> = ({ articleId }) => {
  const { isLoggedIn, user } = useContext(authContext)
  const { data, isSuccess, refetch } = useComments(articleId)

  const socket = useSocket('comment-added', ({ articleId: id }) => {
    if (id === articleId) {
      refetch()
    }
  })
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit = handleSubmit(({ comment }) => {
    if (user) {
      socket.emit('add-comment', {
        userId: user.id,
        articleId,
        comment,
      })
    }
  })

  return (
    <S.Wrapper>
      <S.Title>Join the discussion!</S.Title>
      <S.CommentBox>
        <S.CommentInput
          rows={3}
          ref={register({ required: true })}
          name="comment"
          placeholder="Comment..."
        />
        <S.CommentBoxBottom>
          <S.PostCommentButtom disabled={!isLoggedIn} onClick={onSubmit}>
            Post Comment
          </S.PostCommentButtom>
          {isLoggedIn || (
            <S.Hint>
              please{' '}
              <Link href="/signin">
                <a>log in</a>
              </Link>{' '}
              or{' '}
              <Link href="/signup">
                <a>register</a>
              </Link>
              <br />
              to comment
            </S.Hint>
          )}
        </S.CommentBoxBottom>
      </S.CommentBox>

      {isSuccess && <Comments comments={data.comments} />}
    </S.Wrapper>
  )
}

export default CommentSection
