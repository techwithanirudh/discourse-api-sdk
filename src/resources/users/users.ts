// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PasswordResetAPI from './password-reset';
import { PasswordReset, PasswordResetChangePasswordParams } from './password-reset';

export class Users extends APIResource {
  passwordReset: PasswordResetAPI.PasswordReset = new PasswordResetAPI.PasswordReset(this._client);
}

Users.PasswordReset = PasswordReset;

export declare namespace Users {
  export {
    PasswordReset as PasswordReset,
    type PasswordResetChangePasswordParams as PasswordResetChangePasswordParams,
  };
}
