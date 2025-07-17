// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'groups.members_json',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/groups/{id}/members.json',
  operationId: 'removeGroupMembers',
};

export const tool: Tool = {
  name: 'remove_groups_members_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRemove group members\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    skipped_usernames: {\n      type: 'array',\n      items: {\n        type: 'object'\n      }\n    },\n    success: {\n      type: 'string'\n    },\n    usernames: {\n      type: 'array',\n      items: {\n        type: 'object'\n      }\n    }\n  },\n  required: [    'skipped_usernames',\n    'success',\n    'usernames'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      usernames: {
        type: 'string',
        description: 'comma separated list',
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
  return asTextContentResult(await maybeFilter(args, await client.groups.membersJson.remove(id, body)));
};

export default { metadata, tool, handler };
