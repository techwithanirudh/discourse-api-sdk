// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'chat',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/chat/{channel_id}/react/{message_id}',
  operationId: 'reactToMessage',
};

export const tool: Tool = {
  name: 'react_to_message_chat',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReact to a message\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    success: {\n      type: 'string'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'integer',
      },
      message_id: {
        type: 'integer',
      },
      emoji: {
        type: 'string',
      },
      react_action: {
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
  return asTextContentResult(await maybeFilter(args, await client.chat.reactToMessage(message_id, body)));
};

export default { metadata, tool, handler };
