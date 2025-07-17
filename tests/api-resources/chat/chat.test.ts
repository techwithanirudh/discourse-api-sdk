// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscourseSDK from 'discourse-api-sdk';

const client = new DiscourseSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // skipped: tests are disabled for the time being
  test.skip('reactToMessage: only required params', async () => {
    const responsePromise = client.chat.reactToMessage(4051, { channel_id: 23 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('reactToMessage: required and optional params', async () => {
    const response = await client.chat.reactToMessage(4051, {
      channel_id: 23,
      emoji: 'heart',
      react_action: 'add',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('sendMessage', async () => {
    const responsePromise = client.chat.sendMessage(23);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('sendMessage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.sendMessage(
        23,
        { in_reply_to_id: 0, message: 'hello world', staged_id: 'staged_id', thread_id: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DiscourseSDK.NotFoundError);
  });
});
