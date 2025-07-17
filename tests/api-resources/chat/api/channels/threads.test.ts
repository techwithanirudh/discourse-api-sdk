// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscourseSDK from 'discourse-api-sdk';

const client = new DiscourseSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource threads', () => {
  // skipped: tests are disabled for the time being
  test.skip('listThreadMessages: only required params', async () => {
    const responsePromise = client.chat.api.channels.threads.listThreadMessages(99, { channel_id: 42 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listThreadMessages: required and optional params', async () => {
    const response = await client.chat.api.channels.threads.listThreadMessages(99, {
      channel_id: 42,
      page_size: 20,
      target_message_id: 100,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveThread: only required params', async () => {
    const responsePromise = client.chat.api.channels.threads.retrieveThread(89, { channel_id: 2 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveThread: required and optional params', async () => {
    const response = await client.chat.api.channels.threads.retrieveThread(89, { channel_id: 2 });
  });
});
