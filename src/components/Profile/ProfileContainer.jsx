import { connect } from 'react-redux'
import { getProfile } from 'src/redux/features/profileSlice'
import Profile from 'src/components/Profile/Profile'

const mapStateToProps = ({ profile, auth }) => ({
  profileData: profile.profileData,
  loading: profile.loading,
  authUserId: auth.data.id,
})

export default connect(mapStateToProps, { getProfile })(Profile)
