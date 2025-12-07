# Blog Edit Endpoint with Supabase Integration

## Overview

Create a new admin endpoint `/blogs/edit` that allows direct editing of blogs stored in Supabase. The page will display all blogs in an editable format with options to update thumbnail, topic (title), description, and delete blogs.

## Implementation Steps

### 1. Database Setup

- Create a `blogs` table in Supabase with the following schema:
- `id` (uuid, primary key, default gen_random_uuid())
- `title` (text) - corresponds to "topic"
- `excerpt` (text) - corresponds to "description"
- `category` (text)
- `date` (text or timestamp)
- `read_time` (text)
- `image` (text) - thumbnail URL/path
- `author` (text)
- `created_at` (timestamp, default now())
- `updated_at` (timestamp, default now())

### 2. Install Supabase Client

- Add `@supabase/supabase-js` package to dependencies
- Create a Supabase client utility file at `lib/supabase.ts` or `utils/supabase.ts` using the project URL and anon key

### 3. Create Edit Page Component

- Create `app/blogs/edit/page.tsx` as a client component
- Fetch all blogs from Supabase on component mount
- Display blogs in a list/grid format with edit controls
- Each blog card should show:
- Current thumbnail (editable)
- Current title/topic (editable input)
- Current description (editable textarea)
- Category, date, read time (editable if needed)
- Save button
- Delete button

### 4. Implement Edit Functionality

- Create inline edit forms for each blog
- Handle image upload/URL input for thumbnail
- Update blog via Supabase `update()` method
- Show success/error feedback after updates

### 5. Implement Delete Functionality

- Add delete button for each blog
- Implement confirmation dialog before deletion
- Delete blog via Supabase `delete()` method
- Refresh list after deletion

### 6. UI/UX Considerations

- Use similar styling to existing blog page (Tailwind, Framer Motion)
- Add loading states while fetching/updating
- Add error handling and user feedback
- Make the interface intuitive for direct access

## Files to Create/Modify

1. **New Files:**

- `app/blogs/edit/page.tsx` - Main edit page component
- `lib/supabase.ts` or `utils/supabase.ts` - Supabase client configuration

2. **Database:**

- Create `blogs` table via Supabase migration

3. **Package Updates:**

- Add `@supabase/supabase-js` to `package.json`

## Technical Details

- Use Supabase MCP tools to create the database table
- Use Supabase JavaScript client for CRUD operations
- The endpoint will be accessible at `/blogs/edit` (direct URL access)
- All operations will be client-side using Supabase client library
- Consider adding Row Level Security (RLS) policies if needed for production