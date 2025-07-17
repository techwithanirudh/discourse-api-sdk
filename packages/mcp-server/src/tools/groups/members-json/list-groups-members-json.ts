// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'groups.members_json',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/groups/{id}/members.json',
  operationId: 'listGroupMembers',
};

export const tool: Tool = {
  name: 'list_groups_members_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList group members\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    members: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          added_at: {\n            type: 'string'\n          },\n          avatar_template: {\n            type: 'string'\n          },\n          last_posted_at: {\n            type: 'string'\n          },\n          last_seen_at: {\n            type: 'string'\n          },\n          name: {\n            type: 'string'\n          },\n          timezone: {\n            type: 'string'\n          },\n          title: {\n            type: 'string'\n          },\n          username: {\n            type: 'string'\n          }\n        },\n        required: [          'id',\n          'added_at',\n          'avatar_template',\n          'last_posted_at',\n          'last_seen_at',\n          'name',\n          'timezone',\n          'title',\n          'username'\n        ]\n      }\n    },\n    meta: {\n      type: 'object',\n      properties: {\n        limit: {\n          type: 'integer'\n        },\n        offset: {\n          type: 'integer'\n        },\n        total: {\n          type: 'integer'\n        }\n      },\n      required: [        'limit',\n        'offset',\n        'total'\n      ]\n    },\n    owners: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          added_at: {\n            type: 'string'\n          },\n          avatar_template: {\n            type: 'string'\n          },\n          last_posted_at: {\n            type: 'string'\n          },\n          last_seen_at: {\n            type: 'string'\n          },\n          name: {\n            type: 'string'\n          },\n          timezone: {\n            type: 'string'\n          },\n          title: {\n            type: 'string'\n          },\n          username: {\n            type: 'string'\n          }\n        },\n        required: [          'id',\n          'added_at',\n          'avatar_template',\n          'last_posted_at',\n          'last_seen_at',\n          'name',\n          'timezone',\n          'title',\n          'username'\n        ]\n      }\n    }\n  },\n  required: [    'members',\n    'meta',\n    'owners'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
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
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.groups.membersJson.list(id)));
};

export default { metadata, tool, handler };
