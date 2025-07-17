// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'u.json',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/u/{username}.json',
  operationId: 'getUser',
};

export const tool: Tool = {
  name: 'retrieve_u_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a single user by username",
  inputSchema: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
      },
      'Api-Username': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: DiscourseSDK, args: Record<string, unknown> | undefined) => {
  const { username, ...body } = args as any;
  return asTextContentResult(await client.u.json.retrieve(username, body));
};

export default { metadata, tool, handler };
