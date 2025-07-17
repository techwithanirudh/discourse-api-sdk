// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'site',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/site/basic-info.json',
  operationId: 'getSiteBasicInfo',
};

export const tool: Tool = {
  name: 'retrieve_basic_info_site',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCan be used to fetch basic info about a site\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    apple_touch_icon_url: {\n      type: 'string'\n    },\n    description: {\n      type: 'string'\n    },\n    favicon_url: {\n      type: 'string'\n    },\n    header_background_color: {\n      type: 'string'\n    },\n    header_primary_color: {\n      type: 'string'\n    },\n    include_in_discourse_discover: {\n      type: 'boolean'\n    },\n    locale: {\n      type: 'string'\n    },\n    login_required: {\n      type: 'boolean'\n    },\n    logo_small_url: {\n      type: 'string'\n    },\n    logo_url: {\n      type: 'string'\n    },\n    mobile_logo_url: {\n      type: 'string'\n    },\n    title: {\n      type: 'string'\n    }\n  },\n  required: [    'apple_touch_icon_url',\n    'description',\n    'favicon_url',\n    'header_background_color',\n    'header_primary_color',\n    'include_in_discourse_discover',\n    'locale',\n    'login_required',\n    'logo_small_url',\n    'logo_url',\n    'mobile_logo_url',\n    'title'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.site.retrieveBasicInfo()));
};

export default { metadata, tool, handler };
