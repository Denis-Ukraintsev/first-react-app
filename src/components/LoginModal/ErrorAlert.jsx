import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setCloseSharedError } from '..//..//redux/features/sharedSlice'

const ErrorAlert = () => {
  const i18n = {
    closeButton: 'close',
  }

  const errorText = useSelector(({ shared }) => shared.sharedError)
  const dispatch = useDispatch()
  return (
    <ErrorAlertOverlay>
      <ErrorAlertRoot>
        <ErrorText>{errorText}</ErrorText>
      </ErrorAlertRoot>
      <CloseBtn
        onClick={() => {
          dispatch(setCloseSharedError())
        }}
      >
        {i18n.closeButton}
      </CloseBtn>
    </ErrorAlertOverlay>
  )
}

const ErrorAlertOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
`

const ErrorAlertRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  background-color: #fff;
  border-radius: 15px;
`

const ErrorText = styled.span`
  color: brown;
`

const CloseBtn = styled.button`
  height: 50px;
  width: 300px;
  border-radius: 15px;
  background-color: #706e83;
  margin: 5px;
`
export default ErrorAlert
