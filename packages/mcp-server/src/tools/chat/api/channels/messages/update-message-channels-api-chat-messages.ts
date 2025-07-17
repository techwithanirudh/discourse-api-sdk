// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'chat.api.channels.messages',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/chat/api/channels/{channel_id}/messages/{message_id}',
  operationId: 'editMessage',
};

export const tool: Tool = {
  name: 'update_message_channels_api_chat_messages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEdit an existing message\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    message_id: {\n      type: 'integer'\n    },\n    success: {\n      type: 'string'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'integer',
      },
      message_id: {
        type: 'integer',
      },
      message: {
        type: 'string',
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
  const { message_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.chat.api.channels.messages.updateMessage(message_id, body)),
  );
};

export default { metadata, tool, handler };
