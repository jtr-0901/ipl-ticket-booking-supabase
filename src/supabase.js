import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oclkgjpbvaisgaaxdikf.supabase.co";
const supabaseKey = "sb_publishable_KRNv6Zev7WXeQxKkF3pMkQ_iiUeUvOx";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);