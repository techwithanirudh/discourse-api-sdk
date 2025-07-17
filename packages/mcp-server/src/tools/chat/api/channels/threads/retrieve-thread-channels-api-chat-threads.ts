// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'chat.api.channels.threads',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/chat/api/channels/{channel_id}/threads/{thread_id}',
  operationId: 'getThread',
};

export const tool: Tool = {
  name: 'retrieve_thread_channels_api_chat_threads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet thread details\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    thread: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        channel_id: {\n          type: 'integer'\n        },\n        current_user_membership: {\n          type: 'object'\n        },\n        force: {\n          type: 'boolean'\n        },\n        last_message_id: {\n          type: 'integer'\n        },\n        meta: {\n          type: 'object'\n        },\n        original_message: {\n          type: 'object'\n        },\n        preview: {\n          type: 'object'\n        },\n        reply_count: {\n          type: 'integer'\n        },\n        status: {\n          type: 'string'\n        },\n        title: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'integer',
      },
      thread_id: {
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
  const { thread_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.chat.api.channels.threads.retrieveThread(thread_id, body)),
  );
};

export default { metadata, tool, handler };
