// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'users_json',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/users.json',
  operationId: 'createUser',
};

export const tool: Tool = {
  name: 'create_users_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a user\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    active: {\n      type: 'boolean'\n    },\n    message: {\n      type: 'string'\n    },\n    success: {\n      type: 'boolean'\n    },\n    user_id: {\n      type: 'integer'\n    }\n  },\n  required: [    'active',\n    'message',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
      username: {
        type: 'string',
      },
      'Api-Username': {
        type: 'string',
      },
      active: {
        type: 'boolean',
        description: 'This param requires an api key in the request header\nor it will be ignored',
      },
      approved: {
        type: 'boolean',
      },
      external_ids: {
        type: 'object',
      },
      user_fields: {
        type: 'object',
        properties: {
          '1': {
            type: 'boolean',
          },
        },
        required: [],
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
  return asTextContentResult(await maybeFilter(args, await client.usersJson.create(body)));
};

export default { metadata, tool, handler };
