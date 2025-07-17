// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'notifications_json',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/notifications.json',
  operationId: 'getNotifications',
};

export const tool: Tool = {
  name: 'list_notifications_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the notifications that belong to the current user\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    load_more_notifications: {\n      type: 'string'\n    },\n    notifications: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          created_at: {\n            type: 'string'\n          },\n          data: {\n            type: 'object',\n            properties: {\n              badge_id: {\n                type: 'integer'\n              },\n              badge_name: {\n                type: 'string'\n              },\n              badge_slug: {\n                type: 'string'\n              },\n              badge_title: {\n                type: 'boolean'\n              },\n              username: {\n                type: 'string'\n              }\n            },\n            required: []\n          },\n          notification_type: {\n            type: 'integer'\n          },\n          post_number: {\n            type: 'integer'\n          },\n          read: {\n            type: 'boolean'\n          },\n          slug: {\n            type: 'string'\n          },\n          topic_id: {\n            type: 'integer'\n          },\n          user_id: {\n            type: 'integer'\n          }\n        },\n        required: []\n      }\n    },\n    seen_notification_id: {\n      type: 'integer'\n    },\n    total_rows_notifications: {\n      type: 'integer'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.notificationsJson.list()));
};

export default { metadata, tool, handler };
