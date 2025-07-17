// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'admin.users.list',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/admin/users/list/{flag}.json',
  operationId: 'adminListUsers',
};

export const tool: Tool = {
  name: 'get_users_admin_list',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of users\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      id: {\n        type: 'integer'\n      },\n      active: {\n        type: 'boolean'\n      },\n      admin: {\n        type: 'boolean'\n      },\n      avatar_template: {\n        type: 'string'\n      },\n      created_at: {\n        type: 'string'\n      },\n      created_at_age: {\n        type: 'number'\n      },\n      days_visited: {\n        type: 'integer'\n      },\n      last_emailed_age: {\n        type: 'number'\n      },\n      last_emailed_at: {\n        type: 'string'\n      },\n      last_seen_age: {\n        type: 'number'\n      },\n      last_seen_at: {\n        type: 'string'\n      },\n      manual_locked_trust_level: {\n        type: 'string'\n      },\n      moderator: {\n        type: 'boolean'\n      },\n      name: {\n        type: 'string'\n      },\n      post_count: {\n        type: 'integer'\n      },\n      posts_read_count: {\n        type: 'integer'\n      },\n      staged: {\n        type: 'boolean'\n      },\n      time_read: {\n        type: 'integer'\n      },\n      title: {\n        type: 'string'\n      },\n      topics_entered: {\n        type: 'integer'\n      },\n      trust_level: {\n        type: 'integer'\n      },\n      username: {\n        type: 'string'\n      },\n      email: {\n        type: 'string'\n      },\n      secondary_emails: {\n        type: 'array',\n        items: {\n          type: 'object'\n        }\n      }\n    },\n    required: [      'id',\n      'active',\n      'admin',\n      'avatar_template',\n      'created_at',\n      'created_at_age',\n      'days_visited',\n      'last_emailed_age',\n      'last_emailed_at',\n      'last_seen_age',\n      'last_seen_at',\n      'manual_locked_trust_level',\n      'moderator',\n      'name',\n      'post_count',\n      'posts_read_count',\n      'staged',\n      'time_read',\n      'title',\n      'topics_entered',\n      'trust_level',\n      'username'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      flag: {
        type: 'string',
        enum: ['active', 'new', 'staff', 'suspended', 'blocked', 'suspect'],
      },
      asc: {
        type: 'string',
        enum: ['true'],
      },
      email: {
        type: 'string',
        description: 'Filter to the user with this email address',
      },
      ip: {
        type: 'string',
        description: 'Filter to users with this IP address',
      },
      order: {
        type: 'string',
        enum: [
          'created',
          'last_emailed',
          'seen',
          'username',
          'email',
          'trust_level',
          'days_visited',
          'posts_read',
          'topics_viewed',
          'posts',
          'read_time',
        ],
      },
      page: {
        type: 'integer',
      },
      show_emails: {
        type: 'boolean',
        description:
          'Include user email addresses in response. These requests will\nbe logged in the staff action logs.',
      },
      stats: {
        type: 'boolean',
        description: 'Include user stats information',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: DiscourseSDK, args: Record<string, unknown> | undefined) => {
  const { flag, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.admin.users.list.get(flag, body)));
};

export default { metadata, tool, handler };
