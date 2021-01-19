import styled from '@emotion/styled'
import ReactMarkdown, {
  renderers as defaultRenderers,
  ReactMarkdownProps,
} from 'react-markdown'
import ReactPlayer from 'react-player'

type Props = {
  source: string
} & ReactMarkdownProps

const renderers = {
  ...defaultRenderers,
  image(node: { src: string }) {
    if (node.src.match(/\.mp4$|\.webm$|\.ogg$/)) {
      return (
        <ReactPlayer
          url={node.src}
          width="90%"
          height="auto"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          playing
          controls
        />
      )
    } else {
      return <img {...node} />
    }
  },
}

export default styled(props => (
  <ReactMarkdown {...props} escapeHtml={false} renderers={renderers} />
))<Props>``
