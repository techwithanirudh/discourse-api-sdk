// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'directory_items_json',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/directory_items.json',
  operationId: 'listUsersPublic',
};

export const tool: Tool = {
  name: 'list_directory_items_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a public list of users\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    directory_items: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          days_visited: {\n            type: 'integer'\n          },\n          likes_given: {\n            type: 'integer'\n          },\n          likes_received: {\n            type: 'integer'\n          },\n          post_count: {\n            type: 'integer'\n          },\n          posts_read: {\n            type: 'integer'\n          },\n          topic_count: {\n            type: 'integer'\n          },\n          topics_entered: {\n            type: 'integer'\n          },\n          user: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer'\n              },\n              avatar_template: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              title: {\n                type: 'string'\n              },\n              username: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'avatar_template',\n              'name',\n              'title',\n              'username'\n            ]\n          }\n        },\n        required: [          'id',\n          'days_visited',\n          'likes_given',\n          'likes_received',\n          'post_count',\n          'posts_read',\n          'topic_count',\n          'topics_entered',\n          'user'\n        ]\n      }\n    },\n    meta: {\n      type: 'object',\n      properties: {\n        last_updated_at: {\n          type: 'string'\n        },\n        load_more_directory_items: {\n          type: 'string'\n        },\n        total_rows_directory_items: {\n          type: 'integer'\n        }\n      },\n      required: [        'last_updated_at',\n        'load_more_directory_items',\n        'total_rows_directory_items'\n      ]\n    }\n  },\n  required: [    'directory_items',\n    'meta'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      order: {
        type: 'string',
        enum: [
          'likes_received',
          'likes_given',
          'topic_count',
          'post_count',
          'topics_entered',
          'posts_read',
          'days_visited',
        ],
      },
      period: {
        type: 'string',
        enum: ['daily', 'weekly', 'monthly', 'quarterly', 'yearly', 'all'],
      },
      asc: {
        type: 'string',
        enum: ['true'],
      },
      page: {
        type: 'integer',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.directoryItemsJson.list(body)));
};

export default { metadata, tool, handler };
