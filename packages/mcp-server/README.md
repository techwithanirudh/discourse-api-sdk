# Discourse SDK TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export DISCOURSE_SDK_API_KEY="My API Key"
export DISCOURSE_SDK_DEFAULT_HOST="My-Default-Host"
npx -y discourse-api-sdk-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "discourse_api_sdk_api": {
      "command": "npx",
      "args": ["-y", "discourse-api-sdk-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "DISCOURSE_SDK_API_KEY": "My API Key",
        "DISCOURSE_SDK_DEFAULT_HOST": "My-Default-Host"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "discourse-api-sdk-mcp/server";

// import a specific tool
import createGroupAdmin from "discourse-api-sdk-mcp/tools/admin/create-group-admin";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createGroupAdmin, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `admin`:

- `create_group_admin` (`write`): Create a group

### Resource `admin.backups_json`:

- `create_admin_backups_json` (`write`): Create backup
- `list_admin_backups_json` (`read`): List backups

### Resource `admin.backups`:

- `download_admin_backups` (`read`): Download backup
- `send_download_email_admin_backups` (`write`): Send download backup email

### Resource `admin.groups`:

- `delete_admin_groups` (`write`): Delete a group

### Resource `admin.users`:

- `activate_admin_users` (`write`): Activate a user
- `anonymize_admin_users` (`write`): Anonymize a user
- `deactivate_admin_users` (`write`): Deactivate a user
- `log_out_admin_users` (`write`): Log a user out
- `silence_admin_users` (`write`): Silence a user
- `suspend_admin_users` (`write`): Suspend a user

### Resource `admin.users.json`:

- `retrieve_users_admin_json` (`read`): Get a user by id
- `delete_users_admin_json` (`write`): Delete a user

### Resource `admin.users.list`:

- `get_users_admin_list` (`read`): Get a list of users

### Resource `admin.badges`:

- `create_admin_badges` (`write`): Create badge
- `update_admin_badges` (`write`): Update badge
- `list_admin_badges` (`read`): List badges
- `delete_admin_badges` (`write`): Delete badge

### Resource `categories_json`:

- `create_categories_json` (`write`): Creates a category
- `list_categories_json` (`read`): Retrieves a list of categories

### Resource `categories`:

- `update_categories` (`write`): Updates a category

### Resource `c`:

- `list_topics_c` (`read`): List topics
- `show_category_c` (`read`): Show category

### Resource `groups`:

- `retrieve_groups` (`read`): Get a group
- `update_groups` (`write`): Update a group
- `list_groups` (`read`): List groups

### Resource `groups.members_json`:

- `list_groups_members_json` (`read`): List group members
- `add_groups_members_json` (`write`): Add group members
- `remove_groups_members_json` (`write`): Remove group members

### Resource `invites_json`:

- `create_invites_json` (`write`): Create an invite

### Resource `invites`:

- `create_multiple_invites` (`write`): Create multiple invites

### Resource `notifications_json`:

- `list_notifications_json` (`read`): Get the notifications that belong to the current user

### Resource `notifications`:

- `mark_read_notifications` (`write`): Mark notifications as read

### Resource `posts`:

- `create_posts` (`write`): Creates a new topic, a new post, or a private message
- `retrieve_posts` (`read`): This endpoint can be used to get the number of likes on a post using the
  `actions_summary` property in the response. `actions_summary` responses
  with the id of `2` signify a `like`. If there are no `actions_summary`
  items with the id of `2`, that means there are 0 likes. Other ids likely
  refer to various different flag types.
- `update_posts` (`write`): Update a single post
- `list_posts` (`read`): List latest posts across topics
- `delete_posts` (`write`): delete a single post

### Resource `post_actions_json`:

- `create_post_actions_json` (`write`): Like a post and other actions

### Resource `topics.private_messages`:

- `list_topics_private_messages` (`read`): Get a list of private messages for a user

### Resource `topics.private_messages_sent`:

- `list_topics_private_messages_sent` (`read`): Get a list of private messages sent for a user

### Resource `search_json`:

- `perform_search_search_json` (`read`): Search for a term

### Resource `site_json`:

- `retrieve_site_json` (`read`): Can be used to fetch all categories and subcategories

### Resource `site`:

- `retrieve_basic_info_site` (`read`): Can be used to fetch basic info about a site

### Resource `tags_json`:

- `list_tags_json` (`read`): Get a list of tags

### Resource `tag`:

- `retrieve_tag` (`read`): Get a specific tag

### Resource `t`:

- `bookmark_t` (`write`): Bookmark topic
- `create_timer_t` (`write`): Create topic timer
- `invite_t` (`write`): Invite to topic
- `invite_group_t` (`write`): Invite group to topic
- `retrieve_posts_t` (`read`): Get specific posts from a topic
- `set_notifications_t` (`write`): Set notification level
- `update_status_t` (`write`): Update the status of a topic
- `update_timestamp_t` (`write`): Update topic timestamp

### Resource `t.json`:

- `retrieve_t_json` (`read`): Get a single topic
- `update_t_json` (`write`): Update a topic
- `delete_t_json` (`write`): Remove a topic

### Resource `t.external_id`:

- `retrieve_t_external_id` (`read`): Get topic by external_id

### Resource `latest_json`:

- `get_latest_latest_json` (`read`): Get the latest topics

### Resource `top_json`:

- `retrieve_top_json` (`read`): Get the top topics filtered by period

### Resource `uploads_json`:

- `create_uploads_json` (`write`): Creates an upload

### Resource `uploads`:

- `abort_multipart_uploads` (`write`): This endpoint aborts the multipart upload initiated with /create-multipart.
  This should be used when cancelling the upload. It does not matter if parts
  were already uploaded into the external storage provider.

  You must have the correct permissions and CORS settings configured in your
  external provider. We support AWS S3 as the default. See:

  https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

  An external file store must be set up and `enable_direct_s3_uploads` must
  be set to true for this endpoint to function.

- `batch_presign_multipart_parts_uploads` (`write`): Multipart uploads are uploaded in chunks or parts to individual presigned
  URLs, similar to the one generated by /generate-presigned-put. The part
  numbers provided must be between 1 and 10000. The total number of parts
  will depend on the chunk size in bytes that you intend to use to upload
  each chunk. For example a 12MB file may have 2 5MB chunks and a final
  2MB chunk, for part numbers 1, 2, and 3.

  This endpoint will return a presigned URL for each part number provided,
  which you can then use to send PUT requests for the binary chunk corresponding
  to that part. When the part is uploaded, the provider should return an
  ETag for the part, and this should be stored along with the part number,
  because this is needed to complete the multipart upload.

  You must have the correct permissions and CORS settings configured in your
  external provider. We support AWS S3 as the default. See:

  https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

  An external file store must be set up and `enable_direct_s3_uploads` must
  be set to true for this endpoint to function.

- `complete_external_upload_uploads` (`write`): Completes an external upload initialized with /get-presigned-put. The
  file will be moved from its temporary location in external storage to
  a final destination in the S3 bucket. An Upload record will also be
  created in the database in most cases.

  If a sha1-checksum was provided in the initial request it will also
  be compared with the uploaded file in storage to make sure the same
  file was uploaded. The file size will be compared for the same reason.

  You must have the correct permissions and CORS settings configured in your
  external provider. We support AWS S3 as the default. See:

  https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

  An external file store must be set up and `enable_direct_s3_uploads` must
  be set to true for this endpoint to function.

- `complete_multipart_uploads` (`write`): Completes the multipart upload in the external store, and copies the
  file from its temporary location to its final location in the store.
  All of the parts must have been uploaded to the external storage provider.
  An Upload record will be completed in most cases once the file is copied
  to its final location.

  You must have the correct permissions and CORS settings configured in your
  external provider. We support AWS S3 as the default. See:

  https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

  An external file store must be set up and `enable_direct_s3_uploads` must
  be set to true for this endpoint to function.

- `create_multipart_uploads` (`write`): Creates a multipart upload in the external storage provider, storing
  a temporary reference to the external upload similar to /get-presigned-put.

  You must have the correct permissions and CORS settings configured in your
  external provider. We support AWS S3 as the default. See:

  https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

  An external file store must be set up and `enable_direct_s3_uploads` must
  be set to true for this endpoint to function.

- `generate_presigned_put_uploads` (`write`): Direct external uploads bypass the usual method of creating uploads
  via the POST /uploads route, and upload directly to an external provider,
  which by default is S3. This route begins the process, and will return
  a unique identifier for the external upload as well as a presigned URL
  which is where the file binary blob should be uploaded to.

  Once the upload is complete to the external service, you must call the
  POST /complete-external-upload route using the unique identifier returned
  by this route, which will create any required Upload record in the Discourse
  database and also move file from its temporary location to the final
  destination in the external storage service.

  You must have the correct permissions and CORS settings configured in your
  external provider. We support AWS S3 as the default. See:

  https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

  An external file store must be set up and `enable_direct_s3_uploads` must
  be set to true for this endpoint to function.

### Resource `user_badges`:

- `list_user_badges` (`read`): List badges for a user

### Resource `users_json`:

- `create_users_json` (`write`): Creates a user

### Resource `u`:

- `fetch_card_u` (`read`): Fetch a user card
- `list_emails_u` (`read`): Get email addresses belonging to a user

### Resource `u.json`:

- `retrieve_u_json` (`read`): Get a single user by username
- `update_u_json` (`write`): Update a user

### Resource `u.by_external.json`:

- `retrieve_by_external_u_json` (`read`): Get a user by external_id
- `retrieve_by_provider_by_external_u_json` (`read`): Get a user by identity provider external ID

### Resource `u.preferences`:

- `update_email_u_preferences` (`write`): Update email
- `update_username_u_preferences` (`write`): Update username

### Resource `u.preferences.avatar`:

- `update_preferences_u_avatar` (`write`): Update avatar

### Resource `directory_items_json`:

- `list_directory_items_json` (`read`): Get a public list of users

### Resource `user_avatar`:

- `refresh_gravatar_user_avatar` (`write`): Refresh gravatar

### Resource `user_actions_json`:

- `list_user_actions_json` (`read`): Get a list of user actions

### Resource `session`:

- `retrieve_current_session` (`read`): Get current session info
- `send_forgot_password_email_session` (`write`): Send password reset email

### Resource `users.password_reset`:

- `change_password_users_password_reset` (`write`): Change password

### Resource `chat`:

- `react_to_message_chat` (`write`): React to a message
- `send_message_chat` (`write`): Send a message to a chat channel

### Resource `chat.api.channels.threads`:

- `list_thread_messages_channels_api_chat_threads` (`read`): Fetch thread messages
- `retrieve_thread_channels_api_chat_threads` (`read`): Get thread details

### Resource `chat.api.channels.messages`:

- `list_messages_channels_api_chat_messages` (`read`): Fetch chat messages
- `update_message_channels_api_chat_messages` (`write`): Edit an existing message

### Resource `tag_groups`:

- `create_tag_groups` (`write`): Creates a tag group
- `retrieve_tag_groups` (`read`): Get a single tag group
- `update_tag_groups` (`write`): Update tag group
- `list_tag_groups` (`read`): Get a list of tag groups
