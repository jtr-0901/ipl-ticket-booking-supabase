import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://myxslqrwxinvdjfpljkq.supabase.co";
const supabaseKey = "sb_publishable_4tYuylyC-9vGEzMNowKp6w_baPGB5rb";

export const supabase = createClient(supabaseUrl, supabaseKey);