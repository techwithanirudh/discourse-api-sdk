// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscourseSDK from 'discourse-api-sdk';

const client = new DiscourseSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource posts', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.posts.create({ raw: 'raw' });
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
    const response = await client.posts.create({
      raw: 'raw',
      archetype: 'private_message',
      category: 0,
      created_at: 'created_at',
      embed_url: 'embed_url',
      external_id: 'external_id',
      reply_to_post_number: 0,
      target_recipients: 'blake,sam',
      target_usernames: 'target_usernames',
      title: 'title',
      topic_id: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.posts.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.posts.update('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.posts.update(
        'id',
        { post: { raw: 'raw', edit_reason: 'edit_reason' } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DiscourseSDK.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.posts.list({ 'Api-Username': 'Api-Username' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.posts.list({ 'Api-Username': 'Api-Username', before: 'before' });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.posts.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.posts.delete(0, { force_destroy: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(DiscourseSDK.NotFoundError);
  });
});
