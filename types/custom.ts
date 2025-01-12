import { Database } from "./supabase";
export type applications = Database["public"]["Tables"]["applications"]["Row"]
export type jobs = Database["public"]["Tables"]["jobs"]["Row"]
