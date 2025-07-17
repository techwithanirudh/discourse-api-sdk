// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'tag_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/tag_groups.json',
  operationId: 'createTagGroup',
};

export const tool: Tool = {
  name: 'create_tag_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a tag group\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    tag_group: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        name: {\n          type: 'string'\n        },\n        one_per_topic: {\n          type: 'boolean'\n        },\n        parent_tag_name: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        },\n        permissions: {\n          type: 'object'\n        },\n        tag_names: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        }\n      },\n      required: [        'id',\n        'name',\n        'one_per_topic',\n        'parent_tag_name',\n        'permissions',\n        'tag_names'\n      ]\n    }\n  },\n  required: [    'tag_group'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.tagGroups.create(body)));
};

export default { metadata, tool, handler };
