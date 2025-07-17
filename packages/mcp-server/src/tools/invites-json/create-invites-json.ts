// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'invites_json',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/invites.json',
  operationId: 'createInvite',
};

export const tool: Tool = {
  name: 'create_invites_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an invite\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'integer'\n    },\n    created_at: {\n      type: 'string'\n    },\n    custom_message: {\n      type: 'string'\n    },\n    email: {\n      type: 'string'\n    },\n    emailed: {\n      type: 'boolean'\n    },\n    expired: {\n      type: 'boolean'\n    },\n    expires_at: {\n      type: 'string'\n    },\n    groups: {\n      type: 'array',\n      items: {\n        type: 'object'\n      }\n    },\n    link: {\n      type: 'string'\n    },\n    topics: {\n      type: 'array',\n      items: {\n        type: 'object'\n      }\n    },\n    updated_at: {\n      type: 'string'\n    }\n  },\n  required: []\n}\n```",
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
        description: 'required for email invites only',
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
  return asTextContentResult(await maybeFilter(args, await client.invitesJson.create(body)));
};

export default { metadata, tool, handler };
