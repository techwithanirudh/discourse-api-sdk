// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscourseSDK from 'discourse-sdk';

const client = new DiscourseSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource uploads', () => {
  // skipped: tests are disabled for the time being
  test.skip('abortMultipart: only required params', async () => {
    const responsePromise = client.uploads.abortMultipart({
      external_upload_identifier:
        '84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ',
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
  test.skip('abortMultipart: required and optional params', async () => {
    const response = await client.uploads.abortMultipart({
      external_upload_identifier:
        '84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('batchPresignMultipartParts: only required params', async () => {
    const responsePromise = client.uploads.batchPresignMultipartParts({
      part_numbers: [1, 2, 3],
      unique_identifier: '66e86218-80d9-4bda-b4d5-2b6def968705',
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
  test.skip('batchPresignMultipartParts: required and optional params', async () => {
    const response = await client.uploads.batchPresignMultipartParts({
      part_numbers: [1, 2, 3],
      unique_identifier: '66e86218-80d9-4bda-b4d5-2b6def968705',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('completeExternalUpload: only required params', async () => {
    const responsePromise = client.uploads.completeExternalUpload({
      unique_identifier: '66e86218-80d9-4bda-b4d5-2b6def968705',
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
  test.skip('completeExternalUpload: required and optional params', async () => {
    const response = await client.uploads.completeExternalUpload({
      unique_identifier: '66e86218-80d9-4bda-b4d5-2b6def968705',
      for_private_message: 'true',
      for_site_setting: 'true',
      pasted: 'true',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('completeMultipart: only required params', async () => {
    const responsePromise = client.uploads.completeMultipart({
      parts: [
        { part_number: 1, etag: '0c376dcfcc2606f4335bbc732de93344' },
        { part_number: 2, etag: '09ert8cfcc2606f4335bbc732de91122' },
      ],
      unique_identifier: '66e86218-80d9-4bda-b4d5-2b6def968705',
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
  test.skip('completeMultipart: required and optional params', async () => {
    const response = await client.uploads.completeMultipart({
      parts: [
        { part_number: 1, etag: '0c376dcfcc2606f4335bbc732de93344' },
        { part_number: 2, etag: '09ert8cfcc2606f4335bbc732de91122' },
      ],
      unique_identifier: '66e86218-80d9-4bda-b4d5-2b6def968705',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createMultipart: only required params', async () => {
    const responsePromise = client.uploads.createMultipart({
      file_name: 'IMG_2021.jpeg',
      file_size: 4096,
      upload_type: 'avatar',
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
  test.skip('createMultipart: required and optional params', async () => {
    const response = await client.uploads.createMultipart({
      file_name: 'IMG_2021.jpeg',
      file_size: 4096,
      upload_type: 'avatar',
      metadata: { 'sha1-checksum': 'sha1-checksum' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('generatePresignedPut: only required params', async () => {
    const responsePromise = client.uploads.generatePresignedPut({
      file_name: 'IMG_2021.jpeg',
      file_size: 4096,
      type: 'avatar',
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
  test.skip('generatePresignedPut: required and optional params', async () => {
    const response = await client.uploads.generatePresignedPut({
      file_name: 'IMG_2021.jpeg',
      file_size: 4096,
      type: 'avatar',
      metadata: { 'sha1-checksum': 'sha1-checksum' },
    });
  });
});
