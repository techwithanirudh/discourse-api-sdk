// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'categories_json',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/categories.json',
  operationId: 'listCategories',
};

export const tool: Tool = {
  name: 'list_categories_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of categories\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    category_list: {\n      type: 'object',\n      properties: {\n        can_create_category: {\n          type: 'boolean'\n        },\n        can_create_topic: {\n          type: 'boolean'\n        },\n        categories: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer'\n              },\n              can_edit: {\n                type: 'boolean'\n              },\n              color: {\n                type: 'string'\n              },\n              default_list_filter: {\n                type: 'string'\n              },\n              default_top_period: {\n                type: 'string'\n              },\n              default_view: {\n                type: 'string'\n              },\n              description: {\n                type: 'string'\n              },\n              description_excerpt: {\n                type: 'string'\n              },\n              description_text: {\n                type: 'string'\n              },\n              has_children: {\n                type: 'boolean'\n              },\n              minimum_required_tags: {\n                type: 'integer'\n              },\n              name: {\n                type: 'string'\n              },\n              navigate_to_first_post_after_read: {\n                type: 'boolean'\n              },\n              notification_level: {\n                type: 'integer'\n              },\n              num_featured_topics: {\n                type: 'integer'\n              },\n              permission: {\n                type: 'integer'\n              },\n              position: {\n                type: 'integer'\n              },\n              post_count: {\n                type: 'integer'\n              },\n              read_restricted: {\n                type: 'boolean'\n              },\n              show_subcategory_list: {\n                type: 'boolean'\n              },\n              slug: {\n                type: 'string'\n              },\n              sort_ascending: {\n                type: 'string'\n              },\n              sort_order: {\n                type: 'string'\n              },\n              subcategory_count: {\n                type: 'integer'\n              },\n              subcategory_ids: {\n                type: 'array',\n                items: {\n                  type: 'object'\n                }\n              },\n              subcategory_list_style: {\n                type: 'string'\n              },\n              text_color: {\n                type: 'string'\n              },\n              topic_count: {\n                type: 'integer'\n              },\n              topic_template: {\n                type: 'string'\n              },\n              topic_url: {\n                type: 'string'\n              },\n              topics_all_time: {\n                type: 'integer'\n              },\n              topics_day: {\n                type: 'integer'\n              },\n              topics_month: {\n                type: 'integer'\n              },\n              topics_week: {\n                type: 'integer'\n              },\n              topics_year: {\n                type: 'integer'\n              },\n              uploaded_background: {\n                type: 'string'\n              },\n              uploaded_background_dark: {\n                type: 'string'\n              },\n              uploaded_logo: {\n                type: 'string'\n              },\n              uploaded_logo_dark: {\n                type: 'string'\n              },\n              is_uncategorized: {\n                type: 'boolean'\n              },\n              subcategory_list: {\n                type: 'array',\n                items: {\n                  type: 'object'\n                }\n              }\n            },\n            required: [              'id',\n              'can_edit',\n              'color',\n              'default_list_filter',\n              'default_top_period',\n              'default_view',\n              'description',\n              'description_excerpt',\n              'description_text',\n              'has_children',\n              'minimum_required_tags',\n              'name',\n              'navigate_to_first_post_after_read',\n              'notification_level',\n              'num_featured_topics',\n              'permission',\n              'position',\n              'post_count',\n              'read_restricted',\n              'show_subcategory_list',\n              'slug',\n              'sort_ascending',\n              'sort_order',\n              'subcategory_count',\n              'subcategory_ids',\n              'subcategory_list_style',\n              'text_color',\n              'topic_count',\n              'topic_template',\n              'topic_url',\n              'topics_all_time',\n              'topics_day',\n              'topics_month',\n              'topics_week',\n              'topics_year',\n              'uploaded_background',\n              'uploaded_background_dark',\n              'uploaded_logo',\n              'uploaded_logo_dark'\n            ]\n          }\n        }\n      },\n      required: [        'can_create_category',\n        'can_create_topic',\n        'categories'\n      ]\n    }\n  },\n  required: [    'category_list'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      include_subcategories: {
        type: 'string',
        enum: [true],
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
  return asTextContentResult(await maybeFilter(args, await client.categoriesJson.list(body)));
};

export default { metadata, tool, handler };
