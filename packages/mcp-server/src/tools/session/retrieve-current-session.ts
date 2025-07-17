// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'session',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/session/current.json',
  operationId: 'getSession',
};

export const tool: Tool = {
  name: 'retrieve_current_session',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet current session info",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: DiscourseSDK, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.session.retrieveCurrent());
};

export default { metadata, tool, handler };
