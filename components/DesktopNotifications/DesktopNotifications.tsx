import * as S from './styled'

const DesktopNotifications = () => {
  if (
    process.browser &&
    +localStorage.getItem('@dont-show-notification-banner') === 1
  ) {
    return null
  }

  if (process.browser && Notification.permission !== 'default') {
    return null
  }

  const handleEnableClick = () => {
    Notification.requestPermission()
  }

  const handleNeverShowAgainClick = () => {
    localStorage.setItem('@dont-show-notification-banner', '1')
  }

  return (
    <S.Wrapper>
      <span>Enable desktop notifications:</span>
      <S.Button onClick={handleEnableClick}>Enable</S.Button>
      <S.Button onClick={handleNeverShowAgainClick}>Never show again</S.Button>
    </S.Wrapper>
  )
}

export default DesktopNotifications
