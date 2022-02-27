import userAvatar from 'src/assets/userAvatar.png'
import styled from 'styled-components'

const UserAva = ({ avaAddress }) => (
  <AvaContainer>
    {avaAddress ? (
      <Avatar src={avaAddress} alt="Avatar" />
    ) : (
      <Avatar src={userAvatar} />
    )}
  </AvaContainer>
)

const AvaContainer = styled.div`
  border-radius: 5px;
`
const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`

export default UserAva
