import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://vmktdnklzxnazrusipyp.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZta3RkbmtsenhuYXpydXNpcHlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2MzYxOTcsImV4cCI6MjA4OTIxMjE5N30.okNULpclAP9nOcbzNJlnX70-qHrb1HKotDp7wv55JiQ"
export const supabase = createClient(supabaseUrl, supabaseKey)