// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DiscourseSDK from 'discourse-api-sdk';

const client = new DiscourseSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource admin', () => {
  // skipped: tests are disabled for the time being
  test.skip('createGroup: only required params', async () => {
    const responsePromise = client.admin.createGroup({ group: { name: 'name' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createGroup: required and optional params', async () => {
    const response = await client.admin.createGroup({
      group: {
        name: 'name',
        automatic_membership_email_domains: 'automatic_membership_email_domains',
        bio_raw: 'bio_raw',
        default_notification_level: 0,
        flair_bg_color: 'flair_bg_color',
        flair_icon: 'flair_icon',
        flair_upload_id: 0,
        full_name: 'full_name',
        muted_category_ids: [0],
        owner_usernames: 'owner_usernames',
        primary_group: true,
        public_admission: true,
        public_exit: true,
        regular_category_ids: [0],
        tracking_category_ids: [0],
        usernames: 'usernames',
        visibility_level: 0,
        watching_category_ids: [0],
        watching_first_post_category_ids: [0],
      },
    });
  });
});
