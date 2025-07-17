// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscourseSDK from 'discourse-api-sdk';

const client = new DiscourseSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invitesJson', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.invitesJson.create({ 'Api-Username': 'Api-Username' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.invitesJson.create({
      'Api-Username': 'Api-Username',
      custom_message: 'custom_message',
      email: 'not-a-user-yet@example.com',
      expires_at: 'expires_at',
      group_ids: '42,43',
      group_names: 'foo,bar',
      max_redemptions_allowed: 5,
      skip_email: true,
      topic_id: 0,
    });
  });
});
