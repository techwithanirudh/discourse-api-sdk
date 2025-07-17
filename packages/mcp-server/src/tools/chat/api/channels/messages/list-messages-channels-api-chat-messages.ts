// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'chat.api.channels.messages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/chat/api/channels/{channel_id}/messages',
  operationId: 'getMessages',
};

export const tool: Tool = {
  name: 'list_messages_channels_api_chat_messages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch chat messages\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          available_flags: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          blocks: {\n            type: 'array',\n            items: {\n              type: 'object'\n            }\n          },\n          chat_channel_id: {\n            type: 'integer'\n          },\n          chat_webhook_event: {\n            type: 'object'\n          },\n          cooked: {\n            type: 'string'\n          },\n          created_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          edited: {\n            type: 'boolean'\n          },\n          mentioned_users: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'integer'\n                },\n                name: {\n                  type: 'string'\n                },\n                username: {\n                  type: 'string'\n                }\n              },\n              required: []\n            }\n          },\n          message: {\n            type: 'string'\n          },\n          streaming: {\n            type: 'boolean'\n          },\n          uploads: {\n            type: 'array',\n            items: {\n              type: 'object'\n            }\n          },\n          user: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer'\n              },\n              admin: {\n                type: 'boolean'\n              },\n              avatar_template: {\n                type: 'string'\n              },\n              moderator: {\n                type: 'boolean'\n              },\n              name: {\n                type: 'string'\n              },\n              staff: {\n                type: 'boolean'\n              },\n              username: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: []\n      }\n    },\n    meta: {\n      type: 'object'\n    },\n    tracking: {\n      type: 'object'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'integer',
      },
      fetch_from_last_read: {
        type: 'boolean',
      },
      page_size: {
        type: 'integer',
      },
      target_message_id: {
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
  const { channel_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.chat.api.channels.messages.listMessages(channel_id, body)),
  );
};

export default { metadata, tool, handler };
