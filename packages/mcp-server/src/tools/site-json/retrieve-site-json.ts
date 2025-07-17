// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'site_json',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/site.json',
  operationId: 'getSite',
};

export const tool: Tool = {
  name: 'retrieve_site_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCan be used to fetch all categories and subcategories",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: DiscourseSDK, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.siteJson.retrieve());
};

export default { metadata, tool, handler };
