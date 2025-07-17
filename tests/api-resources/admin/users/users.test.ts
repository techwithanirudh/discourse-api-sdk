// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscourseSDK from 'discourse-api-sdk';

const client = new DiscourseSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // skipped: tests are disabled for the time being
  test.skip('activate', async () => {
    const responsePromise = client.admin.users.activate(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('anonymize', async () => {
    const responsePromise = client.admin.users.anonymize(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deactivate', async () => {
    const responsePromise = client.admin.users.deactivate(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('logOut', async () => {
    const responsePromise = client.admin.users.logOut(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('silence: only required params', async () => {
    const responsePromise = client.admin.users.silence(0, {
      reason: 'reason',
      silenced_till: '2022-06-01T08:00:00.000Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('silence: required and optional params', async () => {
    const response = await client.admin.users.silence(0, {
      reason: 'reason',
      silenced_till: '2022-06-01T08:00:00.000Z',
      message: 'message',
      post_action: 'delete',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('suspend: only required params', async () => {
    const responsePromise = client.admin.users.suspend(0, { reason: 'reason', suspend_until: '2121-02-22' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('suspend: required and optional params', async () => {
    const response = await client.admin.users.suspend(0, {
      reason: 'reason',
      suspend_until: '2121-02-22',
      message: 'message',
      post_action: 'delete',
    });
  });
});
