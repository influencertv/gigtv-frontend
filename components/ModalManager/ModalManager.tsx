import { useEffect } from 'react'
import { isIOS, isAndroid } from 'react-device-detect'
import { useModal } from 'react-modal-hook'

import { useSiteData } from '@/lib/hooks/api-hooks'
import TryOurMobileAppModal from './TryOurMobileAppModal'
import ProfileModal from './ProfileModal'
import Modal from './Modal'

type Props = {
  isProfileModalOpened: boolean
}

const ModalManager: React.FC<Props> = ({ isProfileModalOpened }) => {
  const { data } = useSiteData()
  const [showModal, hideModal] = useModal(() => {
    let content: React.ReactElement
    const mobileAppLinks = data?.mobileAppLinks

    if (isIOS || isAndroid) {
      content = (
        <TryOurMobileAppModal
          os={isIOS ? 'iOS' : 'Android'}
          mobileAppLinks={mobileAppLinks}
        />
      )
    }

    if (isProfileModalOpened) {
      content = <ProfileModal />
    }

    return (
      <Modal isOpen onRequestClose={hideModal}>
        {content}
      </Modal>
    )
  })

  useEffect(() => {
    if (isIOS || isAndroid) {
      showModal()
    }
    if (isProfileModalOpened) {
      showModal()
    } else {
      hideModal()
    }
  }, [isProfileModalOpened])

  return null
}

export default ModalManager
