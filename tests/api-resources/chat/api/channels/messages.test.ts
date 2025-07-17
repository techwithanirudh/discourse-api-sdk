// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscourseSDK from 'discourse-sdk';

const client = new DiscourseSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // skipped: tests are disabled for the time being
  test.skip('listMessages', async () => {
    const responsePromise = client.chat.api.channels.messages.listMessages(23);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listMessages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.api.channels.messages.listMessages(
        23,
        { fetch_from_last_read: true, page_size: 50, target_message_id: 1234 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DiscourseSDK.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateMessage: only required params', async () => {
    const responsePromise = client.chat.api.channels.messages.updateMessage(4050, { channel_id: 23 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateMessage: required and optional params', async () => {
    const response = await client.chat.api.channels.messages.updateMessage(4050, {
      channel_id: 23,
      message: 'updated text',
    });
  });
});
