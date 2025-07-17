// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscourseSDK from 'discourse-api-sdk';

const client = new DiscourseSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource t', () => {
  // skipped: tests are disabled for the time being
  test.skip('bookmark: only required params', async () => {
    const responsePromise = client.t.bookmark('id', { 'Api-Username': 'Api-Username' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('bookmark: required and optional params', async () => {
    const response = await client.t.bookmark('id', { 'Api-Username': 'Api-Username' });
  });

  // skipped: tests are disabled for the time being
  test.skip('createTimer: only required params', async () => {
    const responsePromise = client.t.createTimer('id', { 'Api-Username': 'Api-Username' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createTimer: required and optional params', async () => {
    const response = await client.t.createTimer('id', {
      'Api-Username': 'Api-Username',
      based_on_last_post: true,
      category_id: 0,
      status_type: 'status_type',
      time: '',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('invite: only required params', async () => {
    const responsePromise = client.t.invite('id', { 'Api-Username': 'Api-Username' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('invite: required and optional params', async () => {
    const response = await client.t.invite('id', {
      'Api-Username': 'Api-Username',
      email: 'email',
      user: 'user',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('inviteGroup: only required params', async () => {
    const responsePromise = client.t.inviteGroup('id', { 'Api-Username': 'Api-Username' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('inviteGroup: required and optional params', async () => {
    const response = await client.t.inviteGroup('id', {
      'Api-Username': 'Api-Username',
      group: 'group',
      should_notify: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePosts: only required params', async () => {
    const responsePromise = client.t.retrievePosts('id', { 'Api-Username': 'Api-Username' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePosts: required and optional params', async () => {
    const response = await client.t.retrievePosts('id', { 'Api-Username': 'Api-Username' });
  });

  // skipped: tests are disabled for the time being
  test.skip('setNotifications: only required params', async () => {
    const responsePromise = client.t.setNotifications('id', {
      notification_level: '0',
      'Api-Username': 'Api-Username',
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
  test.skip('setNotifications: required and optional params', async () => {
    const response = await client.t.setNotifications('id', {
      notification_level: '0',
      'Api-Username': 'Api-Username',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateStatus: only required params', async () => {
    const responsePromise = client.t.updateStatus('id', {
      enabled: 'true',
      status: 'closed',
      'Api-Username': 'Api-Username',
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
  test.skip('updateStatus: required and optional params', async () => {
    const response = await client.t.updateStatus('id', {
      enabled: 'true',
      status: 'closed',
      'Api-Username': 'Api-Username',
      until: '2030-12-31',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateTimestamp: only required params', async () => {
    const responsePromise = client.t.updateTimestamp('id', {
      timestamp: '1594291380',
      'Api-Username': 'Api-Username',
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
  test.skip('updateTimestamp: required and optional params', async () => {
    const response = await client.t.updateTimestamp('id', {
      timestamp: '1594291380',
      'Api-Username': 'Api-Username',
    });
  });
});
