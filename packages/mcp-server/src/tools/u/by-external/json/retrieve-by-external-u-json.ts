// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'u.by_external.json',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/u/by-external/{external_id}.json',
  operationId: 'getUserExternalId',
};

export const tool: Tool = {
  name: 'retrieve_by_external_u_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a user by external_id",
  inputSchema: {
    type: 'object',
    properties: {
      external_id: {
        type: 'string',
      },
      'Api-Username': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: DiscourseSDK, args: Record<string, unknown> | undefined) => {
  const { external_id, ...body } = args as any;
  return asTextContentResult(await client.u.byExternal.json.retrieve(external_id, body));
};

export default { metadata, tool, handler };
