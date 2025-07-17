// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'categories_json',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/categories.json',
  operationId: 'createCategory',
};

export const tool: Tool = {
  name: 'create_categories_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a category\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    category: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        all_topics_wiki: {\n          type: 'boolean'\n        },\n        allow_badges: {\n          type: 'boolean'\n        },\n        allow_unlimited_owner_edits_on_first_post: {\n          type: 'boolean'\n        },\n        auto_close_based_on_last_post: {\n          type: 'boolean'\n        },\n        auto_close_hours: {\n          type: 'string'\n        },\n        available_groups: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        },\n        can_delete: {\n          type: 'boolean'\n        },\n        can_edit: {\n          type: 'boolean'\n        },\n        color: {\n          type: 'string'\n        },\n        custom_fields: {\n          type: 'object'\n        },\n        default_list_filter: {\n          type: 'string'\n        },\n        default_slow_mode_seconds: {\n          type: 'string'\n        },\n        default_top_period: {\n          type: 'string'\n        },\n        default_view: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        },\n        description_excerpt: {\n          type: 'string'\n        },\n        description_text: {\n          type: 'string'\n        },\n        email_in: {\n          type: 'string'\n        },\n        email_in_allow_strangers: {\n          type: 'boolean'\n        },\n        group_permissions: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              group_name: {\n                type: 'string'\n              },\n              permission_type: {\n                type: 'integer'\n              }\n            },\n            required: [              'group_name',\n              'permission_type'\n            ]\n          }\n        },\n        has_children: {\n          type: 'boolean'\n        },\n        mailinglist_mirror: {\n          type: 'boolean'\n        },\n        minimum_required_tags: {\n          type: 'integer'\n        },\n        name: {\n          type: 'string'\n        },\n        navigate_to_first_post_after_read: {\n          type: 'boolean'\n        },\n        notification_level: {\n          type: 'integer'\n        },\n        num_featured_topics: {\n          type: 'integer'\n        },\n        permission: {\n          type: 'integer'\n        },\n        position: {\n          type: 'integer'\n        },\n        post_count: {\n          type: 'integer'\n        },\n        read_only_banner: {\n          type: 'string'\n        },\n        read_restricted: {\n          type: 'boolean'\n        },\n        required_tag_groups: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              min_count: {\n                type: 'integer'\n              },\n              name: {\n                type: 'string'\n              }\n            },\n            required: [              'min_count',\n              'name'\n            ]\n          }\n        },\n        search_priority: {\n          type: 'integer'\n        },\n        show_subcategory_list: {\n          type: 'boolean'\n        },\n        slug: {\n          type: 'string'\n        },\n        sort_ascending: {\n          type: 'string'\n        },\n        sort_order: {\n          type: 'string'\n        },\n        subcategory_count: {\n          type: 'integer'\n        },\n        subcategory_list_style: {\n          type: 'string'\n        },\n        text_color: {\n          type: 'string'\n        },\n        topic_count: {\n          type: 'integer'\n        },\n        topic_featured_link_allowed: {\n          type: 'boolean'\n        },\n        topic_template: {\n          type: 'string'\n        },\n        topic_url: {\n          type: 'string'\n        },\n        uploaded_background: {\n          type: 'string'\n        },\n        uploaded_background_dark: {\n          type: 'string'\n        },\n        uploaded_logo: {\n          type: 'string'\n        },\n        uploaded_logo_dark: {\n          type: 'string'\n        },\n        allow_global_tags: {\n          type: 'boolean'\n        },\n        allowed_tag_groups: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        },\n        allowed_tags: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        },\n        category_setting: {\n          type: 'object'\n        },\n        form_template_ids: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        }\n      },\n      required: [        'id',\n        'all_topics_wiki',\n        'allow_badges',\n        'allow_unlimited_owner_edits_on_first_post',\n        'auto_close_based_on_last_post',\n        'auto_close_hours',\n        'available_groups',\n        'can_delete',\n        'can_edit',\n        'color',\n        'custom_fields',\n        'default_list_filter',\n        'default_slow_mode_seconds',\n        'default_top_period',\n        'default_view',\n        'description',\n        'description_excerpt',\n        'description_text',\n        'email_in',\n        'email_in_allow_strangers',\n        'group_permissions',\n        'has_children',\n        'mailinglist_mirror',\n        'minimum_required_tags',\n        'name',\n        'navigate_to_first_post_after_read',\n        'notification_level',\n        'num_featured_topics',\n        'permission',\n        'position',\n        'post_count',\n        'read_only_banner',\n        'read_restricted',\n        'required_tag_groups',\n        'search_priority',\n        'show_subcategory_list',\n        'slug',\n        'sort_ascending',\n        'sort_order',\n        'subcategory_count',\n        'subcategory_list_style',\n        'text_color',\n        'topic_count',\n        'topic_featured_link_allowed',\n        'topic_template',\n        'topic_url',\n        'uploaded_background',\n        'uploaded_background_dark',\n        'uploaded_logo',\n        'uploaded_logo_dark'\n      ]\n    }\n  },\n  required: [    'category'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      allow_badges: {
        type: 'boolean',
      },
      color: {
        type: 'string',
      },
      form_template_ids: {
        type: 'array',
        items: {
          type: 'object',
        },
      },
      parent_category_id: {
        type: 'integer',
      },
      permissions: {
        type: 'object',
        properties: {
          everyone: {
            type: 'integer',
          },
          staff: {
            type: 'integer',
          },
        },
        required: [],
      },
      search_priority: {
        type: 'integer',
      },
      slug: {
        type: 'string',
      },
      text_color: {
        type: 'string',
      },
      topic_featured_links_allowed: {
        type: 'boolean',
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
  return asTextContentResult(await maybeFilter(args, await client.categoriesJson.create(body)));
};

export default { metadata, tool, handler };
