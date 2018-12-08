import gql from 'graphql-tag';

export const CHANGE_PASSWORD_MUTATION = gql`
  mutation changePassword($password: String, $password_confirm: String) {
    changePassword(password: $password, password_confirm: $password_confirm)
  }
`;

export const REFRESH_TOKEN_MUTATION = gql`
  mutation refreshToken($token: String) {
    refreshToken(token: $token) {
      refreshToken
      accessToken
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($phone: String, $password: String) {
    login(phone: $phone, password: $password) {
      refreshToken
      accessToken
    }
  }
`;

export const REGISTRATION_MUTATION = gql`
  mutation registration($phone: String, $password: String, $password_confirm: String) {
    registration(phone: $phone, password: $password, password_confirm: $password_confirm)
  }
`;

export const REGISTRATION_CONFIRM_MUTATION = gql`
  mutation registrationConfirm($token: String) {
    registrationConfirm(token: $token) {
      refreshToken
      accessToken
    }
  }
`;

export const RESTORE_MUTATION = gql`
  mutation restore($phone: String) {
    restore(phone: $phone)
  }
`;

export const RESTORE_CHECK_MUTATION = gql`
  mutation restoreCheck($token: String) {
    restoreCheck(token: $token)
  }
`;

export const RESTORE_CONFIRM_MUTATION = gql`
  mutation restoreConfirm($token: String, $password: String, $password_confirm: String) {
    restoreConfirm(token: $token, password: $password, password_confirm: $password_confirm) {
      refreshToken
      accessToken
    }
  }
`;
