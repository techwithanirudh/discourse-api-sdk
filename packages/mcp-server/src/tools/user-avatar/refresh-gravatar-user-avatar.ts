// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'user_avatar',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/user_avatar/{username}/refresh_gravatar.json',
  operationId: 'refreshGravatar',
};

export const tool: Tool = {
  name: 'refresh_gravatar_user_avatar',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRefresh gravatar\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    gravatar_avatar_template: {\n      type: 'string'\n    },\n    gravatar_upload_id: {\n      type: 'integer'\n    }\n  },\n  required: [    'gravatar_avatar_template',\n    'gravatar_upload_id'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      username: {
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
  const { username, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.userAvatar.refreshGravatar(username)));
};

export default { metadata, tool, handler };
