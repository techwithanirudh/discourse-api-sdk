// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'invites',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/invites/create-multiple.json',
  operationId: 'createMultipleInvites',
};

export const tool: Tool = {
  name: 'create_multiple_invites',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate multiple invites\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    failed_invitations: {\n      type: 'array',\n      items: {\n        type: 'object'\n      }\n    },\n    num_failed_invitations: {\n      type: 'integer'\n    },\n    num_successfully_created_invitations: {\n      type: 'integer'\n    },\n    successful_invitations: {\n      type: 'array',\n      items: {\n        type: 'object'\n      }\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'Api-Username': {
        type: 'string',
      },
      custom_message: {
        type: 'string',
        description: 'optional, for email invites',
      },
      email: {
        type: 'string',
        description:
          'pass 1 email per invite to be generated. other properties\nwill be shared by each invite.',
      },
      expires_at: {
        type: 'string',
        description: 'optional, if not supplied, the invite_expiry_days site\nsetting is used',
      },
      group_ids: {
        type: 'string',
        description: 'Optional, either this or `group_names`. Comma separated\nlist for multiple ids.',
      },
      group_names: {
        type: 'string',
        description: 'Optional, either this or `group_ids`. Comma separated\nlist for multiple names.',
      },
      max_redemptions_allowed: {
        type: 'integer',
        description: 'optional, for link invites',
      },
      skip_email: {
        type: 'boolean',
      },
      topic_id: {
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.invites.createMultiple(body)));
};

export default { metadata, tool, handler };
