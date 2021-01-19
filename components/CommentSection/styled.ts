import styled from '@emotion/styled'

export const Wrapper = styled.section``

export const Title = styled.h3`
  margin-bottom: 15px;
`

export const CommentBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px 10px;
  padding-bottom: 15px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const CommentInput = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #404040;
  font-size: 0.85rem;
  padding: 0.25rem 0;
  width: 99%;

  &:focus {
    border-bottom-color: ${props => props.theme.colors.secondary};
    outline: none;
  }
  font-style: italic;
`

export const PostCommentButtom = styled.button`
  border: none;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.75em; // 12px/16px
  display: inline-block;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    text-decoration: none;
    outline: none;
  }
`

export const Comments = styled.div`
  max-width: 350px;
`

export const CommentsTop = styled.div`
  margin-top: 10px;
  margin-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const CommentsTitle = styled.h5`
  font-size: 14px;
  margin-bottom: 5px;
`

export const ToggleCommentsButton = styled.button`
  flex-basis: 50%;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.75em; // 12px/16px
  display: inline-block;
  text-decoration: none;
  color: #fff;
  background-color: ${props => props.theme.colors.secondary};

  &:hover {
    cursor: pointer;
  }
  &:focus {
    text-decoration: none;
    outline: none;
  }
`

export const CommentsCount = styled.div``

export const Comment = styled.div`
  border-top: 2px solid black;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const CommentAuthor = styled.div`
  margin-bottom: 5px;
`

export const CommentText = styled.p`
  font-style: italic;
`

export const Hint = styled.div`
  font-size: 14px;
  a {
    text-decoration: underline;
  }
`

export const CommentBoxBottom = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.fontColors.grey};
`
