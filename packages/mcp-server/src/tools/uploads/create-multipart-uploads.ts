// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'discourse-api-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'discourse-api-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DiscourseSDK from 'discourse-api-sdk';

export const metadata: Metadata = {
  resource: 'uploads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/uploads/create-multipart.json',
  operationId: 'createMultipartUpload',
};

export const tool: Tool = {
  name: 'create_multipart_uploads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a multipart upload in the external storage provider, storing\na temporary reference to the external upload similar to /get-presigned-put.\n\nYou must have the correct permissions and CORS settings configured in your\nexternal provider. We support AWS S3 as the default. See:\n\nhttps://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.\n\nAn external file store must be set up and `enable_direct_s3_uploads` must\nbe set to true for this endpoint to function.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    external_upload_identifier: {\n      type: 'string',\n      description: 'The identifier of the multipart upload in the external\\nstorage provider. This is the multipart upload_id in AWS S3.'\n    },\n    key: {\n      type: 'string',\n      description: 'The path of the temporary file on the external storage\\nservice.'\n    },\n    unique_identifier: {\n      type: 'string',\n      description: 'A unique string that identifies the external upload.\\nThis must be stored and then sent in the /complete-multipart\\nand /batch-presign-multipart-parts endpoints.'\n    }\n  },\n  required: [    'external_upload_identifier',\n    'key',\n    'unique_identifier'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      file_name: {
        type: 'string',
      },
      file_size: {
        type: 'integer',
        description: 'File size should be represented in bytes.',
      },
      upload_type: {
        type: 'string',
        enum: ['avatar', 'profile_background', 'card_background', 'custom_emoji', 'composer'],
      },
      metadata: {
        type: 'object',
        properties: {
          'sha1-checksum': {
            type: 'string',
            description:
              'The SHA1 checksum of the upload binary blob. Optionally\nbe provided and serves as an additional security check when\nlater processing the file in complete-external-upload endpoint.',
          },
        },
        required: [],
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
  return asTextContentResult(await maybeFilter(args, await client.uploads.createMultipart(body)));
};

export default { metadata, tool, handler };
